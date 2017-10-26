const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

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

const typeScript = env => ({
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

module.exports = env => ({
  rules: [typeScript(env), css(env)]
});
