// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EventDetail from '../views/EventDetail.vue';
import AddEvent from '../views/AddEvent.vue';
import EventHome from '@/views/EventHome.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'Home' }
  },
  {
    path: '/events',
    name: 'Events',
    component: EventHome // Definizione della rotta per la pagina degli eventi
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail,
    meta: { title: 'Event Detail' }
  },
  {
    path: '/add-event',
    name: 'AddEvent',
    component: AddEvent,
    meta: { title: 'Add Event' }
  },
];

const router = createRouter({
  history: createWebHistory('/'), // Usa '/' come valore di default
  routes
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;
