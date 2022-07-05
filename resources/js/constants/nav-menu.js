import {CheckUserAndRolesMixin} from "../mixins/check-user-and-role-mixin";
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
                    icon: 'mdi-home-circle-outline',
                    text: 'login',
                    show: !this.checkUserAndRoles()
                },
                {
                    to: '/reg',
                    icon: 'mdi-account-question',
                    text: 'reg',
                    show: !this.checkUserAndRoles()
                },
                {
                    to: '/',
                    icon: 'mdi-account-question',
                    text: 'logout',
                    show: this.checkUserAndRoles()
                },
                {
                    to: '/',
                    icon: 'mdi-home-circle-outline',
                    text: 'home',
                    show: true
                },
                {
                    to: '/test',
                    icon: 'mdi-account-question',
                    text: 'test',
                    show: true
                }
            ]
        },
    },
}

