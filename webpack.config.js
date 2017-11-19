var webpack = require('webpack');
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true });//代码压缩
module.exports = {
  /*
   * 数组形式配置入口
   * */
  entry: {
    'vue-zweb': './src/vue-zweb'
  },
  //输出文件出口
  output: {
    path: __dirname + '/dist',  //输出路径
    filename: '[name].min.js'     //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
  },
  module: {
    rules: [
      { test: /.js$/, use: ['babel-loader'] }
    ]
  },
  plugins: [
    uglifyPlugin
  ]
}