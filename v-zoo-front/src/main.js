import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import { createApp } from 'vue'
import App from './App.vue'
import HomeView from "@/views/HomeView";
import Selva from "@/components/Selva";
import Registro from "@/components/Registro";

createApp(App).mount('#app')

const routes=[
    {path: '/', name:"HomeRoute", component: HomeView},
    {path: '/selva', name: "SelvaRoute", component: Selva},
    {path: '/registro', component: Registro},

]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');