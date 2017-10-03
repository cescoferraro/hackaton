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
  rules: [typeScript(env)]
});
