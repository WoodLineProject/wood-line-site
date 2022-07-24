<script>
import {mapActions, mapGetters} from "vuex";
//import t from '../../../../../../image/bg-3.jpg'

const trans_prefix = 'adminPanel.productManagement';

export default {
    name: "PhotoManager",
    data(){
        return {
            trans_prefix,
            search: '',
            selectedId: undefined,
        }
    },
    computed:{
        ...mapGetters('dicStore',['products']),
        ...mapGetters('productManagement',['photo']),
        filterProduct(){
            return this.products.filter((item) => {
                return item.name.toUpperCase().includes(this.search.toUpperCase())
            })
        }
    },
    methods:{
        ...mapActions('productManagement',['getPhotoAsync']),
        getPhoto(){
            this.$swal.showLoading();
            this.getPhotoAsync({id: this.selectedId}).then(res => {
                this.$swal.close()
            });
        }
    }
}
</script>
<template>
    <div class="mt-5">
        <v-select
            v-model="selectedId"
            :items="filterProduct"
            :label="$t(`${trans_prefix}.product.select`)"
            item-value="id"
            item-text="name"
            @change="getPhoto"
        >
            <template v-slot:prepend-item>
                <v-list-item>
                    <v-text-field
                        v-model="search"
                        :label="$t('app.search')"
                        class="mx-4"
                    ></v-text-field>
                </v-list-item>
            </template>
        </v-select>
        <v-row>
            <v-col
                v-for="(p, i) in photo"
                :key="i"
                class="d-flex child-flex"
                cols="4"
            >
                <v-img
                    width="auto"
                    height="auto"
                    :key="i"
                    :src="require(`../../../../../../image/productPhoto/${p.name}`)"
                    class="grey lighten-2"
                ></v-img>
            </v-col>
        </v-row>
    </div>
</template>
