module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rme' : '/',
  css: {
    sourceMap: process.env.NODE_ENV === 'production'
  }
}
