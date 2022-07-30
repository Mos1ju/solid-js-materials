const path = require("path");

module.exports = {
    entry: {
        components: "./src/components/exports.ts"
    },
    mode: "production",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: "babel-loader" },
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build/release/"),
        filename: "[name].js",
        library: {
            name: "solid-js-materials",
            type: "umd"
        },
        clean: true
    },
    externals: {
        "solid-js": {
            commonjs: "solid-js",
            commonjs2: "solid-js",
            amd: "solid-js",
            root: "solid-js"
        },
        "solid-js/web": {
            commonjs: "solid-js/web",
            commonjs2: "solid-js/web",
            amd: "solid-js/web",
            root: "solid-js/web" 
        }
    }
}
