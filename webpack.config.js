const path = require('path');   // path是node.js中提供的处理文件路径的小工具
const HtmlWebpackPlugin = require('html-webpack-plugin')    // 在内存中自动生成index.html的插件
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    // 项目入口，webpack4.x默认配置如下，可以省略
    entry: {
        main: path.join(__dirname, 'src/index.js'), // 指定入口，可以指定多个
    },
    output: {
        path: path.join(__dirname, 'dist'), // __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
        filename: 'main.js', // bundle生成文件的名称
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
				test:/\.(png|jpg|gif)$/i,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:81920
						}
					}
				]
			}

        ]
    }       
}