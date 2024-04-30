// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config({
  files: ['**/*.ts'],
  ignores: ['**/dist/**'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier
  ],
  plugins: {
    '@typescript-eslint': tseslint.plugin
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
      sourceType: 'module',
      ecmaVersion: 'latest'
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'require-atomic-updates': 'off',
    'no-async-promise-executor': 'off'
  }
})
