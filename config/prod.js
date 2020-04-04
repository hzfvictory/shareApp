module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
    dllEntry: {
      lib: ['nervjs', '@tarojs/router', '@tarojs/taro-h5', '@tarojs/components']
    },
    output: {
      filename: 'static/js/[name].[hash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].js'
    },
    miniCssExtractPluginOption: {
      filename: 'static/css/[name].[hash:8].css',
      chunkFilename: 'static/css/[name].[chunkhash:8].css'
    },
    imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash:8].[ext]'
    },
  }
};
