import AdminPanelMain from "../../components/Pages/AdminPanel/AdminPanelMain";
import UserManagement from "../../components/Pages/AdminPanel/UserManagement/UserManagement";
import OrdersCallBackPanel from "../../components/Pages/AdminPanel/OrdersCallBackPanel/OrdersCallBackPanel";
import EmailSenderPanel from "../../components/Pages/AdminPanel/EmailSenderPanel/EmailSenderPanel";

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
    {
        path: '/orders-call-back-panel',
        component: OrdersCallBackPanel,
        name: 'OrdersCallBackPanel'
    },
    {
        path: '/email-sender-panel',
        component: EmailSenderPanel,
        name: 'EmailSenderPanel'
    },
]
