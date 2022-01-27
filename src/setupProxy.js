const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware   ('/api',
    {
        target: "http://120.27.196.130:8080/",
        changeOrigin:true,
        pathRewrite:{
            '^/api': '/'
        },
        secure:true
    }
    ));
}