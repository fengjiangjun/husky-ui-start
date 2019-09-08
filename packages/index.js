import Button from './button';
import Cell from './cell';
import Header from './header';
const install = (Vue) => {
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(Header.name, Header)

}

export default install;