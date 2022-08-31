<script>
import {mapActions, mapGetters} from "vuex";
import ItemCard from "./components/ItemCard";
import {CheckLocaleMixin} from "../../../mixins/check-locale-mixin";

export default {
    name: "Upholstery",
    data(){
        return {
            typeId: 0,
            filters: false,
            filterTypeArray: [],
            filterColorArray: [],
        }
    },
    mixins:[CheckLocaleMixin],
    components:{
        ItemCard
    },
    mounted() {
        this.getTypesAsync()
        this.getColorAsync()
        this.getTextilesAndPhotoAsync()
    },
    computed:{
        ...mapGetters('textileStore', ['types', 'color', 'textilesAndPhoto']),
        filterTextilesAndPhoto(){
            let array = this.textilesAndPhoto.filter(i => {
                return this.filterTypeArray.length
                    ? this.filterTypeArray.includes(i.type_id)
                    : true
            })
            array = array.filter(i => {
                return this.filterColorArray.length
                    ? this.filterColorArray.includes(i.color_id)
                    : true
            })
            return array
        }
    },
    methods:{
        ...mapActions('textileStore', ['getTypesAsync', 'getColorAsync', 'getTextilesAndPhotoAsync']),
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
            this.filterColorArray = [];
        }
    },
}
</script>
<template>
    <div style="width: 100%">
        <v-btn
            :class="$vuetify.breakpoint.mdAndUp ? 'ma-2 ml-12' : 'ma-1'"
            color="#4F53B1"
            @click="showFilter()"
            class="white--text"
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
                                {{$t(`app.countItem`,{count: filterTextilesAndPhoto.length})}}
                                <v-spacer/>
                                <v-btn
                                    @click="clearFilters"
                                    color="blue"
                                    text>
                                    <v-icon>refresh</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-title>
                                {{$t(`adminPanel.textileManagement.type.select`)}}
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
                                {{$t(`adminPanel.textileManagement.color.select`)}}
                            </v-card-title>
                            <v-card-text :class="$vuetify.breakpoint.mdAndUp ? '' : 'd-flex flex-wrap'">
                                <v-row :class="$vuetify.breakpoint.mdAndUp ? 'd-flex flex-column' : ''">
                                    <v-checkbox class="ml-3" v-for="(item,index) in color"
                                                v-bind:key="index"
                                                @change="changeCheckbox(item, filterColorArray)"
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
                <div v-for="(item, i) in filterTextilesAndPhoto"
                             :key="i">
                    <item-card
                        class="mb-5 ml-2 mr-2 align-self-start"
                        v-bind:item="item"/>
                </div>

            </div>
        </div>
    </div>
</template>
