import Vue from 'vue';
import App from './app.vue';
import routes from '../routes';
import {
  importAll
} from '../utils';
/*import {
  install as Husky
} from 'src/index';
*/
import VueRouter from 'vue-router';

document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

//Vue.use(Husky);

const componentMap = {};
const context = require.context('../../packages', true, /demo\/index.vue$/);
console.log('context');
importAll(componentMap, context);
const router = new VueRouter({
  base: __dirname,
  routes: routes({
    isMobile: true,
    componentMap
  })
});
new Vue({ // eslint-disable-line
  el: '#root',
  render: h => h(App),
  router
});

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});


router.afterEach(() => {
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

window.vueRouter = router;