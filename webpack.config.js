const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/App',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|woff2?|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Gearbox UI Assessment'
        }),
        new CopyWebpackPlugin([
            {
                context: 'static/',
                from: '**/*'
            }
        ])
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};