<script>
import {mapActions} from "vuex";

export default {
    name: "HomePage",

    methods:{
        ...mapActions('appStore',['testAxios','testAxios3']),
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
