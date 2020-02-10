const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  }, module:
  {
    rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
          'vue-style-loader',
          'css-loader']
        },
        { test: /\.(png|svg|jpg|gif)$/, loader: ['file-loader'] }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
};
