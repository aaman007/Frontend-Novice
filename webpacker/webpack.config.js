const path = require("path");

module.exports = {
    mode: "production",
    devtool: "eval-source-map",
    entry: "./src/index.ts", // relative path
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "bundle.js", // absolute path
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 9000,
    },
}