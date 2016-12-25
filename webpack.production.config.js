// 如果不想单独配置该文件，可以在config.js里判断process.argv.indexOf('-p')，如果包含则加入相应插件
// 同时要把module.exports里面的devServer里面的配置去掉，在package.json的script里进行配置
// "start": "start http://localhost:3456/ & webpack-dev-server --devtool eval --progress --colors --hot --inline --port 3456 --history-api-fallback"
// 如果取消本文件，且不删除config.js里devServer里面的配置，那么编译出来的文件不会被压缩

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

var plugins = [
        // webpack中-p代表--optimize-minimize也就是压缩的意思,cli中progress代表显示编译进度
        // webpack -p压缩的时候不会去掉一些注释，所以在这里可以设置一下，进一步压缩文件
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false
          },
          compress: {
            warnings: false,
            // 去掉debugger和console
            drop_debugger: true,
            drop_console: true
          }
        }),
        new webpack.optimize.DedupePlugin(),

        // DefinePlugin()方法能创建可以在编译时配置的全局常量，这可能是非常有用的，允许开发版本和编译出的版本具有不同的行为
        // 在这里将环境设置为时'production'时，react会自动去掉没有用到的代码部分，让文件进一步精简
        new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new ExtractTextPlugin('[name]-[hash].css', {allChunks: true}), //css单独打包

        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于 outpath
            template: './build/template/index.html', //html模板路径
            hash: true  //为静态资源生成hash值
        }),
        new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor'],
        minChunks: Infinity
        }),

    ];

var outpath = './build/production/assets/'

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom','material-ui'/*等等其他的模块*/]
    },
    output: {
        path: outpath,
        publicPath: 'assets/',
        filename: '[name]-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css?modules!postcss!sass'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                loader: ExtractTextPlugin.extract("style-loader","css-loader")
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    postcss: [autoprefixer]
};
