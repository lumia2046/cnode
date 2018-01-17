var path = require('path');
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var redBox = require('redbox-react')
var host = 'localhost'
var port = '5678'

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development'
const isPro = nodeEnv !== 'development'
const os = require('os').platform()
console.log("当前运行系统：", os)
console.log("当前运行环境：", isPro ? 'production' : 'development')

const moduleCss = new ExtractTextPlugin('module.css')
const globalCss = new ExtractTextPlugin('global.css')
const uiCss = new ExtractTextPlugin('ui.css')

var plugins = [
    globalCss,
    moduleCss,
    uiCss,
    // 这个插件的作用是将打包的js文件拆分，默认拆分出2个
    new webpack.optimize.CommonsChunkPlugin({
        // 这个vendor就是打包后的文件名字，需要写在index.html里面
        name: 'vendor',
        minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    //DefinePlugin 在原始的源码中执行查找和替换操作，在导入的代码中，
    // 任何出现 process.env.NODE_ENV的地方都会被替换为nodeEnv变量转成的json字符串
    new webpack.DefinePlugin({
        // 定义全局变量
        'process.env': {
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    })
]

var app = ['./index.js']

if (isPro) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            compress: {
                warnings: false,
                // 去掉debugger和console
                drop_debugger: true,
                drop_console: true
            }
        })
    )
} else {
    app.unshift('react-hot-loader/patch', 'webpack-dev-server/client?http://' + host + ':' + port, 'webpack/hot/only-dev-server')
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

// // 开启服务器后不能用相对路径
// var outpath = path.resolve(__dirname, 'build');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: isPro ? 'source-map' : 'inline-source-map',
    entry: {
        app: app
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: isPro ? './build/' : '/build/',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader?cacheDirectory=true']
            },
            // {
            //     test: /\.scss$/,
            //     // exclude: [nodeModulesPath]用来排除不处理的目录
            //     exclude: path.resolve(__dirname, 'src/styles'),
            //     // webpack配置loader时是可以不写loader的后缀明-loader，因此css-loader可以写为css
            //     // css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能
            //     // style-loader将所有的计算后的样式通过<style>标签的形式加入到dom的head中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
            //     // CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。
            //     // 产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名（或者在css中类名前面加:local()）。这就是 CSS Modules 的做法。
            //     // css-loader支持CSS Modules，在css-loader后面加了一个查询参数modules，表示打开 CSS Modules 功能
            //     // 使用css-loader就可以支持css模块化，但此时css中的类名还是不能重复，必须加上参数modules，编译时就会自动将类名换成哈希值类型的类名，不担心重复了
            //     // loader处理文件的加载顺序是从右到左，即先通过sass-loader将scss转成css,然后再用postcss预处理，添加上css3动画兼容性前缀等
            //     // 然后在通过css-loader将css引入js文件,如果css-loader加了一个查询参数modules，则会将css中类名MD5化，使其变成唯一
            //     // 最后通过styleloader将计算好的样式文件以style标签的形式加入到dom头部
            //     use: ['style-loader', 'css-loader?modules', 'sass-loader']
            // }, 
            {
                test: /\.scss$/,
                // linux中
                include: os === 'win32' ? /(src\\components|src\\containers)/ : /(src\/components|src\/containers)/,
                use: moduleCss.extract({
                    use: [
                        {
                            loader: "css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]"
                        }, {
                            loader: 'sass-loader'
                        }]
                })


            }, {
                test: /\.css$/,
                include: os === 'win32' ? /(src\\styles)/ : /(src\/styles)/,
                use: globalCss.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }
                        // , {
                        //     loader: "postcss-loader"
                        // }
                    ]
                })
            }, {
                test: /\.css$/,
                include: /node_modules/,
                use: uiCss.extract({
                    use: [
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        }
                        // , {
                        //     loader: "less-loader" // compiles Less to CSS
                        // }
                    ]
                })
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: ['url-loader?limit=50000&name=[path][name].[ext]']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        // alias里面设置的文件跟node_modules里面的文件等价，直接通过文件名导入，webpack就能找到相应文件。

        alias: {
            //当import 'redBoxBlackStyle' 时，webpack就会自动找根文件夹下面的redBoxBlackStyle.js
            redBoxBlackStyle: path.join(__dirname, 'redBoxBlackStyle.js')
        }
    },
    plugins: plugins,
    // postcss: [autoprefixer],
    devServer: {
        hot: true,
        host: host,
        compress: true,
        port,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),
        publicPath: '/build/',
        stats: {
            modules: false,
            chunks: false
        },
    },
};
