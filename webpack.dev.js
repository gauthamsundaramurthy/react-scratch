const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        chunkFilename : "[name].[chunkhash].chunk.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        stats: 'normal',
        open: true,
        port:9000
    },
    devtool: 'cheap-source-map',
    performance: {
        hints: 'warning'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
});