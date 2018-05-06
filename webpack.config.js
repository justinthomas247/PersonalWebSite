var webpack = require("webpack");
const path = require("path");

module.exports = {
entry: "./index.js",
output: {
    filename: "bundle.js",
    path: path.resolve("./release"),
    publicPath: "./release"
},
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader", options: { url: false } }
            ]
        }
    ]
},
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
    })
]
}