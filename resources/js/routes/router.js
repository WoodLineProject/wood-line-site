import VueRouter from 'vue-router'
import HomePage from "../components/Pages/HomePage/HomePage";
import Test from './test/test-route-list'
const BaseRoute = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },

]
const routes = BaseRoute.concat(
    Test,
)


export const router = new VueRouter({
    mode: 'history',
    routes
})
