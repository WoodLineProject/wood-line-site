<script>
import {mapActions} from "vuex";
import {CheckUserAndRolesMixin} from "../../../mixins/check-user-and-role-mixin";
import {ROLE_USER,ROLE_OWNER,ROLE_ADMIN} from "../../../constants/roles";
export default {
    name: "HomePage",
    mixins: [CheckUserAndRolesMixin],
    computed:{

    },
    methods:{
        ...mapActions('appStore',['testAxios','user','admin','owner']),
    },
}
</script>

<template>
 <h1>HomePage</h1>
</template>
