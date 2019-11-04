import Vue from "vue";
import {
  Button,
  Tabbar,
  TabbarItem,
  Divider,
  CellGroup,
  Cell,
  Field,
  Toast
} from "vant";
Vue.prototype.$toast = Toast;
Vue.use(Button)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Divider)
  .use(Tabbar)
  .use(TabbarItem);
