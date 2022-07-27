const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        tests: "./src/tests/index.tsx"
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "solid-js-materials": path.resolve(__dirname, "build/debug/components.js")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/tests/index.html",
            inject: "body"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build/tests"),
        filename: "[name].js",
        clean: true
    },
    devServer: {
        port: 8080,
        compress: true
    }
}
