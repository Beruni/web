var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.jade$/,
                loader: 'raw!jade-html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                loader: 'raw!sass'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.jade'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.EnvironmentPlugin([
            'NODE_ENV', 
            'DISCOVERY_SERVICE_HOST', 
            'DISCOVERY_SERVICE_PORT', 
            'DISCOVERY_SERVICE_PATH'
        ])
    ]
};