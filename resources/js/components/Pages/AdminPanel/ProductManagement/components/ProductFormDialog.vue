<script>
import {mapActions, mapGetters} from "vuex";
import {CheckLocaleMixin} from "../../../../../mixins/check-locale-mixin";

const trans_prefix = 'adminPanel.productManagement';
export default {
    name: "ProductFormDialog",
    mixins:[CheckLocaleMixin],
    data () {
        return {
            trans_prefix,
            searchType: '',
            searchLayout: '',
            searchAge: '',
            show: false,
            dialog: false,
            confirmDialog: false,
            hasItem: false,
            form: {
                id: '',
                name: '',
                product_type_id: 1,
                layout_type_id: 1,
                age_type_id: 1,
                is_angular: false,
                all_sizes: '',
                sleep_sizes: '',
                count_pillow: 0,
                description: ''
            }
        }
    },
    mounted() {
        if(this.item!== undefined){
            this.setProp()
        }
    },
    computed: {
        ...mapGetters('dicStore',['types','layout','age']),
        filterType(){
            return this.filterArray(this.types, this.searchType);
        },
        filterLayout(){
            return this.filterArray(this.layout, this.searchLayout);
        },
        filterAge(){
            return this.filterArray(this.age, this.searchAge);
        },
        disableRunAction(){
            let result = true
            if(this.form.name !== '' && this.form.name !== null &&
                this.form.all_sizes !== '' && this.form.all_sizes !== null &&
                this.form.sleep_sizes !== '' && this.form.sleep_sizes !== null &&
                this.form.count_pillow !== '' && this.form.count_pillow !== null &&
                this.form.description !== '' && this.form.description !== null){
                    result = false;
            }
            return result
        }
    },
    props:{
        item: Object,
        title: String,
    },
    methods: {
        ...mapActions('productManagement',['addProductItemAsync','editProductItemAsync']),
        ...mapActions('dicStore',['getTypesAsync','getLayoutAsync','getAgeAsync','getProductsAsync','getProductsAndPhotoAsync']),
        updateMethods(){
            this.getTypesAsync()
            this.getLayoutAsync()
            this.getAgeAsync()
            this.getProductsAsync()
            this.getProductsAndPhotoAsync()
        },
        runAction() {
            this.hasItem
                ? this.edit()
                : this.saveNewItem();
            this.updateMethods();
        },
        edit(){
            this.editProductItemAsync(this.form).then(result => {
                this.alert(result)
                this.getProductsAsync();
                this.closeDialog()
            });
        },
        saveNewItem(){
            this.addProductItemAsync(this.form).then(result => {
                this.alert(result)
                this.getProductsAsync();
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
            this.form.product_type_id = this.item.product_type_id ?? 1
            this.form.layout_type_id = this.item.layout_type_id ?? 1
            this.form.age_type_id = this.item.age_type_id ?? 1
            this.form.is_angular = this.item.is_angular
            this.form.all_sizes = this.item.all_sizes
            this.form.sleep_sizes = this.item.sleep_sizes
            this.form.count_pillow = this.item.count_pillow
            this.form.description = this.item.description
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
                        :label="$t(`${trans_prefix}.product.tableHeaders.name`)"
                        v-model="form.name"/>
                    <v-select
                        v-model="form.product_type_id"
                        :items="filterType"
                        :label="$t(`${trans_prefix}.type.select`)"
                        item-value="id"
                        :item-text="i => showItemText(i)"
                        @click:outside="form.product_type_id = item ? item.product_type_id : 1"
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
                        v-model="form.layout_type_id"
                        :items="filterLayout"
                        :label="$t(`${trans_prefix}.layout.select`)"
                        item-value="id"
                        :item-text="i => showItemText(i)"
                        @click:outside="form.layout_type_id = item ? item.layout_type_id : 1"
                        dense
                        outlined
                    >
                        <template v-slot:prepend-item>
                            <v-list-item>
                                <v-text-field
                                    v-model="searchLayout"
                                    :label="$t('app.search')"
                                    class="mx-4"
                                ></v-text-field>
                            </v-list-item>
                        </template>
                    </v-select>
                    <v-select
                        v-model="form.age_type_id"
                        :items="filterAge"
                        :label="$t(`${trans_prefix}.age.select`)"
                        item-value="id"
                        :item-text="i => showItemText(i)"
                        @click:outside="form.age_type_id = item ? item.age_type_id : 1"
                        dense
                        outlined
                    >
                        <template v-slot:prepend-item>
                            <v-list-item>
                                <v-text-field
                                    v-model="searchAge"
                                    :label="$t('app.search')"
                                    class="mx-4"
                                ></v-text-field>
                            </v-list-item>
                        </template>
                    </v-select>
                    <v-text-field
                        maxlength="100"
                        counter
                        outlined
                        clearable
                        :label="$t(`${trans_prefix}.product.tableHeaders.all_sizes`)"
                        v-model="form.all_sizes"/>
                    <v-text-field
                        maxlength="100"
                        counter
                        outlined
                        clearable
                        :label="$t(`${trans_prefix}.product.tableHeaders.sleep_sizes`)"
                        v-model="form.sleep_sizes"/>
                    <v-text-field
                        outlined
                        counter
                        :label="$t(`${trans_prefix}.product.tableHeaders.count_pillow`)"
                        v-model="form.count_pillow"/>
                    <v-textarea
                        outlined
                        counter
                        clearable
                        :label="$t(`${trans_prefix}.product.tableHeaders.description`)"
                        v-model="form.description"/>
                    <v-checkbox v-model="form.is_angular"
                                :label="$t(`${trans_prefix}.product.tableHeaders.is_angular`)"/>
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
