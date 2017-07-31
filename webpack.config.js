const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin=require("extract-text-webpack-plugin");

module.exports = {
    context:__dirname + '/front',
    entry:__dirname + '/front/index.js',
    output:{
        path:__dirname + '/public/assets',
        filename:'bundle.js',
        publicPath:'assets'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    plugins:[
        new webpack.DefinePlugin({
            TEST_ENV:process.env.NODE_ENV === "test"
        }),
        new ExtractTextPlugin("bundle.css",
            {
            publicPath: 'assets/core/css',
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: "babel-loader"
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.html/,
                loader: "raw-loader"},
              {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 3 version")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 3 version!sass-loader")
            }
        ]
    },
    devServer: {
        port: 7000,
    },
    devtool: 'source-map',
}

