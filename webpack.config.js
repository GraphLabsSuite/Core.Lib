const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    entry: "./src/main.ts",
    output: {
        filename: "[name].js",
        library: 'graphlabs.core.lib',
        libraryTarget: 'umd',
        path: __dirname + "/dist"
    },
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: '/node_modules',
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        },
                    },
                    'sass-loader',
                ]
            },
            {
                test:/\.(svg|eot|woff2|woff|ttf)$/,
                loader: 'file-loader',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TsConfigPathsPlugin(),
    ],
};
