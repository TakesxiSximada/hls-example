// -*- coding: utf-8 -*-
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
    },
    output: {
        path: path.join(__dirname, 'static/var'),
        filename: '[name].bundle.js',
    },
    modules: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.svg$/, loader: 'file-loader?mimetype=image/svg+xml'},
            { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff'},
            { test: /\.woff2$/, loader: 'file-loader?mimetype=application/font-woff'},
            { test: /\.eot$/, loader: 'file-loader?mimetype=application/font-woff'},
            { test: /\.ttf$/, loader: 'file-loader?mimetype=application/font-woff'},
        ],
    },
    resolve: {
        extensions: ["", ".js", ".css", ".svg", ".woff", ".eof", ".ttf", ".png"],
    },
    plugins: [
    ],
};
