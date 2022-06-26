<script>
import {mapActions} from "vuex";

export default {
    name: "HomePage",
    methods:{
        ...mapActions('appStore',['testAxios']),
        click(){
            this.testAxios({
                name: 'test1',
                email: 'test1@test.test',
                password: 'test1',
                number: '+380977094293',
            })
        }
    }
}
</script>

<template>
<v-btn @click="click()">click</v-btn>
</template>
