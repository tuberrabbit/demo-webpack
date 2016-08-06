'use strict';
module.exports = {
    entry: {
        app: './src/app',
        a: './src/aa',
        b: './src/bb',
        c: ['./src/cc', './src/dd']
    },
    output: {
        path: './dist',
        filename: '[name].entry.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    }
};