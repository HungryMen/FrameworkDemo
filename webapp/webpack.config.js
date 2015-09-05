var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        script: './scripts/components/main.jsx'
    },
    output: {
        path: './assets/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("app.css", {
            allChunks: true
        })
    ]
};
