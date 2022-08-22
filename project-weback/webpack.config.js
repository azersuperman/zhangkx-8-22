const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { url: false }
                }],
            },

            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'less-loader']
            },

            {
                test: /\.(gif|jpg|png|svg|ico)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 25 * 1024
                    }
                }
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:10][ext]'
                }
            },

            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },


    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',

    }),
    new MiniCssExtractPlugin()
    ],


    devServer: {
        open: true,
        port: 8080
    }
}
