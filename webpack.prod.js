const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// configuration for .env.dev file
require('dotenv').config({
    path: "./.env.prod"
})

module.exports = [
    {
        entry: "./src/index.tsx",
        mode: "production", // For production
        devtool: 'hidden-source-map', // Hide our source code after deployment
        target: "web",
        output: {
            path: path.resolve(__dirname, "dist/client"),
             publicPath: "/",
            filename: "client_bundle.js",
            clean: true // remove previously generated build files
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),

            // For adding .env variables
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env)
            }),

            // create separate css file (for better performance)
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
            // absolute path to components
            alias: {
                "@components": path.resolve(__dirname, "src/components/")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    // as MiniCssExtractPlugin.loader included so 'style-loader' not required
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(jpeg|jpg|png|svg)$/,
                    loader: 'file-loader',
                }
            ]
        },
        performance: {
            hints: false
        },
        optimization: {
            minimizer: [new CssMinimizerPlugin()],
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
]