require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common.js');

module.exports = (env, config) => {
    return merge(common, {
        entry: {
            index: './src/server/index.js',
        },
        output: {
            filename: 'js/[name].server.js',
            path: path.resolve(__dirname, 'dist/server'),
        },
        target: 'node', // target 設置為node，webpack 將在類 Node.js 環境編譯代碼，預設 'web'
        externals: [nodeExternals()], // 排除node_modules
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(config.mode),
            })
        ]
    });
}