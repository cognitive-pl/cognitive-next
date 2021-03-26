import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { auth } from './initFirebase';
import ServiceClass from './service';

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.$service = new ServiceClass(Vue);

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} | Cognitive` : 'Cognitive';
  });
});

new Vue({
  router,
  store,
  created: function () {
    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && !auth.currentUser) {
        next('/login');
      } else if (to.meta.login && auth.currentUser) {
        next('/app');
      } else next();
    });
  },
  render: (h) => h(App),
}).$mount('#app');
