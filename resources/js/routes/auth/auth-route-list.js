export default [
    {
        path: '/login',
        component: () => import('../../components/Pages/Auth/Login'),
        name: 'login',
    },
    {
        path: '/registry',
        component: () => import('../../components/Pages/Auth/Registr'),
        name: 'registry',
    },
]
