const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 单独生成 css 文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口，单
  entry: {
    main: "./src/index.js"
  }, // string | object | array
  // 这里应用程序开始执行

  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

  module: {
    // 关于模块配置

    rules: [
        {
            test: /\.jsx?/,
            include: [
                path.resolve(__dirname, 'src') // src 目录下的才需要经过 babel-loader 处理
            ],
            use: 'babel-loader'
        },
        {
            test: /\.(less|css)$/,
            // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  'css-loader',
                  'less-loader',
                ],
            })
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]

        }
    ]
  },

  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）

    alias: {
        utils: path.resolve(__dirname, 'src/utils'), // 模糊匹配
        log$: path.resolve(__dirname, 'src/utils/log.js') // 精准匹配 log$ 只匹配 log
    },

    extensions: ['.js', '.json', '.jsx', '.css', '.less'], // 自动解析后缀

    modules: [
        path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
    ]
  },

  plugins: [
    // 插件列表

    new HtmlWebpackPlugin({
        filename: 'index.html', // 配置输出文件名和路径
        template: 'assets/index.template.html' // 配置文件模板
    }),

    // 引入插件，配置文件名，这里同样可以使用 [hash]
    new ExtractTextPlugin('[name].[hash].css')
  ]

}
