import AdminPanelMain from "../../components/Pages/AdminPanel/AdminPanelMain";
import UserManagement from "../../components/Pages/AdminPanel/UserManagement/UserManagement";
import OrdersCallBackPanel from "../../components/Pages/AdminPanel/OrdersCallBackPanel/OrdersCallBackPanel";
import EmailSenderPanel from "../../components/Pages/AdminPanel/EmailSenderPanel/EmailSenderPanel";
import ProductManagement from "../../components/Pages/AdminPanel/ProductManagement/MainProductManagement";
import TextileManagement from "../../components/Pages/AdminPanel/TextileManagement/MainTextileManagement";
import HomePageCarousel from "../../components/Pages/AdminPanel/HomePageCarousel/HomePageCarousel"

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
    {
        path: '/product-management',
        component: ProductManagement,
        name: 'ProductManagement'
    },
    {
        path: '/textile-management',
        component: TextileManagement,
        name: 'TextileManagement'
    },
    {
        path: '/home-page-carousel',
        component: HomePageCarousel,
        name: 'HomePageCarousel'
    },
]
