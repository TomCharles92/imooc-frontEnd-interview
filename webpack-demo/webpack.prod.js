const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  // 配合 package.josn => "build": "webpack"   会执行 entry 和 output
  entry: path.join(__dirname, 'src', 'index.js'), // 打包的入口文件
  // 输出文件和目录
  output: {
    // contenthash 根据内容算出 hash 值
    //  内容不变 hash 值就不会变
    filename: 'bundle.[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/, // 匹配 js 文件
      loader: ['babel-loader'], // 使用插件
      include: path.join(__dirname, 'src'), // src 目录下
      exclude: /node_modules/ // 排除哪些目录
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'), // 需要打包的 html
      filename: 'index.html' // 输出的文件名 
    })
  ]
}