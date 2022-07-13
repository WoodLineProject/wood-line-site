<script>

import {mapActions, mapGetters} from "vuex";

const trans_prefix = 'adminPanel.ordersCallBackPanel';
export default {
    name: "OrdersCallBackPanel",
    data(){
        return {
            trans_prefix,
        }
    },
    mounted() {
        this.getOrdersCallBackAsync();
    },
    computed:{
        ...mapGetters('ordersCallBackPanelStore',['ordersCallBack']),
        headers(){
            return [
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.name`),
                    value: 'name',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.patronymic`),
                    value: 'patronymic',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.phone`),
                    value: 'phone',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.order_date`),
                    value: 'order_date',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    value: 'action',
                    align: 'center',
                    class: 'my-header',
                    sortable: false,
                },
            ]
        }
    },
    methods:{
      ...mapActions('ordersCallBackPanelStore',['getOrdersCallBackAsync','makeCompleteAsync']),
        makeComplete(id){
            this.makeCompleteAsync({id: id}).then(result => {
                if(result){
                    this.$swal({
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }else{
                    this.$swal({
                        icon: 'error',
                        title: this.$t(`${trans_prefix}.makeCompleteError`),
                        showConfirmButton: false,
                        timer: 5000
                    });
                }
                this.getOrdersCallBackAsync();
            });
        },
    },
}
</script>
<template>
    <v-card height="auto">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
            <span class="display-0">
                {{ $t(`${trans_prefix}.title`) }}
            </span>
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="ordersCallBack"
            >
                <template v-slot:item.action="{ item }">
                    <v-btn
                        icon
                        color="green"
                        @click="makeComplete(item.id)"
                    >
                        <v-icon>done</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

