import VueRouter from 'vue-router'
import Foo from "../components/Foo";
import Bar from "../components/Bar";
const routes = [
    {
        path: '/',
        component: Foo,
        name: 'home'
    },
    {
        path: '/bar',
        component: Bar,
        name: 'bar'
    }
]


export const router = new VueRouter({
    mode: 'history',
    routes
})
