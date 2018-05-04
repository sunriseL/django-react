const path = require('path');
process.env.API_URL = '127.0.0.1:8000';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

    /*入口*/
    entry: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../backend/common_static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loader:['style-loader','css-loader','less-loader']
        },
        {
            test: /\.less$/,
            use: [{
           loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader",
            options: { javascriptEnabled: true }
        }]
        }],
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            util: path.join(__dirname, 'src/util')
        }
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    plugins: [
        new ExtractTextPlugin("style.css") //提取出来的样式放在style.css文件中
    ]
};
