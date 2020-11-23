/*
 * @Author: ccfish
 * @Date: 2020-11-19 11:30:33
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-23 15:24:44
 * @Description: file content
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElement from "./plugins/element";
import installIcons from "./plugins/svgicon";

const app = createApp(App);
installElement(app);
installIcons(app);

// global properties
app.config.globalProperties.version = "1.0";

app.use(router).mount("#app");
