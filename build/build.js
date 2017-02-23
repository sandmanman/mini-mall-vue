/**
 * 构建环境下的配置
 * 执行”npm run build”的时候首先执行的是build/build.js文件，build.js主要完成下面几件事：
 * 1. loading动画
 * 2. 删除创建目标文件夹
 * 3. webpack编译
 * 4. 输出信息
 * 
 * webpack编译之后会输出到配置里面指定的目标文件夹；删除目标文件夹之后再创建是为了去除旧的内容，以免产生不可预测的影响
 * 
 */

// https://github.com/shelljs/shelljs
require('./check-versions')()

process.env.NODE_ENV = 'production'

// Elegant terminal spinner
var ora = require('ora')
var path = require('path')

// 用于在控制台输出带颜色字体的插件
var chalk = require('chalk')

// 执行Unix命令行的插件
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start() // 开启loading动画

// 输出文件的目标文件夹
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

// 递归删除旧的目标文件夹
shell.rm('-rf', assetsPath)

// 重新创建文件夹 
shell.mkdir('-p', assetsPath)
shell.config.silent = true

// 将static文件夹复制到输出的目标文件夹
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

// webpack编译
webpack(webpackConfig, function (err, stats) {
  spinner.stop() // 停止loading动画

  // 没有出错则输出相关信息
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
