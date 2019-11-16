const path =require("path");

module.exports = {
    devServer:{
        proxy:{
            "/rexxar":{
                target:"https://m.douban.com",
                changeOrigin:true
            },
            "/api":{
                target:"https://market.douban.com", 
                changeOrigin:true
            },
            "/deal":{
                target:"https://shiji.douban.com",
                changeOrigin:true
            },
             "/lucky":{
              target:"http://39.97.33.178",
              changeOrigin:true,
              pathRewrite:{
                '^/lucky':''
              }
            },
            "/Search":{
                target:"http://m.360kad.com",
                changeOrigin:true
            }
        }
    },

    /**别名配置 */
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@components":path.join(__dirname,"./src/components"),
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: false,
        theme: false
      }
    }
}
