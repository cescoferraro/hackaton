const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin-cesco');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const noop = require('noop-webpack-plugin');

const define = env =>
      new webpack.DefinePlugin({
	  NODE_ENV: JSON.stringify(env.production ? 'production' : 'development'),
	  env: JSON.stringify(env.production ? 'production' : 'development')
      });
const hmr = env =>
      !env.production ? new HotModuleReplacementPlugin() : noop();

const icons = new FaviconsWebpackPlugin({
    config: {
	appName: 'hackaton',
	background_color: '#000000',
	display: 'fullscreen',
	lang: 'pt',
	start_url: './?pwa=true',
	statsFilename: 'icons/[name].[ext]',
	gcm_sender_id: 'xxxxx',
	theme_color: '#8b4513'
    },
    emitStats: true,
    logo: './public/icon/favicon.jpg',
    persistentCache: false,
    prefix: 'icons/'
});

const html = new HtmlWebpackPlugin({
    inject: 'body',
    template: './public/index.html',
    chunks: ['main']
});
const cssDev = () => {
    return new ExtractCssChunks();
};
module.exports = env => [cssDev(), icons, html, hmr(env), define(env)];
