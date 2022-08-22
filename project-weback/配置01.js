// 修改webpack的默认配置
//比如修改入口和出口
//-src/index.js
//-dist/main.js
//-src/main.js

//通过commonjs规范去到处一个配置项
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    //mode:'production':生产,'development':开发,
    mode: 'development',
    //webpack的自定义配置
    //entry:相对路径
    entry: './src/main.js',

    // output.path:输出的目录 绝对路径
    // __dirname：代表的是当前文件夹所在的绝对路径
    //output.filename:输出的文件名字
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })]
}
