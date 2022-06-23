<script>
import {mapActions} from "vuex";

export default {
    name: "HomePage",
    methods:{
        ...mapActions('appStore',['testAxios']),
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
