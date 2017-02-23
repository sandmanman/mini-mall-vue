// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// 数据来源 https://enjoy.ricebook.com/
const apiHost = 'https://api.ricebook.com/';

module.exports = {
  // 构建产品时使用的配置
  build: {
    // webpack的编译环境
    env: require('./prod.env'),
    // 编译输入的index.html文件
    index: path.resolve(__dirname, '../dist/index.html'),
    // webpack输出的目标文件夹路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径
    assetsPublicPath: '/',
    // 使用SourceMap
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 默认不打开开启gzip模式
    productionGzip: false,
    // gzip模式下需要压缩的文件的扩展名
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // 开发过程中使用的配置
  dev: {
    // webpack的编译环境
    env: require('./dev.env'),
    // dev-server监听的端口
    port: 1128,
    // 启动dev-server之后是否自动打开浏览器
    autoOpenBrowser: false,
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径
    assetsPublicPath: '/',
    // 请求代理表，在这里可以配置特定的请求代理到对应的API接口
    // 例如将'/api/xxx'代理到'www.example.com/api/xxx'
    proxyTable: {
      '/api/page': { // 首页
        target: apiHost+'hub/home/v1/home/page.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/page': ''
        }
      },
      '/api/tab': { // 
        target: apiHost+'hub/home/v1/home/tab.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/tab': ''
        }
      },
      '/api/product': { // 产品详细
        target: apiHost+'3/enjoy_product/product_addition_info.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/product': ''
        }
      },
      '/api/recommend_product': { // 推荐产品
        target: apiHost+'3/enjoy_product/recommend_product_v2.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/recommend_product': ''
        }
      },
      '/api/category': { // 分类
        target: apiHost+'4/tab/category.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/category': ''
        }
      },
      '/api/category_product_list': { // 分类列表
        target: apiHost+'4/tab/category_product_list.json',
        changeOrigin: true,
        pathRewrite: {
          '^/api/category_product_list': ''
        }
      },
      '/api/sub_category': { // 列表页排序字段
        target: apiHost+'4/tab/sub_category.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/sub_category': ''
        }
      },
      '/api/search': { // 搜索
        target: apiHost+'3/enjoy_product/search.json/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/search': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    // 是否开启 cssSourceMap
    cssSourceMap: false
  }
}
