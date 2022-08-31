<script>
import {mapActions, mapGetters} from "vuex";
import {CheckLocaleMixin} from "../../../../../mixins/check-locale-mixin";
import {CheckUserAndRolesMixin} from "../../../../../mixins/check-user-and-role-mixin";
import TextileFormDialog from "./TextileFormDialog";
import {ROLE_OWNER} from "../../../../../constants/roles";

const trans_prefix = 'adminPanel.textileManagement';
export default {
    name: "TextileManagement",
    mixins:[CheckLocaleMixin,CheckUserAndRolesMixin],
    components:{
        TextileFormDialog
    },
    data(){
        return {
            trans_prefix,
            search: '',
        }
    },
    computed:{
        headers(){
            return [
                {
                    text: this.$t(`${trans_prefix}.textile.tableHeaders.name`),
                    value: 'name',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.type.select`),
                    value: 'type',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.maker.select`),
                    value: 'maker',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.color.select`),
                    value: 'color',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    value: 'action',
                    align: 'center',
                    class: 'my-header',
                    sortable: false,
                    width: '10%',
                },
            ]
        },
        ...mapGetters('textileStore',['textiles']),
        showForOwner(){
            return this.checkUserAndRoles([ROLE_OWNER])
        },
    },
    methods:{
        ...mapActions('textileStore',['getTypesAsync','getMakerAsync','getColorAsync','getTextilesAsync','getTextilesAndPhotoAsync']),
        ...mapActions('textileManagement',['deleteTextileItemAsync']),
        deleteItem(item){
            this.deleteTextileItemAsync({id:item.id}).then(result => {
                this.alert(result)
                this.getTextilesAsync();
            });
            this.updateMethods();
        },
        alert(result){
            if(result){
                this.$swal({
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            }else{
                this.$swal({
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 5000
                });
            }
        },
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

<template>
    <div class="mt-5">
        <v-row class="mb-3">
            <v-text-field
                class="ml-3"
                v-model="search"
                append-icon="mdi-magnify"
                :label="$t(`app.search`)"
                single-line
                hide-details
            ></v-text-field>
            <textile-form-dialog v-if="!$vuetify.breakpoint.mdAndUp"
                                 class="mt-4"
                                 v-bind:title="$t(`app.add`)"
            />
        </v-row>
        <v-data-table
            :loading="!textiles.length"
            :headers="headers"
            :items="textiles"
            :search="search"
        >
            <template v-slot:item.type="{ item }">
                <span v-if="isUkrLocale">{{item.textileTypeUkr}}</span>
                <span v-else>{{item.textileTypeRus}}</span>
            </template>
            <template v-slot:item.maker="{ item }">
                <span v-if="isUkrLocale">{{item.textileMakerUkr}}</span>
                <span v-else>{{item.textileMakerRus}}</span>
            </template>
            <template v-slot:item.color="{ item }">
                <span v-if="isUkrLocale">{{item.textileColorUkr}}</span>
                <span v-else>{{item.textileColorRus}}</span>
            </template>
            <template v-slot:header.action="{ props }">
                <textile-form-dialog v-if="$vuetify.breakpoint.mdAndUp"
                                     v-bind:title="$t(`app.add`)"
                />
            </template>
            <template v-slot:item.action="{ item }">
                <v-row>
                    <textile-form-dialog
                        class="mt-0"
                        v-bind:title="$t(`app.edit`)"
                        v-bind:item="item"/>
                    <v-btn
                        class="mt-0"
                        v-show="showForOwner"
                        @click="deleteItem(item)"
                        color="red darken-1" text>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-row>
            </template>
        </v-data-table>
    </div>
</template>
