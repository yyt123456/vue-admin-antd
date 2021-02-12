// const path = require("path");
// const server = "http://www.web-jshtml.cn/productapi/token/";
// const server = "http://www.web-jshtml.cn/vue_admin_api/token";
const server = "http://www.web-jshtml.cn/api/vue3";
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",

  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // https://cli.vuejs.org/zh/guide/css.html#css-modules
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      // sass: {
      //   // @/ 是 src/ 的别名
      //   // 所以这里假设你有 `src/variables.sass` 这个文件
      //   // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //   additionalData: `@import "~@/variables.sass"`
      // },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
      // 给 less-loader 传递 Less.js 相关选项
      // less:{
      //   // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
      //   // `primary` is global variables fields name
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }
  },
  devServer: {
    open: false, // 编译完成是否打开网页
    // host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      "/api": {
        target: server,
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }, // 设置代理
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    }
    // before: app => {}
  },
};
