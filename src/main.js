import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueTour from 'vue-tour';
import 'vue-tour/dist/vue-tour.css';
import i18nData from './helpers/i18n';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { auth } from './initFirebase';
import ServiceClass from './service';

Vue.use(Antd);
Vue.use(VueTour);
Vue.config.productionTip = false;

const service = new ServiceClass();
Vue.prototype.$service = service;

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: service.getLanguage(), // set locale
  messages: i18nData, // set locale messages
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} | Cognitive` : 'Cognitive';
  });
});

new Vue({
  router,
  store,
  i18n,
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
