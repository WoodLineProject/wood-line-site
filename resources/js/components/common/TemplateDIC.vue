<script>
import {CheckLocaleMixin} from "../../mixins/check-locale-mixin";
import {CheckUserAndRolesMixin} from "../../mixins/check-user-and-role-mixin";
import {ROLE_OWNER} from "../../constants/roles";
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
            selectedNameUkr: NAME_UKR,
            selectedNameRus: NAME_RUS,
            runActionDisable: true,
        }
    },
    props:{
        selectedArray: [],
        selectTitle: String,
        addFunc: Function,
        editFunc: Function,
        deleteFunc: Function,
        updateSelectedArrayFunc: Function,
        getItemsCatalog: Function,
    },
    mixins:[CheckLocaleMixin,CheckUserAndRolesMixin],
    computed:{
        showForOwner(){
            return this.checkUserAndRoles([ROLE_OWNER])
        },
        filterSelectedArray(){
            let arr = this.selectedArray;
            arr.unshift({
                id: 0,
                name_ukr: NAME_UKR,
                name_rus: NAME_RUS,
            })
            return arr.filter((item) => {
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
                ? this.addFunc({
                        name_ukr: this.selectedNameUkr,
                        name_rus: this.selectedNameRus,
                    }).then(result => {
                        this.updateSelectedArrayFunc()
                        this.alert(result)
                        this.changeNameField()
                    })
                : this.editFunc({
                        id: this.selectedId,
                        name_ukr: this.selectedNameUkr,
                        name_rus: this.selectedNameRus,
                    }).then(result => {
                        this.alert(result)
                        this.updateSelectedArrayFunc()
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
        deleteItem(){
           this.deleteFunc({
               id: this.selectedId,
           }).then(result => {
               this.selectedId = DEF_SELECTED_ID
               this.updateSelectedArrayFunc()
               this.alert(result)
               this.changeNameField()
               this.getItemsCatalog()
           })
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
                class="ml-2 mr-2"
                v-model="selectedNameRus"
                :label="$t(`${trans_prefix}.nameRus`)"
            ></v-text-field>
            <v-text-field
                class="ml-2 mr-2"
                v-model="selectedNameUkr"
                :label="$t(`${trans_prefix}.nameUkr`)"
            ></v-text-field>
            <v-card-actions>
                <v-btn
                    @click="runAction"
                    :disabled="runActionDisable"
                    text
                    color="green"
                >
                    <v-icon>
                        done
                    </v-icon>
                </v-btn>
                <v-spacer/>
                <v-btn
                    v-if="showForOwner"
                    @click="deleteItem"
                    :disabled="disableDelete"
                    text
                    color="red"
                >
                    <v-icon>
                        close
                    </v-icon>
                </v-btn>
            </v-card-actions>

    </div>
</template>
