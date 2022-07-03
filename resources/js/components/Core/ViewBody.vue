<script>
import BG_IMAGE from '../../../image/bg_img.jpg'
export default {
    data(){
        return {
            BG_IMAGE,
        }
    },
    name: "ViewBody"
}
</script>

<template>
    <v-main class="grey lighten-3 bg_content">
         <v-parallax :src="BG_IMAGE">
             <div
                 id="core-view"
                 class="d-flex justify-space-around mb-6 mt-3">
                 <v-fade-transition mode="out-in">
                     <router-view />
                 </v-fade-transition>
             </div>
         </v-parallax>
    </v-main>
</template>
