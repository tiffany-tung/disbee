var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = __dirname;

module.exports = {
    context: ROOT_DIR,

    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(ROOT_DIR, 'client', 'js', 'index.es6.js')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.es6.js'],
        alias : {
            react: path.join(__dirname, 'node_modules', 'react'),
            classes: path.join(ROOT_DIR, 'client', 'js', 'classes'),
            components: path.join(ROOT_DIR, 'universal', 'components')
        }
    },

    output: {
        path: path.join(ROOT_DIR,'build'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                loader: 'babel',
                exclude: path.join(ROOT_DIR, 'node_modules'),
                query: {
                    stage: 1
                }
            }
        ]
    }
};
