const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        open: true,
        port:9000
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            use:'babel-loader'
        },
        {
            test: /\.(css|less|scss|sass|sss)$/,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:8].[ext]',
            },
          }]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}