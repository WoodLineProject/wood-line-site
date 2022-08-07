<script>
import {mapActions, mapGetters} from "vuex";
import ItemCard from "./components/ItemCard";
import {CheckLocaleMixin} from "../../../mixins/check-locale-mixin";

export default {
    name: "Catalog",
    data(){
        return {
            typeId: 0,
            filters: false,
            filterTypeArray: [],
            filterLayoutArray: [],
            filterAgeArray: [],
        }
    },
    mixins:[CheckLocaleMixin],
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
        filterProductsAndPhoto(){
            let array = this.productsAndPhoto.filter(i => {
                return this.filterTypeArray.length
                    ? this.filterTypeArray.includes(i.product_type_id)
                    : true
            })
            array = array.filter(i =>{
                return this.filterLayoutArray.length
                    ? this.filterLayoutArray.includes(i.layout_type_id)
                    : true
            })
            array = array.filter(i =>{
                return this.filterAgeArray.length
                    ? this.filterAgeArray.includes(i.layout_type_id)
                    : true
            })
            return array
        }
    },
    methods:{
        ...mapActions('dicStore',['getTypesAsync','getLayoutAsync','getAgeAsync','getProductsAndPhotoAsync']),
        showItemText(item){
            return this.isUkrLocale
                ? item.name_ukr
                    ? item.name_ukr
                    : ''
                : item.name_rus
                    ? item.name_rus
                    : ''
        },
        changeCheckbox(index, arrayFilter){
            arrayFilter.includes(index.id)
                ? arrayFilter.splice(arrayFilter.indexOf(index.id),1)
                : arrayFilter.push(index.id)
        },
        showFilter(){
            this.filters = !this.filters
        },
        clearFilters(){
            this.$refs.form.reset()
            this.filterTypeArray = [];
            this.filterLayoutArray = [];
            this.filterAgeArray = [];
        }
    },
}
</script>
<template>
    <div style="width: 100%">
        <v-btn
            :class="$vuetify.breakpoint.mdAndUp ? 'ma-2 ml-12' : 'ma-1'"
            color="blue"
            @click="showFilter()"
        >
            <span v-if="filters">{{$t(`app.filterNotShow`)}}</span>
            <span v-else>{{$t(`app.filterShow`)}}</span>
        </v-btn>
        <div style="width: 100%" :class="$vuetify.breakpoint.mdAndUp ? 'd-flex' : ''">
            <div :style="'width:'+ filters ? '10%' : '0%;'">
                <v-expand-x-transition>
                    <v-card
                        v-show="filters"
                        height="auto"
                        :width="$vuetify.breakpoint.mdAndUp ? '210' : '100%'"
                        class="white align-self-start mb-3 mr-1"
                    >
                        <v-form ref="form">
                            <v-card-title>
                                {{$t(`app.countItem`,{count: filterProductsAndPhoto.length})}}
                                <v-spacer/>
                                <v-btn
                                    @click="clearFilters"
                                    color="blue"
                                    text>
                                    <v-icon>refresh</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-title>
                                {{$t(`adminPanel.productManagement.type.select`)}}
                            </v-card-title>
                            <v-card-text :class="$vuetify.breakpoint.mdAndUp ? '' : 'd-flex flex-wrap'">
                                <v-row :class="$vuetify.breakpoint.mdAndUp ? 'd-flex flex-column' : ''">
                                    <v-checkbox class="ml-3" v-for="(item,index) in types"
                                                v-bind:key="index"
                                                @change="changeCheckbox(item, filterTypeArray)"
                                                :label="showItemText(item)"
                                                color="success"
                                                value="success"
                                                hide-details
                                    ></v-checkbox>
                                </v-row>
                            </v-card-text>

                            <v-card-title>
                                {{$t(`adminPanel.productManagement.layout.select`)}}
                            </v-card-title>
                            <v-card-text :class="$vuetify.breakpoint.mdAndUp ? '' : 'd-flex flex-wrap'">
                                <v-row :class="$vuetify.breakpoint.mdAndUp ? 'd-flex flex-column' : ''">
                                    <v-checkbox class="ml-3" v-for="(item,index) in layout"
                                                v-bind:key="index"
                                                @change="changeCheckbox(item, filterLayoutArray)"
                                                :label="showItemText(item)"
                                                color="success"
                                                value="success"
                                                hide-details
                                    ></v-checkbox>
                                </v-row>
                            </v-card-text>

                            <v-card-title v-if="isUkrLocale">
                                {{$t(`adminPanel.productManagement.age.select`)}}
                            </v-card-title>
                            <v-card-title v-else>
                                <span>{{$t(`adminPanel.productManagement.age.age`)}}</span>
                                <br>
                                <span>{{$t(`adminPanel.productManagement.age.age2`)}}</span>
                            </v-card-title>

                            <v-card-text :class="$vuetify.breakpoint.mdAndUp ? '' : 'd-flex flex-wrap'">
                                <v-row :class="$vuetify.breakpoint.mdAndUp ? 'd-flex flex-column' : ''">
                                    <v-checkbox class="ml-3" v-for="(item,index) in age"
                                                v-bind:key="index"
                                                @change="changeCheckbox(item, filterAgeArray)"
                                                :label="showItemText(item)"
                                                color="success"
                                                value="success"
                                                hide-details
                                    ></v-checkbox>
                                </v-row>
                            </v-card-text>
                        </v-form>

                    </v-card>
                </v-expand-x-transition>
            </div>
            <div class="d-flex flex-wrap justify-space-around"
                :style="'width:'+ filters ? '90%' : '100%;'">
                <router-link :to="{ name: 'aboutProductItem', params: {id: item.id}}"
                             v-for="(item, i) in filterProductsAndPhoto"
                             :key="i">
                    <item-card
                        class="mb-5 ml-2 mr-2 align-self-start"
                        v-bind:item="item"/>
                </router-link>

            </div>
        </div>
    </div>
</template>
