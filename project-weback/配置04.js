//配置打包css文件
// 安装loader
//

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

    // 配置模块解析规则
    // module.rules:[] 配置我们的loader
    // use数组里从后向前解析
    module: {
        rules: [
            //test:正则，匹配的文件
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],

    devServer: {
        open: true,
        port: 8080
    }
}
