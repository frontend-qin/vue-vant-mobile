import Vue from "vue";
import {
  Button,
  Tabbar,
  TabbarItem,
  Divider,
  CellGroup,
  Cell,
  Field,
  Toast,
  Image
} from "vant";

Vue.use(Button)
  .use(Field)
  .use(Image)
  .use(Cell)
  .use(CellGroup)
  .use(Divider)
  .use(Tabbar)
  .use(TabbarItem);
Vue.prototype.$toast = Toast;
