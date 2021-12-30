import {createApp} from 'vue'
import App from './App.vue' //全局应用
import router from "@/router/index"; //从index.js 引入路由 如果名字是index.js 可以省略

createApp(App)
    .use(router)
    .mount('#app');
