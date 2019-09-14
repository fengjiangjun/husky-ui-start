import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Header from './components/header.vue';
import Demo from './components/demo.vue';
import Doc from './components/doc.vue';
import Nav from './components/nav.vue';
import routes from '../routes';
window.Vue = Vue;
import {
  importAll
} from '../utils';
//const Button = require('../../packages/button/readme.md');
Vue.component(Demo.name, Demo);
Vue.component(Header.name, Header);
Vue.component(Doc.name, Doc);
Vue.component(Nav.name, Nav);
Vue.use(VueRouter);
//console.log(Button);
const docs = {};
//const docsFromMarkdown = require.context('../../markdown', false, /(en-US|zh-CN)\.md$/);
const docsFromPackages = require.context('../../packages', true, /readme(\.zh-CN)?\.md$/);

//importAll(docs, docsFromMarkdown);
importAll(docs, docsFromPackages);

console.log('doc', docs);
const router = new VueRouter({
  routes: routes({
    componentMap: docs
  })
});

router.afterEach(path => {
  Vue.nextTick(() => window.syncPath());
});
window.vueRouter = router;
new Vue({
  el: '#root',
  router,
  render: h => h(App)
})