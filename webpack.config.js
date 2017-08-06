const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'client'),
    build: path.join(__dirname, 'public')
};

const common = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: 'build/[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
         }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug'
        })
    ]
};

const developmentConfig = {
    devServer: {
        stats: 'errors-only',
        port: 8090
    }
};

module.exports = function (env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return Object.assign(
            {},
            common,
            developmentConfig
        )
    }
};