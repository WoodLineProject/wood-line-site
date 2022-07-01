import VueRouter from 'vue-router'
import HomePage from "../components/Pages/HomePage/HomePage";
import Test from './test/test-route-list'
import Auth from './auth/auth-route-list'
const BaseRoute = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
]
const routes = BaseRoute.concat(
    Test,
    Auth
)
export const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to,from,next) =>{
    const token = localStorage.getItem('x_xsrf_token');
    if (to.name === 'login' || to.name === 'registry'){
        return token
            ? next({name: 'home'})
            : next();
    }
    next();
})
