const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // production
  // 配合 package.josn => "build": "webpack"   会执行 entry 和 output
  entry: path.join(__dirname, 'src', 'index.js'), // 打包的入口文件
  // 输出文件和目录
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配 js 文件
        loader: ['babel-loader'], // 使用插件
        include: path.join(__dirname, 'src'), // src 目录下
        exclude: /node_modules/ // 排除哪些目录
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'), // 需要打包的 html
      filename: 'index.html' // 输出的文件名 
    })
  ],
  // 本地服务
  // 配合 package.json => "dev": "webpack-dev-server"
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist') // 本地服务文件的上下文路径
  }
}