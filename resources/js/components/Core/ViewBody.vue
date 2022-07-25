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
    background-repeat:no-repeat;
    background-position:center center;
    background-attachment: fixed;
    height: 100%;
}
</style>
