import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "./assets/main.less";
// 引入移动pc区分
import { isPC } from "./utils";
// 全局注册导航栏子组件
import SubMenu from "@/components/NavMenu.vue";
const app = createApp(App);
// 移动和pc
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 挂载到原型 进行全局使用
app.config.globalProperties.isPc = isPC;
// 注册子组件
app.component("SubMenu", SubMenu);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
