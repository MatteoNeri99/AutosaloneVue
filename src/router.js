import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'; 
import Index from './views/index.vue';
import Show from './views/show.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/auto',
    name: 'auto',
    component: Index,
  },
  {
    path: '/auto/:id',
    name: 'auto-dettagli',
    component: Show,
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
