import AdminPanelMain from "../../components/Pages/AdminPanel/AdminPanelMain";
import UserManagement from "../../components/Pages/AdminPanel/UserManagement/UserManagement";

export default [
    {
        path: '/admin-panel',
        component: AdminPanelMain,
        name: 'adminPanel'
    },
    {
        path: '/user-management',
        component: UserManagement,
        name: 'userManagement'
    },
]
