<script>
import {mapActions, mapGetters} from "vuex";
import TemplateDIC from "../../../common/TemplateDIC";
import ProductManagement from "./components/ProductManagement";
import PhotoManager from "./components/PhotoManager";

const trans_prefix = 'adminPanel.productManagement';
export default {
    name: "MainProductManagement",
    components: {
        TemplateDIC, ProductManagement, PhotoManager
    },
    data(){
        return {
            trans_prefix,
        }
    },
    computed:{
        ...mapGetters('dicStore',['types','layout','age']),
    },
    mounted() {
        this.updateMethods()
    },
    methods:{
        ...mapActions('dicStore',['getTypesAsync','getLayoutAsync','getAgeAsync','getProductsAsync','getProductsAndPhotoAsync']),
        ...mapActions('productManagement',['addTypeAsync','editTypeAsync','deleteTypeAsync']),
        ...mapActions('productManagement',['addLayoutTypeAsync','editLayoutTypeAsync','deleteLayoutTypeAsync']),
        ...mapActions('productManagement',['addAgeTypeAsync','editAgeTypeAsync','deleteAgeTypeAsync']),
        updateMethods(){
            this.getTypesAsync()
            this.getLayoutAsync()
            this.getAgeAsync()
            this.getProductsAsync()
            this.getProductsAndPhotoAsync()
        }
    },
}
</script>

<style scoped>

</style>
<template>
    <v-card height="auto" width="1300">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">
                    {{ $t(`${trans_prefix}.title`) }}
                </span>
        </v-card-title>
        <v-card-text>
            <v-expansion-panels focusable>
                <v-expansion-panel>
                    <v-expansion-panel-header class="align-content-center">
                        {{ $t(`${trans_prefix}.product.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <product-management/>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header class="align-content-center">
                        {{ $t(`${trans_prefix}.photo.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <photo-manager/>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header class="align-content-center">
                        {{ $t(`${trans_prefix}.type.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <template-d-i-c
                            v-bind:selected-array="types"
                            v-bind:addFunc="addTypeAsync"
                            v-bind:editFunc="editTypeAsync"
                            v-bind:deleteFunc="deleteTypeAsync"
                            v-bind:updateSelectedArrayFunc="getTypesAsync"
                            v-bind:getItemsCatalog="updateMethods"
                            v-bind:selectTitle="$t(`${trans_prefix}.type.select`)"
                        />
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header >
                        {{ $t(`${trans_prefix}.layout.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <template-d-i-c
                            v-bind:selected-array="layout"
                            v-bind:addFunc="addLayoutTypeAsync"
                            v-bind:editFunc="editLayoutTypeAsync"
                            v-bind:deleteFunc="deleteLayoutTypeAsync"
                            v-bind:updateSelectedArrayFunc="getLayoutAsync"
                            v-bind:getItemsCatalog="updateMethods"
                            v-bind:selectTitle="$t(`${trans_prefix}.layout.select`)"
                        />
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header class="align-content-center">
                        {{ $t(`${trans_prefix}.age.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <template-d-i-c
                            v-bind:selected-array="age"
                            v-bind:addFunc="addAgeTypeAsync"
                            v-bind:editFunc="editAgeTypeAsync"
                            v-bind:deleteFunc="deleteAgeTypeAsync"
                            v-bind:updateSelectedArrayFunc="getAgeAsync"
                            v-bind:getItemsCatalog="updateMethods"
                            v-bind:selectTitle="$t(`${trans_prefix}.age.select`)"
                        />
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>
