import Vue from 'vue';
import { applyPolyfills, defineCustomElements } from '@duetds/components/lib/loader';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './initFirebase';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/duet-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
