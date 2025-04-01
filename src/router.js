import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'; 
import Index from './views/index.vue';
import Show from './views/show.vue';
import Contatti from './views/Contatti.vue';
import ChiSiamo from './views/ChiSiamo.vue';


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
    path: '/Contatti',
    name: 'contatti',
    component: Contatti,
  },
  {
    path: '/chi-siamo',
    name: 'chi-siamo',
    component: ChiSiamo,
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
