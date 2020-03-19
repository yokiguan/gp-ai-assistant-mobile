module.exports = {
    lintOnSave: false,
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'static',
    devServer: {
        host:"localhost",
        open: true, 
        port:'8081',
        proxy: {
            '/DHT/mobile': {
            target: 'http://www.jiandaohealth.com/DHT/mobile/',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/DHT/mobile':''
            }
        }
      }
    }
};