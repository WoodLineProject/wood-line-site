<script>
import {mapActions, mapGetters} from "vuex";
import {CheckLocaleMixin} from "../../../../mixins/check-locale-mixin";
import {loading} from "../../../../constants/bg-image";
import BigImageDialog from "../../../common/BigImageDialog";
const trans_prefix = 'adminPanel.productManagement';
export default {
    name: "AboutProductItem",
    data(){
        return {
            loading,
            trans_prefix,
            id: null,
            classCardImg: '',
            dialog: false,
            slidePath: '',
        }
    },
    components: {BigImageDialog},
    mixins:[CheckLocaleMixin],
    mounted() {
        this.id = this.$route.params.id;
        this.getProductByIdAsync({id: this.id})
        this.getPhotoByIdAsync({id: this.id})
    },
    computed:{
      ...mapGetters('dicStore',['productById','photoById']),
        aboutArray(){
          return [
              {
                  header :   this.$t(`${trans_prefix}.product.tableHeaders.name`)+':',
                  value : this.productById.name
              },
              {
                  header :  this.$t(`${trans_prefix}.type.select`)+':',
                  value : this.isUkrLocale
                      ? this.productById.productTypeUkr
                      : this.productById.productTypeRus
              },
              {
                  header : this.$t(`${trans_prefix}.layout.select`)+':',
                  value : this.isUkrLocale
                      ? this.productById.layoutTypeUkr
                      : this.productById.layoutTypeRus
              },
              {
                  header :  this.$t(`${trans_prefix}.age.select`)+':',
                  value : this.isUkrLocale
                      ? this.productById.ageTypeUkr
                      : this.productById.ageTypeRus
              },
              {
                  header : this.$t(`${trans_prefix}.product.tableHeaders.form`),
                  value : this.productById.is_angular
                      ?  this.$t(`${trans_prefix}.product.tableHeaders.is_angular`)
                      :  this.$t(`${trans_prefix}.product.tableHeaders.straight`),
              },
              {
                  header : this.$t(`${trans_prefix}.product.tableHeaders.all_sizes`)+':',
                  value : this.productById.all_sizes
              },
              {
                  header : this.$t(`${trans_prefix}.product.tableHeaders.sleep_sizes`)+':',
                  value : this.productById.sleep_sizes
              },
              {
                  header : this.$t(`${trans_prefix}.product.tableHeaders.count_pillow`)+':',
                  value : this.productById.count_pillow
              },
              {
                  header :  this.$t(`${trans_prefix}.product.tableHeaders.description`)+':',
                  value : this.productById.description
              },
          ]
        },
    },
    methods:{
        ...mapActions('dicStore',['getProductByIdAsync','getPhotoByIdAsync']),
        ShowImage(path){
            this.dialog = true
            this.slidePath = path
        },
        closeDialog(event) {
            this.dialog = event.target;
        },
    }
}
</script>
<template>
    <v-row style="width: 100%" :class="$vuetify.breakpoint.mdAndUp ? 'd-flex' : ''">
        <v-card
            :style="$vuetify.breakpoint.mdAndUp ? 'width: 65%; position: sticky; top: 15%;' : 'width: 95%'"
            class="pt-5 pb-5 pl-5 pr-5 mr-5 mb-5 ml-5 align-self-start">
            <v-carousel
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="(slide, i) in photoById"
                    :key="i"
                    @click="ShowImage(slide.path)"
                >
                    <v-sheet
                        height="100%"
                    >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-img
                                :lazy-src="loading.img"
                                id="img"
                                contain
                                height="100%"
                                class="grey lighten-2"
                                :src="slide.path"
                            ></v-img>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>
        <v-card
            class="ml-5 align-self-start"
            :style="$vuetify.breakpoint.mdAndUp ? 'width: 30%' : 'width: 95%'">
            <v-card-title v-for="(item, key) in aboutArray"
                v-bind:key="key">
                <v-row v-if="$vuetify.breakpoint.mdAndUp">
                    <span class="ml-2">
                        {{item.header}}
                    </span>
                    <v-spacer/>
                    <strong class="mr-2">
                        {{item.value}}
                    </strong>
                </v-row>
                <div v-else>
                    <span class="ml-1">
                        {{item.header}}
                    </span>
                    <v-spacer/>
                    <strong class="mr-5">
                        {{item.value}}
                    </strong>
                </div>
            </v-card-title>
        </v-card>
        <big-image-dialog
            v-bind:dialog="dialog"
            v-on:input="closeDialog($event)"
            v-bind:imagePath="slidePath">
        </big-image-dialog>
    </v-row>
</template>
