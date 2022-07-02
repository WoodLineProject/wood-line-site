import {mapGetters} from "vuex";
import {ROLE_OWNER} from "../constants/roles";

export const CheckUserAndRolesMixin = {
    computed: {
        ...mapGetters('authStore', ['currentUser']),
    },
    methods: {
        checkUserAndRoles(arrayRoles = []) {
            if (!this.currentUser)
                return false;

            let role = this.currentUser.role
            /*uncomment return true to disable role checking*/
            //return true
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
