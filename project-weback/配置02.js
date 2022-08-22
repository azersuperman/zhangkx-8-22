
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

    //development:开发
    devServer: {
        //当yarn serve ，会自动打开默认浏览器运行项目
        open: true,
        //端口号默认8080。可以设置的范围(0,65535]
        port: 8000
    }
}
