const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const images = () => {
  return {
    test: /\.(gif|png|jpe?g)$/i,
    loaders: [
      {
        loader: 'file-loader',
        query: {
          emitFile: true,
          name: 'images/img-[sha512:hash:base64:7].[ext]'
        }
      },
      {
        loader: 'image-webpack-loader',
        query: {
          mozjpeg: {
            progressive: true
          },
          gifsicle: {
            interlaced: false
          },
          optipng: {
            optimizationLevel: 4
          },
          pngquant: {
            quality: '75-90',
            speed: 3
          }
        }
      }
    ]
  };
};

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
    test: /\.pcss$/,
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
  rules: [typeScript(env), css(env), images()]
});
