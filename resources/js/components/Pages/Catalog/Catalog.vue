<script>
import {mapActions, mapGetters} from "vuex";
import ItemCard from "./components/ItemCard";

export default {
    name: "Catalog",
    components:{
      ItemCard
    },
    mounted() {
        this.getTypesAsync()
        this.getLayoutAsync()
        this.getAgeAsync()
        this.getProductsAndPhotoAsync()
    },
    computed:{
        ...mapGetters('dicStore',['types','layout','age','productsAndPhoto']),
    },
    methods:{
        ...mapActions('dicStore',['getTypesAsync','getLayoutAsync','getAgeAsync','getProductsAndPhotoAsync']),
    },
}
</script>
<template>
    <div :class="$vuetify.breakpoint.mdAndUp ? 'd-flex justify-center' : ''">
        <item-card class="ml-3 mr-3"
            v-for="(item, i) in productsAndPhoto"
           :key="i"
            v-bind:item="item"/>
    </div>
</template>
