const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:7001/app/v1',
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  }
})
