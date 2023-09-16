const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// configuration for .env.dev file
require('dotenv').config({
    path: "./.env.dev"
})

module.exports = [
    {
        entry: "./src/index.tsx",
        mode: "development",
        target: "web",
        output: {
            path: path.resolve(__dirname, "dist/client"),
            filename: "client_bundle.js",
        },
        devServer: {
            port: 3000,
            open: true,
            hot: true,
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),

            // For adding .env variables
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env)
            }),
            /**
            
            new webpack.DefinePlugin({
                'process.env': {
                    'USER_NAME': JSON.stringify(process.env),
                }
            })
            */

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
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(jpeg|jpg|png|svg)$/,
                    loader: 'file-loader',
                }
            ]
        }
    }
]