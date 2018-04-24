module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = `${process.cwd()}/dist/`
    }
  }
}
