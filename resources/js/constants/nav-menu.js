import {CheckUserAndRolesMixin} from "../mixins/check-user-and-role-mixin";
import {ROLE_ADMIN, ROLE_OWNER} from './roles'
import {mapGetters} from "vuex";
export const Menu = {
    name: "Menu",
    mixins: [CheckUserAndRolesMixin],

    computed:{
        ...mapGetters('authStore', ['currentUser']),
        NAV_MENU() {
            return [
                {
                    to: '/singIn',
                    icon: 'login',
                    text: 'login',
                    show: !this.checkUserAndRoles()
                },
                {
                    to: '/reg',
                    icon: 'person_add',
                    text: 'reg',
                    show: !this.checkUserAndRoles()
                },
                {
                    to: '/',
                    icon: 'logout',
                    text: 'logout',
                    show: this.checkUserAndRoles()
                },
                {
                    to: '/admin-panel',
                    icon: 'admin_panel_settings',
                    text: 'adminPanel',
                    show: this.checkUserAndRoles([ROLE_ADMIN,ROLE_OWNER])
                },
                {
                    to: '/',
                    icon: 'house',
                    text: 'home',
                    show: true
                },
                {
                    to: '/catalog',
                    icon: 'import_contacts',
                    text: 'catalog',
                    show: true
                },
                {
                    to: '/upholstery',
                    icon: 'checkroom',
                    text: 'upholstery',
                    show: true
                },
                {
                    to: '/wholesale-customers',
                    icon: 'account_circle',
                    text: 'wholesaleCustomers',
                    show: true
                },
                {
                    to: '/about-as',
                    icon: 'help_center',
                    text: 'aboutAs',
                    show: true
                },
            ]
        },
    },
}

