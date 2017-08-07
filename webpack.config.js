const path = require('path');

const typeScript = () => ({
  exclude: /node_modules/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        sourceMap: true,
        useBabel: false,
        useCache: true
      }
    }
  ],
  test: /\.tsx?$/
});

module.exports = (env = { production: false }) => ({
  devServer: {
    compress: true,
    port: 9000
  },
  devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    main: path.resolve(__dirname, './client/client.tsx')
  },
  externals: {
    vertx: 'vertx'
  },
  name: 'client',
  output: {
    filename: env.production ? 'js/[name]_[hash].js' : 'js/[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: env.production
      ? 'https://stool.cescoferraro.xyz/'
      : 'http://localhost:5555/'
  },
  module: {
    rules: [typeScript()]
  },
  resolve: {
    extensions: ['.css', '.js', '.tsx', '.json', '.pcss']
  },
  target: 'web'
});
