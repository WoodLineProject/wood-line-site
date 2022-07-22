<script>
import {mapActions, mapGetters} from "vuex";
import TemplateDIC from "../../../common/TemplateDIC";

const trans_prefix = 'adminPanel.productManagement';
const type_trans_prefix = 'adminPanel.productManagement.type';
export default {
    name: "MainProductManagement",
    components: {
        TemplateDIC
    },
    data(){
        return {
            type_trans_prefix,
            trans_prefix,
        }
    },
    computed:{
        ...mapGetters('productManagement',['types']),
    },
    mounted() {
        this.getTypesAsync()
    },
    methods:{
        ...mapActions('productManagement',['getTypesAsync'])
    },
}
</script>

<style scoped>

</style>
<template>
    <v-card height="auto">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">
                    {{ $t(`${trans_prefix}.title`) }}
                </span>
        </v-card-title>
        <v-card-text>
            <v-expansion-panels focusable>
                <v-expansion-panel>
                    <v-expansion-panel-header>{{ $t(`${trans_prefix}.type.title`) }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <template-d-i-c
                            v-bind:selected-array="types"
                            v-bind:selectTitle="$t(`${trans_prefix}.type.selectType`)"
                        />
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>
