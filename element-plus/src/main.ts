/*
 * @Author: ccfish
 * @Date: 2020-11-19 11:30:33
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-20 10:39:01
 * @Description: file content
 */
import { createApp } from "vue";
import App from "./App.vue";
import installElement from "./plugins/element";
import installIcons from "./plugins/svgicon";

const app = createApp(App);

installElement(app);
installIcons(app);
app.mount("#app");
