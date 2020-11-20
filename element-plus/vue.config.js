/*
 * @Author: ccfish
 * @Date: 2020-11-19 14:48:08
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-20 13:58:22
 * @Description: vue项目配置
 */
const path = require("path");
const svgFilePath = "src/icons/svg";
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(opt => {
        return opt;
      });
  },
  devServer: {
    open: true,
    port: 3000,
    proxy: {
      ibms: {
        target: "http://172.16.247.215:8000/",
        changeOrigin: true
      }
    }
  }
};
