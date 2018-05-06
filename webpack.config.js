const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;

const is_dev = NODE_ENV === "development";

module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            template: "index.html",
            filename: is_dev ? "index.html" : "../templates/index.html"
        }),
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    }, {
                        loader: "css-loader",  // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                        },
                    }, {
                        loader: "postcss-loader", // compiles based on config options
                        options: {
                            sourceMap: true,
                            ident: 'postcss',
                            plugins: [
                                require('precss')
                            ]
                        }
                    },
                ]
            },
        ]
    },
};
