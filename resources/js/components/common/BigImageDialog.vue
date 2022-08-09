<script>
export default {
    name: "BigImageDialog",
    props:{
        imagePath: String,
        dialog: Boolean,
    },
    methods:{
      close(){
          this.$emit('input',{target: false});
      }
    },
}
</script>
<template>
    <div class="text-center">
        <v-dialog
            :value="dialog"
            @input="close"
            width="100%"

        >
            <v-card height="90vh" no-gutters>
                <v-img
                    contain
                    id="img"
                    @click.native="close"
                    :src="imagePath">
                </v-img>
            </v-card>
        </v-dialog>
    </div>
</template>
<style scoped>
#img{
    min-height: 100%;
    min-width: 100%;
}
</style>
