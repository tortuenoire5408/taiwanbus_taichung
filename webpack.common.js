const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
    entry: {
        index: './src/client/index.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/client'),
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                }, 'css-loader'],
            }, {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 4, // 用以限制須轉為 base64 的文件大小 (單位：byte)
                            esModule: false,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]',
                                    publicPath: '../'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        chunkIds: 'named',// 指定打包過程中的chunkId，設為named會生成可讀性好的chunkId，便於debug
        splitChunks: {
            cacheGroups: {
                materialVendor: {
                    name: 'materialVendor',
                    test: (module) => {
                        return /@mui|@material-ui|@emotion/.test(module.context);
                    },// node module name符合@mui|@material-ui|@emotion
                    chunks: 'initial',
                    priority: 4,
                },
                reactVendor: {
                    name: 'reactVendor',
                    test: (module) => {
                        return /react|redux|prop-types/.test(module.context);
                    },// node module name符合react|redux|prop-types
                    chunks: 'initial',
                    priority: 3,
                },
                vendor2: {
                    name: 'vendor.2',
                    test: /[\/]node_modules[\/]/,
                    chunks: 'initial',
                    priority: 2,
                },
                vendor1: {
                    name: 'vendor.1',
                    test: /[\/]node_modules[\/]/,
                    chunks: 'async',
                    priority: 1,
                }
            }
        }
    },
    plugins: [
        new LoadablePlugin(),
        new MiniCssExtractPlugin({
            // 类似于 webpackOptions.output 中的选项
            // 所有选项都是可选的
            filename: 'css/[name].css',
            linkType: 'text/css'
        }),
        new webpack.DefinePlugin({
            'process.env.IP': JSON.stringify(process.env.IP),
            'process.env.PORT': JSON.stringify(process.env.PORT),
            'process.env.BASE_HREF': JSON.stringify(process.env.BASE_HREF),
        }),
    ],
    // performance: {//webpack 的性能提示配置
    //     hints: 'warning',// 設定false為關閉性能提示
    //     maxEntrypointSize: 532480,// 入口起點的最大體積 520 KiB 預設244 KiB
    //     maxAssetSize: 532480,// Asset文件的最大體積 520 KiB 預設244 KiB
    //     // assetFilter: function(assetFilename) {
    //     //     return assetFilename.endsWith('.js'); //只给出 js 文件的性能提示
    //     // }
    // }
};