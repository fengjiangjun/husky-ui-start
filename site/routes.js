import Button from '../packages/button/demo/index.vue';
import Vue from 'vue';
import docConfig from './doc-config';
import DemoList from './common-component/demo-list.vue';
import {
  demoWrapper
} from './mobile/demo-common';
import initIframe from './utils/initIframe';
initIframe();
/*
export default [{
  path: `/intro`,
  //component: Header,
  component: Button,
  meta: {
    lang: ''
  }
}]
*/
export default ({
  isMobile,
  componentMap
}) => {

  const route = [{
    path: '*',
    redirect: () => `/${Vue.prototype.$vantLang}/`
  }];

  Object.keys(docConfig).forEach(lang => {
    if (isMobile) {
      route.push({
        path: `/${lang}`,
        component: DemoList,
        meta: {
          lang
        }
      });
    } else {
      route.push({
        path: `/${lang}`,
        redirect: `/${lang}/button`
      });
    }
    console.log('route', route)

    function addRoute(page, lang) {
      let {
        path
      } = page;
      if (path) {
        path = path.replace('/', '');
        console.log('path', path)
        let component;
        if (path === 'demo') {
          component = DemoPages;
        } else if (isMobile) {
          const module = componentMap[`./${path}/demo/index.vue`];

          if (module) {
            component = demoWrapper(module, path);
          }
        } else {
          const module =
            componentMap[`./${path}/readme.${lang}.md`] ||
            componentMap[`./${path}/readme.md`] ||
            componentMap[`./${path}.${lang}.md`];

          component = module.default;
        }

        if (!component) {
          return;
        }

        route.push({
          name: lang + '/' + path,
          component,
          path: `/${lang}/${path}`,
          meta: {
            lang,
            path,
            name: page.title
          }
        });
      }
    }

    const navs = docConfig[lang].nav || [];
    navs.forEach(nav => {
      if (nav.children) {
        nav.children.forEach(group => {
          group.children.forEach(page => addRoute(page, lang));
        });
      } else {
        addRoute(nav, lang);
      }
    });
  });
  console.log('routes', route)
  return route;
}