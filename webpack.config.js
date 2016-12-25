var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var redBox = require('redbox-react');
var plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];

// 开启服务器后不能用相对路径
var outpath = path.resolve(__dirname, 'build');

module.exports = {
	devtool: 'eval',
	// 通过webpack-dev-server配置的服务器，无法进行热加载，每次修改js都会让页面刷新，不利于开发
	// webpack-dev-server --progress --hot
    // devServer: {
    //     proxy: {
    //         "/api/*": {
    //             target: "https://cnodejs.org",//后台服务器所在的地址
    //             secure: false
    //         }
    //     },
    //     contentBase: "./public",//本地服务器所加载的index.html所在的目录
    //     colors: true,//终端中输出结果为彩色
    //     historyApiFallback: true,//不跳转
    //     port:3456,//dev-server所在的端口号
    //     open:true,//编译时自动打开浏览器到dev-server所在的地址
    //     inline: true,//实时刷新
    //     // hot: true // 在package.json的script里命令里配置比较好
    //     // 因为webpack-dev-server CLI(命令行Command Line Interface) 里面加入--hot
    //     // 就能自动添加HotModuleReplacementPlugin，同时将服务转化为热加载形式
    // },
    entry: [
        // necessary for hot reloading with IE:
        'eventsource-polyfill',
        // listen to code updates emitted by hot middleware:
        'webpack-hot-middleware/client',
        // your code:
        './src/index.js'
    ],
    output: {
        path: outpath,
        publicPath: '/assets/',
        filename: 'bundle.js'
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
                // exclude: [nodeModulesPath]用来排除不处理的目录
                exclude: path.resolve(__dirname, 'src/styles'),
                // webpack配置loader时是可以不写loader的后缀明-loader，因此css-loader可以写为css
                // css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能
                // style-loader将所有的计算后的样式通过<style>标签的形式加入到dom的head中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
                // CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。
                // 产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名（或者在css中类名前面加:local()）。这就是 CSS Modules 的做法。
                // css-loader支持CSS Modules，在css-loader后面加了一个查询参数modules，表示打开 CSS Modules 功能
                // 使用css-loader就可以支持css模块化，但此时css中的类名还是不能重复，必须加上参数modules，编译时就会自动将类名换成哈希值类型的类名，不担心重复了
                // loader处理文件的加载顺序是从右到左，即先通过sass-loader将scss转成css,然后再用postcss预处理，添加上css3动画兼容性前缀等
                // 然后在通过css-loader将css引入js文件,如果css-loader加了一个查询参数modules，则会将css中类名MD5化，使其变成唯一
                // 最后通过styleloader将计算好的样式文件以style标签的形式加入到dom头部
                loader: 'style!css?modules!postcss!sass'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        // alias里面设置的文件跟node_modules里面的文件等价，直接通过文件名导入，webpack就能找到相应文件。

        alias: {
        	  //当import 'redBoxBlackStyle' 时，webpack就会自动找根文件夹下面的redBoxBlackStyle.js
              redBoxBlackStyle: path.join(__dirname, 'redBoxBlackStyle.js')
            }
    },
    plugins: plugins,
    postcss: [autoprefixer]
};
