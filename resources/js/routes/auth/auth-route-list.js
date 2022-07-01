export default [
    {
        path: '/singIn',
        component: () => import('../../components/Pages/Auth/Login'),
        name: 'login',
    },
    {
        path: '/reg',
        component: () => import('../../components/Pages/Auth/Registr'),
        name: 'registry',
    },
    {
        path: '/logout',
        name: 'logout',
    },
]
