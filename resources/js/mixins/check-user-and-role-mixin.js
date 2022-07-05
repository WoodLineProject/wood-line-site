import {mapGetters} from "vuex";
import {ALL_ROLE, ROLE_OWNER} from "../constants/roles";

export const CheckUserAndRolesMixin = {
    computed: {
        ...mapGetters('authStore', ['currentUser']),
    },
    methods: {
        checkUserAndRoles(arrayRoles = ALL_ROLE) {
            /*uncomment return true to disable role checking*/
            //return true
            if (!this.currentUser)
                return false;
            let role = this.currentUser.role
            if(!role){
                return false;
            }else if(role === ROLE_OWNER){
                return true
            }
            else{
                return arrayRoles.includes(this.currentUser.role);
            }
        },
    },
}
