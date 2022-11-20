const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["babel-polyfill","regenerator-runtime/runtime.js", "./src/app.js"],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modulse/
        }, {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                { 
                    loader : 'css-loader' , options: {
                        sourceMap: true
                    }   
                }, { 
                    loader : 'sass-loader' , options: {
                        sourceMap: true
                    }   
                },
            ]
        }]
    },
};

