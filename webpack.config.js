const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const jsx = require('./webpack/jsx');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');

const PATHS = {
    source: path.join(__dirname, 'client'),
    build: path.join(__dirname, 'public')
};

const common = merge([
        {
            entry: PATHS.source + '/index.js',
            output: {
                path: PATHS.build,
                filename: 'build/[name].js'
            },

            plugins: [
                new HtmlWebpackPlugin({
                    template: PATHS.source + '/index.pug'
                })
            ]
        },
        pug(),
        jsx(),
        images()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS()
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ])
    }
};