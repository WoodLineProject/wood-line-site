<script>
import {mapActions, mapGetters} from "vuex";
import TemplateDIC from "../../../common/TemplateDIC";
import TextileManagement from "./components/TextileManagement";
import PhotoManager from "./components/PhotoManager";

const trans_prefix = 'adminPanel.textileManagement';
export default {
    name: "MainTextileManagement",
    components: {
        TemplateDIC, TextileManagement, PhotoManager
    },
    data(){
        return {
            trans_prefix,
        }
    },
    computed:{
        ...mapGetters('textileStore',['types','maker','color']),
    },
    mounted() {
        this.updateMethods()
    },
    methods:{
        ...mapActions('textileStore',['getTypesAsync','getMakerAsync','getColorAsync','getTextilesAsync','getTextilesAndPhotoAsync']),
        ...mapActions('textileManagement',['addTypeAsync','editTypeAsync','deleteTypeAsync']),
        ...mapActions('textileManagement',['addMakerTypeAsync','editMakerTypeAsync','deleteMakerTypeAsync']),
        ...mapActions('textileManagement',['addColorTypeAsync','editColorTypeAsync','deleteColorTypeAsync']),
        updateMethods(){
            this.getTypesAsync()
            this.getMakerAsync()
            this.getColorAsync()
            this.getTextilesAsync()
            this.getTextilesAndPhotoAsync()
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
                        {{ $t(`${trans_prefix}.textile.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <textile-management/>
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
                        {{ $t(`${trans_prefix}.maker.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <template-d-i-c
                            v-bind:selected-array="maker"
                            v-bind:addFunc="addMakerTypeAsync"
                            v-bind:editFunc="editMakerTypeAsync"
                            v-bind:deleteFunc="deleteMakerTypeAsync"
                            v-bind:updateSelectedArrayFunc="getMakerAsync"
                            v-bind:getItemsCatalog="updateMethods"
                            v-bind:selectTitle="$t(`${trans_prefix}.maker.select`)"
                        />
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header class="align-content-center">
                        {{ $t(`${trans_prefix}.color.title`) }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <template-d-i-c
                            v-bind:selected-array="color"
                            v-bind:addFunc="addColorTypeAsync"
                            v-bind:editFunc="editColorTypeAsync"
                            v-bind:deleteFunc="deleteColorTypeAsync"
                            v-bind:updateSelectedArrayFunc="getColorAsync"
                            v-bind:getItemsCatalog="updateMethods"
                            v-bind:selectTitle="$t(`${trans_prefix}.color.select`)"
                        />
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>
