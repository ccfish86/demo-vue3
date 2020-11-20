/*
 * @Author: ccfish
 * @Date: 2020-11-20 09:57:19
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-20 10:01:26
 * @Description: SVG图标
 */
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";
export default (app: any) => {
  app.use(VueSvgIconPlugin, { tagName: "icon" });
};
