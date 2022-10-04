const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: 'production',
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'scss']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
				template: 'public/index.html',
				cache: false
      })
    ],
    entry: {
      // imagine: path.join(__dirname, 'src', 'components', 'imagine', 'index.ts'),
      app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
      filename: '[name].js',
      publicPath: '/',
      library: 'imagine-ui-react',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  };
};
