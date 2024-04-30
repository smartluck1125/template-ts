const isProd = !process.env.INIT_CWD === process.cwd()

if (isProd) {
  process.exit()
} else {
  try {
    const { execa } = await import('execa')
    const { stdout } = await execa('simple-git-hooks').pipeStdout(
      process.stdout
    )
  } catch (error) {
    console.error(error)
  }
}
