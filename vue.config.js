module.exports = {
  devServer: {
    https: false
  },
  css: {
    sourceMap: true
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true
    }
  }
}
