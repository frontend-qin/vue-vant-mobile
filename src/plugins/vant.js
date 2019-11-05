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
  Image,
  Swipe,
  SwipeItem,
  Loading
} from "vant";

Vue.use(Button)
  .use(Field)
  .use(Swipe)
  .use(SwipeItem)
  .use(Loading)
  .use(Image)
  .use(Cell)
  .use(Toast)
  .use(CellGroup)
  .use(Divider)
  .use(Tabbar)
  .use(TabbarItem);

Vue.prototype.$toast = Toast;
