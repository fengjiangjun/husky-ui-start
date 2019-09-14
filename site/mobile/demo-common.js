import Vue from 'vue';
import VueRouter from 'vue-router';
import Husky from '../../packages/index.js';
import Locale from '../../packages/locale';
Vue.use(VueRouter);

Vue.use(Husky);
export function demoWrapper(module, name) {
  const component = module.default;
  name = 'demo-' + name;
  component.name = name;

  const {
    i18n: config
  } = component;
  if (config) {
    const formattedI18n = {};
    const camelizedName = camelize(name);
    Object.keys(config).forEach(key => {
      formattedI18n[key] = {
        [camelizedName]: config[key]
      };
    });
    Locale.add(formattedI18n);
  }

  return component;
}