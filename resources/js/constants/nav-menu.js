import {CheckUserAndRolesMixin} from "../mixins/check-user-and-role-mixin";
function getMenu() {
    return [
        {
            to: '/singIn',
            icon: 'mdi-home-circle-outline',
            text: 'login',
            show: !CheckUserAndRolesMixin.methods.checkUserAndRoles()
        },
        /*{
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
        }*/
    ]
}

export default getMenu()

/*export default {
    data: () => ({
    }),
    mixins: [CheckUserAndRolesMixin],
    methods: {

    }
}*/

