import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import userRouter from './userRouter';
import './assets/main.css';

import DashboardLayout from './components/DashboardLayout.vue';
import UserLayout from './components/UserLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';
const app = createApp(App);
//for admin
app.component('dashboard-layout', DashboardLayout);

//for user
 app.component('user-layout', UserLayout);
//
// app.component('empty-layout', EmptyLayout);
//for admin page
app.use(router).mount('#app');

//for userPage


