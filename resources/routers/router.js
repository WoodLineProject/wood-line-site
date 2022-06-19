import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../js/components/pages/shared/HomePage/HomePage'
import test from './test/test-route-list'
const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    test
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
