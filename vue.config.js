/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  
})
*/

module.exports = {
  devServer: {
        proxy: 'http://localhost:7000/',
        port : 8080
    }
}
