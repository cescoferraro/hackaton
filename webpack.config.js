const path = require('path');

module.exports = (env = { production: false }) => ({
  devServer: {
    allowedHosts: ['localhost:5555'],
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: true,
    port: 5555,
    public: 'localhost:5555',
    watchContentBase: true
  },
  devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    main: path.resolve(__dirname, './client/client.tsx')
  },
  plugins: require('./internal/webpack/plugins.js')(env),
  name: 'client',
  output: {
    filename: env.production ? 'js/[name]_[hash].js' : 'js/[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  module: require('./internal/webpack/loaders.js')(env),
  resolve: {
    extensions: ['.css', '.js', '.tsx', '.json', '.pcss']
  },
  target: 'web'
});
