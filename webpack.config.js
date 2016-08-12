const path = require('path');
const webpack = require('webpack');

const PATHS = {
    ui: path.join(__dirname, 'UI'),
    app: path.join(__dirname, 'UI', 'app.js'),
    dist: path.join(__dirname, 'dist'),
    vendor: path.join(__dirname, 'UI', 'vendor.js'),
    node_modules: path.join(__dirname, 'node_modules')
};

module.exports = {
    entry: {
        app: PATHS.app,
        vendor: [PATHS.vendor]
    },
    output: {
        path: PATHS.dist,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //JS files: react, redux, ect...
            {
            	loader: 'babel',
            	include: PATHS.ui,
                exclude: PATHS.node_modules,
            	test: /\.jsx/
            },
            //Html files
            {
                loader: 'file?name=[name].html',
                include: PATHS.ui,
                test: /\.html/
            },
            //Styles
            {
                loaders: ['style', 'css', 'sass'],
                test: /\.scss$/
            },
            //Fonts
            {
                loader: 'url?limit=10000&name=[name].[ext]',
                test: /\.(ttf|eot|svg|woff|woff2)$/
            }
        ]
    },
      plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
    ]
};