const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        index: [
            'webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true',
            './src/client/index.js'
        ]
    },
    output: {
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    plugins: [
        // 提供hot reload功能
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ]
});