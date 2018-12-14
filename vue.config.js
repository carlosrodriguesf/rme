module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rme' : '',
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
