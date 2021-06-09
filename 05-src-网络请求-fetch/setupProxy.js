const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:5000', //请求转发给谁
      // changeOrigin 控制服务器收到的请求头中Host字段值 表明请求的来源，
      // 为true时会掩盖真实来源（即伪装成服务器地址），默认false。通俗来说，表示是否跨域
      changeOrigin: true, 
      pathRewrite: {
        '^/api1': '',
      }
    })
  )
}