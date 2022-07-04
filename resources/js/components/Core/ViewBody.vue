<script>
import BG_IMAGE from '../../../image/bg_img.jpg'
export default {
    name: "ViewBody",
    data(){
        return {
            BG_IMAGE,
        }
    },
}
</script>

<template>
    <v-main>
        <v-container v-if="$vuetify.breakpoint.mdAndUp"
                     fluid
                     id="con"
                     class="d-flex justify-space-around mb-6 mt-3">
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </v-container>
        <v-container v-else fluid>
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </v-container>
    </v-main>
</template>
<style>
div[data-app='true'] {
    background: url(./../../../image/bg_img.jpg) no-repeat center center fixed !important;
    background-size: cover;
    width: 100%;
    height: auto;
    position: absolute;
}
</style>
