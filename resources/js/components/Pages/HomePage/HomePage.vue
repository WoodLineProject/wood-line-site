<script>
import {mapActions} from "vuex";

export default {
    name: "HomePage",
    mounted() {
        this.getCsrfTokenAsync();
    },
    methods:{
        ...mapActions('appStore',['testAxios']),
        ...mapActions('authStore',['getCsrfTokenAsync']),
        click(){
            this.testAxios({
                test: 1
            })
        }
    }
}
</script>

<template>
<v-btn @click="click()">click</v-btn>
</template>
