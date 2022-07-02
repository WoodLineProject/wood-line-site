<script>
import {mapActions} from "vuex";
import {CheckUserAndRolesMixin} from "../../../mixins/check-user-and-role-mixin";
import {ROLE_USER,ROLE_OWNER,ROLE_ADMIN} from "../../../constants/roles";
export default {
    name: "HomePage",
    mixins: [CheckUserAndRolesMixin],
    computed:{
        shUser(){
            return this.checkUserAndRoles([ROLE_USER])
        },
        shAdmin(){
            return this.checkUserAndRoles([ROLE_ADMIN])
        },
        shOwner(){
            return this.checkUserAndRoles([ROLE_OWNER])
        },
    },
    methods:{
        ...mapActions('appStore',['testAxios','user','admin','owner']),
        click(){
            this.testAxios({
                test: 1
            })
            this.$swal({
                icon: 'success',
                title: 'Hello',
                text: 'Hello brave new world!',
            });
        },
        click2(){
            this.user({
                test: 1
            });
        },
        click3(){
            this.admin({
                test: 1
            });
        },
        click4(){
            this.owner({
                test: 1
            });
        },
    },
}
</script>

<template>
    <div>
        <v-btn @click="click()">click</v-btn>
        <v-btn v-if="shUser" @click="click2()">userClick</v-btn>
        <v-btn v-if="shAdmin" @click="click3()">adminClick</v-btn>
        <v-btn v-if="shOwner" @click="click4()">owterClick</v-btn>
    </div>

</template>
