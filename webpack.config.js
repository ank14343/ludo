var path = require("path")
module.exports = {
    mode: "none",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./public")
    },
    resolve: {
        extensions: [ ".tsx", ".ts" ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    watch: true
}