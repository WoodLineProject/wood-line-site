<script>
import {mapActions} from "vuex";

export default {
    name: "HomePage",
    mounted() {
        this.getCsrfTokenAsync();
    },
    methods:{
        ...mapActions('appStore',['testAxios','testAxios3']),
        ...mapActions('authStore',['getCsrfTokenAsync']),
        click(){
            this.testAxios({
                test: 1
            })
        },
        click2(){
            this.testAxios3();
        }
    }
}
</script>

<template>
    <div>
        <v-btn @click="click()">click</v-btn>
        <v-btn @click="click2()">AuthClick</v-btn>
    </div>

</template>
