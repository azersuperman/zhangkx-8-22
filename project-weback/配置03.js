/* 
为什么要配置脚本
"scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  }, */
// npx脚本命令
// 首先看到node_modules找到webpack命令执行它
//看看有没有安装webpack，使用webpack打包，如果没有安装，去下载webpack并打包，打包完了再删除webpack
//npx webpack serve启动开发服务器





const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true,
    },

    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],

    devServer: {
        open: true,
        port: 8080
    }
}
