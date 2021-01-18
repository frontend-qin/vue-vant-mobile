import { Button } from 'vant';
import { createApp } from 'vue';
import App from './../App.vue';
const app = createApp(App);
app.use(Button);
app.mount('#app');
