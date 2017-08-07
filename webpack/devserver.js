module.exports = function () {
    return {
        devServer: {
            stats: 'errors-only',
            port: 8090,
            contentBase: __dirname + '/public',
            inline: true
        }
    }
};
