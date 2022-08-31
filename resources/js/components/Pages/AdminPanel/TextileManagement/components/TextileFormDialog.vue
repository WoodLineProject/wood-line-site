<script>
import {mapActions, mapGetters} from "vuex";
import {CheckLocaleMixin} from "../../../../../mixins/check-locale-mixin";

const trans_prefix = 'adminPanel.textileManagement';
export default {
    name: "TextileFormDialog",
    mixins:[CheckLocaleMixin],
    data () {
        return {
            trans_prefix,
            searchType: '',
            searchMaker: '',
            searchColor: '',
            show: false,
            dialog: false,
            confirmDialog: false,
            hasItem: false,
            form: {
                id: '',
                name: '',
                type_id: 1,
                maker_id: 1,
                color_id: 1,
            }
        }
    },
    mounted() {
        if(this.item !== undefined){
            this.setProp()
        }
    },
    computed: {
        ...mapGetters('textileStore',['types','maker','color']),
        filterType(){
            return this.filterArray(this.types, this.searchType);
        },
        filterMaker(){
            return this.filterArray(this.maker, this.searchMaker);
        },
        filterColor(){
            return this.filterArray(this.color, this.searchColor);
        },
        disableRunAction(){
            let result = true
            if(this.form.name !== '' && this.form.name !== null){
                result = false;
            }
            return result
        }
    },
    props: {
        item: Object,
        title: String,
    },
    methods: {
        ...mapActions('textileManagement',['addTextileItemAsync','editTextileItemAsync']),
        ...mapActions('textileStore',['getTypesAsync','getMakerAsync','getColorAsync','getTextilesAsync','getTextilesAndPhotoAsync']),
        updateMethods(){
            this.getTypesAsync()
            this.getMakerAsync()
            this.getColorAsync()
            this.getTextilesAsync()
            this.getTextilesAndPhotoAsync()
        },
        runAction() {
            this.hasItem
                ? this.edit()
                : this.saveNewItem();
            this.updateMethods();
        },
        edit(){
            this.editTextileItemAsync(this.form).then(result => {
                this.alert(result)
                this.getTextilesAsync();
                this.closeDialog()
            });
        },
        saveNewItem(){
            this.addTextileItemAsync(this.form).then(result => {
                this.alert(result)
                this.getTextilesAsync();
                this.closeDialog()
            });
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
        closeDialog(){
            this.dialog = false
            this.setProp()
        },
        setProp(){
            this.form.id = this.item.id
            this.form.name = this.item.name
            this.form.type_id = this.item.type_id ?? 1
            this.form.maker_id = this.item.maker_id ?? 1
            this.form.color_id = this.item.color_id ?? 1
            this.searchType = ''
            this.searchAge = ''
            this.searchLayout = ''
            this.hasItem = true;
        },
        showItemText(item){
            return this.isUkrLocale
                ? item.name_ukr
                    ? item.name_ukr
                    : ''
                : item.name_rus
                    ? item.name_rus
                    : ''
        },
        filterArray(selectedArray, search){
            return selectedArray.filter((item) => {
                return this.isUkrLocale
                    ? item.name_ukr
                        ? item.name_ukr.toUpperCase().includes(search.toUpperCase())
                        : true
                    : item.name_rus
                        ? item.name_rus.toUpperCase().includes(search.toUpperCase())
                        : true
            })
        },
    },
    watch:{
        item: 'setProp',
    }
}
</script>
<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            :width="$vuetify.breakpoint.mdAndUp ? '30%' : '100%'"
            @click:outside="closeDialog"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-if="hasItem"
                    color="green darken-1" text
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn
                    v-else
                    color="blue darken-1" text
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5">
                    <span class="display-0">{{ title }}</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        maxlength="50"
                        counter
                        outlined
                        clearable
                        :label="$t(`${trans_prefix}.textile.tableHeaders.name`)"
                        v-model="form.name"/>
                    <v-select
                        v-model="form.type_id"
                        :items="filterType"
                        :label="$t(`${trans_prefix}.type.select`)"
                        item-value="id"
                        :item-text="i => showItemText(i)"
                        @click:outside="form.type_id = item ? item.type_id : 1"
                        dense
                        outlined
                    >
                        <template v-slot:prepend-item>
                            <v-list-item>
                                <v-text-field
                                    v-model="searchType"
                                    :label="$t('app.search')"
                                    class="mx-4"
                                ></v-text-field>
                            </v-list-item>
                        </template>
                    </v-select>
                    <v-select
                        v-model="form.maker_id"
                        :items="filterMaker"
                        :label="$t(`${trans_prefix}.maker.select`)"
                        item-value="id"
                        :item-text="i => showItemText(i)"
                        @click:outside="form.maker_id = item ? item.maker_id : 1"
                        dense
                        outlined
                    >
                        <template v-slot:prepend-item>
                            <v-list-item>
                                <v-text-field
                                    v-model="searchMaker"
                                    :label="$t('app.search')"
                                    class="mx-4"
                                ></v-text-field>
                            </v-list-item>
                        </template>
                    </v-select>
                    <v-select
                        v-model="form.color_id"
                        :items="filterColor"
                        :label="$t(`${trans_prefix}.color.select`)"
                        item-value="id"
                        :item-text="i => showItemText(i)"
                        @click:outside="form.color_id = item ? item.color_id : 1"
                        dense
                        outlined
                    >
                        <template v-slot:prepend-item>
                            <v-list-item>
                                <v-text-field
                                    v-model="searchColor"
                                    :label="$t('app.search')"
                                    class="mx-4"
                                ></v-text-field>
                            </v-list-item>
                        </template>
                    </v-select>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="closeDialog"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-btn
                        :disabled="disableRunAction"
                        color="green darken-1"
                        text
                        @click="runAction"
                    >
                        <v-icon>done</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
