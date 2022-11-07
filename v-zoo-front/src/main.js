import * as Vue from 'vue';
import * as VueRouter from 'vue-router';


import App from './App.vue'
import HomeView from "@/views/HomeView";




const routes=[
    {path: '/' , name:"HomeRoute", component: HomeView},


]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');