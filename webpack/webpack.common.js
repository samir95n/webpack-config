const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[contenthash].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
  ],
}

// optimization: {
//   splitChunks: {
//     chunks: 'all',
//     minSize: 0,
//     maxInitialRequests: 20,
//     maxAsyncRequests: 20,
//     cacheGroups: {
//       vendors: {
//         test: /[\\/]node_modules[\\/]/,
//         name(module, chunks, cacheGroupKey) {
//           const packageName = module.context.match(
//             /[\\/]node_modules[\\/](.*?)([\\/]|$)/
//           )[1]
//           return `${cacheGroupKey}.${packageName.replace('@', '')}`
//         },
//       },
//       common: {
//         minChunks: 2,
//         priority: -10,
//       },
//     },
//   },
//   runtimeChunk: 'single',
// },
