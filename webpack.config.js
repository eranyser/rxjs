const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
          ]
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
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })]
};
