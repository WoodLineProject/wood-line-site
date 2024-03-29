import {CheckUserAndRolesMixin} from "../mixins/check-user-and-role-mixin";
import {ROLE_ADMIN, ROLE_OWNER} from './roles'
import {mapGetters} from "vuex";
export const AdminNavMenu = {
    name: "Menu",
    mixins: [CheckUserAndRolesMixin],

    computed:{
        ...mapGetters('authStore', ['currentUser']),
        ADMIN_NAV_MENU() {
            return [
                {
                    to: '/user-management',
                    icon: 'person_search',
                    text: 'userManagement',
                    show: this.checkUserAndRoles([ROLE_ADMIN, ROLE_OWNER])
                },
                {
                    to: '/orders-call-back-panel',
                    icon: 'phone_callback',
                    text: 'OrdersCallBackPanel',
                    show: this.checkUserAndRoles([ROLE_ADMIN, ROLE_OWNER])
                },
                {
                    to: '/email-sender-panel',
                    icon: 'mail',
                    text: 'EmailSenderPanel',
                    show: this.checkUserAndRoles([ROLE_ADMIN, ROLE_OWNER])
                },
                {
                    to: '/product-management',
                    icon: 'bed',
                    text: 'ProductManagement',
                    show: this.checkUserAndRoles([ROLE_ADMIN, ROLE_OWNER])
                },
                {
                    to: '/textile-management',
                    icon: 'checkroom',
                    text: 'TextileManagement',
                    show: this.checkUserAndRoles([ROLE_ADMIN, ROLE_OWNER])
                },
                {
                    to: '/home-page-carousel',
                    icon: 'photo_library',
                    text: 'HomePageCarousel',
                    show: this.checkUserAndRoles([ROLE_ADMIN, ROLE_OWNER])
                },
            ]
        },
    },
}

