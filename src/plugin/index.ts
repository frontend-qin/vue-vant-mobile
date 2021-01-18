import { Button } from 'vant';
import { createApp } from 'vue';

import App from '@/App.vue';

// 路由
import router from '@/router';

const app = createApp(App);

app.use(router).use(Button);

app.mount('#app');
