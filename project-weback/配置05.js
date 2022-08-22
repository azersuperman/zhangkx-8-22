//配置打包css文件
// 安装loader

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',//配置打包模式，包括开发dev和生产pro(开启压缩，比较慢)
    entry: './src/main.js',//打包入口，默认src/index.js,需要相对路径
    //打包出口，涉及到文件路径一般给相对路径，涉及到目录路径，一般给绝对路径
    output: {
        path: path.join(__dirname, 'bundle'),//指定输出目录名字，一定是个绝对路径
        filename: 'bundle.js',//指定输出的文件名
        clean: true//先清空path指定的目录，在
    },

    // 配置模块解析规则，webpack打包的时候只能打包js文件
    // module.rules:[] 配置我们的loader
    // use数组里从后向前解析
    module: {
        rules: [
            //module。rules里的每个对象称为一个Rule对象
            //test:正则，匹配的文件
            {
                test: /\.css$/,//文件正则，匹配文件的
                use: ["style-loader", "css-loader"],//
            },

            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'less-loader']
            },

            //处理图片
            //在正则中()代表的是表达式结果
            //type:指定资源模块的方式(怎么处理图片)
            //asset/resource打包的时候会打包成单独的文件
            {
                test: /\.(gif|jpg|png|svg|ico)$/,
                type: 'asset/resource'
            }
        ]
    },

    //面试常问：loader和plugin的区别loader提高webpack打包能力，plugin提高整个webpack的边边角角的能力
    //terser-webpack-plugin整个插件是内置的，用于压缩js代码，当你配置了mode=production会自动开启
    //打包的时候会把打包后的js自动引入到html文件
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],

    //devServer配置开发服务器，本质node.js框架express编写的服务器，
    devServer: {
        open: true,//开启服务的时候，自动打开磨人的浏览器
        port: 8080
    }
}
