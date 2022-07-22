<script>
import {CheckLocaleMixin} from "../../mixins/check-locale-mixin";
const NAME_UKR = 'Новий запис'
const NAME_RUS = 'Новая запись'
const DEF_SELECTED_ID = 0
const trans_prefix = 'common.templateDic'
export default {
    name: "TemplateDIC",
    data(){
        return {
            trans_prefix,
            search: '',
            selectedId: DEF_SELECTED_ID,
            selectedNameRus: '',
            selectedNameUkr: '',
            runActionDisable: true,
        }
    },
    props:{
        selectedArray: [],
        selectTitle: String,
    },
    mixins:[CheckLocaleMixin],
    computed:{
        filterSelectedArray(){
            this.selectedArray.unshift({
                id: 0,
                name_ukr: NAME_UKR,
                name_rus: NAME_RUS,
            })
            return this.selectedArray.filter((item) => {
                return this.isUkrLocale
                    ? item.name_ukr
                        ? item.name_ukr.toUpperCase().includes(this.search.toUpperCase())
                        : true
                    : item.name_rus
                        ? item.name_rus.toUpperCase().includes(this.search.toUpperCase())
                        : true
            })
        },
        disableDelete(){
            return this.selectedId === DEF_SELECTED_ID
        }
    },
    methods:{
        showItemText(item){
            return this.isUkrLocale
                ? item.name_ukr
                    ? item.name_ukr
                    : ''
                : item.name_rus
                    ? item.name_rus
                    : ''
        },
        changeNameField(){
            this.selectedNameUkr = this.getCurrentItem().name_ukr
            this.selectedNameRus = this.getCurrentItem().name_rus
        },
        getCurrentItem(){
            return this.filterSelectedArray.find(item => item.id === this.selectedId)
        },
        actionByTextFields(){
            if(
                (this.selectedNameUkr !== this.getCurrentItem().name_ukr ||
                    this.selectedNameRus !== this.getCurrentItem().name_rus)
                &&
                (this.selectedNameUkr !== '' ||
                    this.selectedNameRus !== '')

            ){
                this.runActionDisable = false
            }else{
                this.runActionDisable = true
            }

        },
        runAction(){
            this.selectedId === DEF_SELECTED_ID
                ? console.log('new')
                : console.log('edit')

        },
        deleteItem(){
            console.log('deleteItem')
        }
    },
    watch:{
        selectedId: 'changeNameField',
        selectedNameUkr: 'actionByTextFields',
        selectedNameRus: 'actionByTextFields',
    }
}
</script>

<template>
    <div class="mt-5">
        <v-row>
            <v-select
                v-model="selectedId"
                :items="filterSelectedArray"
                :label="selectTitle"
                item-value="id"
                :item-text="item => showItemText(item)"
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
            <v-text-field
                class="ml-3"
                v-model="selectedNameRus"
                :label="$t(`${trans_prefix}.nameRus`)"
            ></v-text-field>
            <v-text-field
                class="ml-3"
                v-model="selectedNameUkr"
                :label="$t(`${trans_prefix}.nameUkr`)"
            ></v-text-field>
            <v-btn
                @click="runAction"
                :disabled="runActionDisable"
                class="mt-3 ml-3"
                text
                color="green"
            >
                <v-icon>
                    done
                </v-icon>
            </v-btn>
            <v-btn
                @click="deleteItem"
                :disabled="disableDelete"
                class="mt-3 ml-3"
                text
                color="red"
            >
                <v-icon>
                    close
                </v-icon>
            </v-btn>
        </v-row>
    </div>
</template>
