import path from 'node:path'
import glob from 'glob'
import { fileURLToPath } from 'url'
import pkg from './package.json' with { type: 'json' }
import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'

const production = process.env.BUILD === 'production'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

const rootDir = path.resolve(process.cwd())
const distDir = resolve(rootDir, 'dist')

const ts = typescript({
  check: production,
  tsconfig: resolve(rootDir, 'tsconfig.build.json'),
  tsconfigOverride: {
    compilerOptions: {
      declarationMap: !production
    }
  }
})

export default defineConfig({
  input: Object.fromEntries(
    glob
      .sync('src/**/*.ts')
      .map((file) => [
        path.relative(
          'src',
          file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
      ])
  ),
  output: {
    format: 'es',
    dir: distDir,
    sourcemap: 'inline'
  },
  external: Object.keys(pkg.dependencies),
  plugins: [
    json({
      namedExports: false
    }),
    nodeResolve(),
    commonjs({
      transformMixedEsModules: true
    }),
    ts,
    del({ targets: 'dist/*' })
  ]
})
