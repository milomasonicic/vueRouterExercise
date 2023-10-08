import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import home from './components/home.vue'
import about from './components/about.vue'
import blog from './components/blog.vue'
import contact from './components/contact.vue'
import App from './App.vue'

const routes = [
    { path: '/', component: home },
    { path: '/blog', component: blog },
    { path: '/about', component: about },
  
    { path: '/contact', component: contact }
    ]
  
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
