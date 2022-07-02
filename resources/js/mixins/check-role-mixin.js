import {mapGetters} from "vuex";
import {ROLE_OWNER} from "../constants/roles";

export const CheckRolesMixin = {
    computed: {
        ...mapGetters('authStore', ['currentUser']),
    },
    methods: {
        checkRoles(arrayRoles) {
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
