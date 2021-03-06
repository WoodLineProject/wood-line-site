import VueRouter from 'vue-router'
import HomePage from "../components/Pages/HomePage/HomePage";
import Test from './test/test-route-list'
import Auth from './auth/auth-route-list'
import AboutAs from "../components/Pages/AboutAs/AboutAs";
import Upholstery from '../components/Pages/Upholstery/Upholstery'
import WholesaleCustomers from '../components/Pages/WholesaleCustomers/WholesaleCustomers'
import Catalog from '../components/Pages/Catalog/Catalog'
import AdminPanel from './adminPanel/admin-panel-route-list'

const BaseRoute = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/about-as',
        component: AboutAs,
        name: 'aboutAs'
    },
    {
        path: '/upholstery',
        component: Upholstery,
        name: 'upholstery'
    },
    {
        path: '/wholesale-customers',
        component: WholesaleCustomers,
        name: 'wholesaleCustomers'
    },
    {
        path: '/catalog',
        component: Catalog,
        name: 'catalog'
    }
]
const routes = BaseRoute.concat(
    Test,
    Auth,
    AdminPanel,
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
    if(to.name === 'logout'){
        return token
            ? next()
            : next({name: 'home'})
    }
    if(to.name === 'adminPanel'
        //add yours admin panel routes
        || to.name === 'OrdersCallBackPanel'
        || to.name === 'userManagement'
        || to.name === 'EmailSenderPanel'){
        return token
            ? next()
            : next({name: 'login'})
    }
    next();
})
