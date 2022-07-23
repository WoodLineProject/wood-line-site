<script>
import {mapActions, mapGetters} from "vuex";
import {CheckLocaleMixin} from "../../../../../mixins/check-locale-mixin";
import {CheckUserAndRolesMixin} from "../../../../../mixins/check-user-and-role-mixin";
import ProductFormDialog from "./ProductFormDialog";
import {ROLE_OWNER} from "../../../../../constants/roles";

const trans_prefix = 'adminPanel.productManagement';
export default {
    name: "ProductManagement",
    mixins:[CheckLocaleMixin,CheckUserAndRolesMixin],
    components:{
        ProductFormDialog
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
                    text: this.$t(`${trans_prefix}.product.tableHeaders.name`),
                    value: 'name',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.type.select`),
                    value: 'product_type',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.layout.select`),
                    value: 'layout_type',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.age.select`),
                    value: 'age_type',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.product.tableHeaders.is_angular`),
                    value: 'is_angular',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.product.tableHeaders.all_sizes`),
                    value: 'all_sizes',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.product.tableHeaders.sleep_sizes`),
                    value: 'sleep_sizes',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.product.tableHeaders.count_pillow`),
                    value: 'count_pillow',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.product.tableHeaders.description`),
                    value: 'description',
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
        ...mapGetters('dicStore',['products']),
        showForOwner(){
            return this.checkUserAndRoles([ROLE_OWNER])
        },
    },
    methods:{
        ...mapActions('dicStore',['getProductsAsync']),
        ...mapActions('productManagement',['deleteProductItemAsync']),
        deleteItem(item){
            this.deleteProductItemAsync({id:item.id}).then(result => {
                this.alert(result)
                this.getProductsAsync();
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
            <product-form-dialog v-if="!$vuetify.breakpoint.mdAndUp"
                                 class="mt-4"
                                 v-bind:title="$t(`app.add`)"
            />
        </v-row>
        <v-data-table
            :loading="!products.length"
            :headers="headers"
            :items="products"
            :search="search"
        >
            <template v-slot:item.product_type="{ item }">
                <span v-if="isUkrLocale">{{item.productTypeUkr}}</span>
                <span v-else>{{item.productTypeRus}}</span>
            </template>
            <template v-slot:item.layout_type="{ item }">
                <span v-if="isUkrLocale">{{item.layoutTypeUkr}}</span>
                <span v-else>{{item.layoutTypeRus}}</span>
            </template>
            <template v-slot:item.age_type="{ item }">
                <span v-if="isUkrLocale">{{item.ageTypeUkr}}</span>
                <span v-else>{{item.ageTypeRus}}</span>
            </template>
            <template v-slot:item.is_angular="{ item }">
                <v-checkbox disabled v-model="!!item.is_angular"/>
            </template>
            <template v-slot:header.action="{ props }">
                <product-form-dialog v-if="$vuetify.breakpoint.mdAndUp"
                                     v-bind:title="$t(`app.add`)"
                />
            </template>
            <template v-slot:item.action="{ item }">
                <v-row>
                    <product-form-dialog
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
