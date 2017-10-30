const path = require('path');

const postCSS = {
  loader: 'postcss-loader',
  options: {
    plugins: loader => [
      require('postcss-import')({ root: loader.resourcePath }),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-cssnext')({
        browsers: '> 0%',
        colorFunction: true,
        customProperties: true,
        customSelectors: true
      })
    ]
  }
};

const cssHelper = client => {
  return {
    loader: client ? 'css-loader' : 'css-loader/locals',
    options: {
      localIdentName: '[name]__[local]--[hash:base64:5]',
      modules: true
    }
  };
};

const css = (client = false) => {
  const local = [cssHelper(client), postCSS];
  return {
    test: /\.css$/,
    use: client ? ExtractCssChunks.extract({ use: local }) : local
  };
};

module.exports = (env = { production: false }) => ({
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: true,
    host: '0.0.0.0',
    port: 5555,
    public: '0.0.0.0:5555',
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
