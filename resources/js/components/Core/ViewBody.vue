<script>
import {ARRAY_BG_IMG} from '../../constants/bg-image'
export default {
    name: "ViewBody",
    data(){
        return {
            ARRAY_BG_IMG,
            current_bg: null
        }
    },
    mounted() {
        this.current_bg = this.ARRAY_BG_IMG[Math.floor(Math.random() * ARRAY_BG_IMG.length)]
        //this.current_bg = this.ARRAY_BG_IMG[4]
        console.log(this.current_bg)
    },
}
</script>

<template>
    <div id="bg" :style="{
        backgroundImage:`url(${current_bg})`
    }">
        <v-main>
            <v-container v-if="$vuetify.breakpoint.mdAndUp"
                         fluid
                         id="con"
                         class="d-flex justify-space-around mb-6 mt-3">
                <v-fade-transition mode="out-in">
                    <router-view />
                </v-fade-transition>
            </v-container>
            <v-container v-else fluid >
                <v-fade-transition mode="out-in">
                    <router-view />
                </v-fade-transition>
            </v-container>
        </v-main>
    </div>
</template>
<style>
#bg {
    background-size: cover;
    /*background-size: contain;*/
    background-repeat:no-repeat;
    background-position:center center;
    background-attachment: fixed;
    height: 100%;
}
/*div[data-app='true'] {
    background: url(./../../../image/bg-3.jpg) no-repeat center center fixed !important;*
    background-size: cover;
    -moz-background-size: 100%; !* Firefox 3.6+ *!
    -webkit-background-size: 100%; !* Safari 3.1+ и Chrome 4.0+ *!
    -o-background-size: 100%; !* Opera 9.6+ *!
    background-size: 100%; !* Современные браузеры *!
    width: 100%;
    height: auto;
    position: absolute;
}*/
</style>
