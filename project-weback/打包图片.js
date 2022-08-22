const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,//文件正则，匹配文件的
                use: ["style-loader", "css-loader"],//
            },

            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'less-loader']
            },

            // 总结：assetModule
            // asset/resource 将文件打包成单独的文件
            // asset/inline将文件打包成base64
            // asset以8kb为界限，大于8kb打包成文件，小于8kb打包成base64
            // {
            //     test: /\.(gif|jpg|png|svg|ico)$/,
            //     type: 'asset/resource',
            //     //generator.filename:指定生成文件的名字
            //     //[name]:文件的原名 [hash]:随机生成的字符串
            //     //[ext]:代表文件的原始后缀
            //     generator: {
            //         filename: 'images/[name]-[hash:6][ext]'
            //     },
            // },

            // {
            //     test: /\.(gif|jpg|png|svg|ico)$/,
            //     type: 'asset/inline',
            // },

            {
                test: /\.(gif|jpg|png|svg|ico)$/,
                //以8kb为界限，大于打包成文件，小于打包成base64
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash:6][ext]'
                },
                parser: {
                    //base64打包的时候选项调教
                    dataUrlCondition: {
                        //maxSize单位是字节
                        maxSize: 25 * 1024//25kb
                    }
                }
            },
        ]
    },


    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
    })],


    devServer: {
        open: true,
        port: 8080
    }
}
