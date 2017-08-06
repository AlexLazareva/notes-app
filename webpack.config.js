const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'client'),
    build: path.join(__dirname, 'public')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: 'build/[name].js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Notes SPA'
        })
    ]
};