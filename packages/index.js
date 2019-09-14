import Button from "./button";
import Cell from "./cell";
import Header from "./header";
import Switch from "./switch";
import Search from "./search";
import Wheel from "./wheel";
const install = Vue => {
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(Header.name, Header);
  Vue.component(Switch.name, Switch);
  Vue.component(Search.name, Search);
  Vue.component(Wheel.name, Wheel);
};

export default install;
