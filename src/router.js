import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import { publicPath } from '../vue.config';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(publicPath),
  routes
})
console.log('ok ok');

export default router