import Vue from "vue";
import VueCompositionApi from '@vue/composition-api'; 
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./router/token";
import global from "@/utils/global.js"


//自定義全局組件
import './icons';
Vue.use(global)
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
