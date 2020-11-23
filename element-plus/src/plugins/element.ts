/*
 * @Author: ccfish
 * @Date: 2020-11-19 11:33:28
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-23 15:49:26
 * @Description: element-plus配置
 */

import ElementPlus from "element-plus";
import Message from "element-plus/lib/message";
import "../element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";

export default (app: any) => {
  app.use(ElementPlus, { locale });
  app.provide("$message", Message);
  app.config.globalProperties.$message = Message;
};
