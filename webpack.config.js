const HtmlWebPackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   template: './src/index.html',
//   filename: './index.html',
// });
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader', 'img-loader'],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
// plugins: [
//   new HtmlWebPackPlugin({
//     template: './src/main.html',
//     inject: true,
//     chunks: ['index'],
//     filename: 'main.html',
//   }),
//   new HtmlWebPackPlugin({
//     template: './src/danca.html',
//     inject: true,
//     chunks: ['index'],
//     filename: 'danca.html',
//   }),
//   new HtmlWebPackPlugin({
//     template: './src/index.html',
//     inject: true,
//     chunks: ['index'],
//     filename: 'index.html',
//   }),
//   new CopyPlugin({
//     patterns: [
//       {
//         from: 'src/assets',
//         to: 'assets',
//         noErrorOnMissing: true,
//       },
//     ],
//   }),
// ],
// };
