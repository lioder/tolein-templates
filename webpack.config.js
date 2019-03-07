const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new OpenBrowserWebpackPlugin({
            url: "http://localhost:8080"
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/, // ? 表示x可选，即js或jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ] 
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192 // 单位 byte
                        }
                    }
                ]
            }
        ]
    }

}