const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./dist/core/App.js",
    mode: "production",
    output: {
        path: `${__dirname}/build`,
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/core/index.html",
        }),
    ],
};