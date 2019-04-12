const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

const config = {
    entry:{
        app: './src/CustomPage.js'
    },
    output:{
        filename:'CustomPage.js',
        path: path.resolve(__dirname,'dist'),
        library: 'CustomPage',
        libraryExport: "default",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer:{
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
               { from: /.*/, to:'./index.html'},
            ],
        },
        hot: true,
        contentBase: false,
        compress: true,
        host:'0.0.0.0',
        port: 9085,
        publicPath: '/',
    },
    module: {
        rules: [
            { 
                test: /\.(txt|jstxt)$/, 
                loader: 'raw-loader' 
            }
            ,
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=10240'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),config.optimization.minimize
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};

module.exports = config;