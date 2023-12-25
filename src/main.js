import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import{createWebHistory,createRouter,useRouter}from"vue-router";
import Content from "./components/Content.vue";
import Sample from "./components/Sample.vue";
import Service from "./components/Service.vue";
import LETgo from "./components/LETgo.vue";
import Display from "./components/Display.vue";
import Create from "./components/Create.vue";

const routes =[
    { path: '/',  component: Content},
    { path: '/about', component: Sample},
    { path: '/other', component: Service},
    { path: '/letgopage', component: LETgo},
    { path: '/display', component: Display},
    { path: '/create', component: Create},
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})
createApp(App).use(router).mount('#app')
