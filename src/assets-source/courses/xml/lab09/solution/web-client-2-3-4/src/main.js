import Vue from "vue";
import VueRouter from "vue-router";

import {
  MdApp,
  MdButton,
  MdCard,
  MdContent,
  MdDrawer,
  MdIcon,
  MdList,
  MdRipple,
  MdTable,
  MdToolbar,
} from "vue-material/dist/components";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import App from "./App.vue";

Vue.use(VueRouter);

Vue.use(MdApp);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdDrawer);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdRipple);
Vue.use(MdTable);
Vue.use(MdToolbar);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
