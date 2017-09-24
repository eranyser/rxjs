const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    { loader: "css-loader", options: { sourceMap: true}},
                    { loader: "sass-loader", options: { sourceMap: true}}
                ]
            })
        },
        {
            test: /\.ts$/,
            use: [
                {loader: 'awesome-typescript-loader'}
            ]
        },
      ]
    },

    resolve: {
        /*
         * An array of extensions that should be used to resolve modules.
         * you can now require('file') instead of require('file.js')
         */
        extensions: ['*', '.ts', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ExtractTextPlugin("styles.css")
    ]
};
