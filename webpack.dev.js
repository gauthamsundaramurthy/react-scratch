const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',  
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
});