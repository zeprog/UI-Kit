const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}
const PAGES_DIR = `${PATHS.src}/pug`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },
        {
            test: /\.(eot|otf|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `./postcss.config.js` } }
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `./postcss.config.js` } }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }
    ]
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: `${PATHS.assets}css/[name].css`
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/${PATHS.assets}img`,to:  `${PATHS.assets}img` },
                { from: `${PATHS.src}/${PATHS.assets}fonts`,to:  `${PATHS.assets}fonts` }
            ]
        }
        ),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
          }))
    ]
}