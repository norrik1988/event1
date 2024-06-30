import { createRouter, createWebHistory } from 'vue-router';
import EventHome from '../views/EventHome.vue';
import EventDetail from '../views/EventDetail.vue';
import AddEvent from '../views/AddEvent.vue';

const routes = [
    { path: '/', name: 'EventHome', component: EventHome },
    { path: '/event/:id', name: 'EventDetail', component: EventDetail },
    { path: '/add-event', name: 'EventAdd', component: AddEvent }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
