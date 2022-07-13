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
            ]
        },
    },
}
