/*
 * @Author: ccfish
 * @Date: 2020-11-19 11:33:28
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-19 17:49:58
 * @Description: element-plus配置
 */

import ElementPlus from "element-plus";
import "../element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";

export default (app: any) => {
  app.use(ElementPlus, { locale });
};
