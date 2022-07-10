<script>
import {mapActions, mapGetters} from "vuex";

const trans_prefix = 'adminPanel.userManagement';
export default {
    name: "UserFormDialog",
    data () {
        return {
            trans_prefix,
            show: false,
            dialog: false,
            confirmDialog: false,
            hasItem: false,
            form: {
                id: '',
                name: '',
                surname: '',
                patronymic: '',
                password: '',
                email: '',
                phone: '+380',
                role: 1
            }
        }
    },
    mounted() {
        if(this.item!== undefined){
            this.form.id = this.item.id
            this.form.name = this.item.name
            this.form.surname = this.item.surname
            this.form.patronymic = this.item.patronymic
            this.form.email = this.item.email
            this.form.phone = this.item.phone
            this.form.role = this.item.roleId
            this.hasItem = true;
        }
    },
    computed: {
        ...mapGetters('userManagementStore', ['roles']),
        disableRunAction(){
            let result = true
            if(this.form.name !== '' && this.form.name !== null &&
                this.form.surname !== '' && this.form.surname !== null &&
                this.form.patronymic !== '' && this.form.patronymic !== null &&
                this.form.email !== '' && this.form.email !== null &&
                this.form.phone !== '' && this.form.phone !== null){
                if(this.hasItem){
                    result = false;
                }else{
                    if(this.form.password !== '' && this.form.password !== null){
                        result = false;
                    }
                }
            }
            return result
        }
    },
    props:{
        item: Object,
        title: String,
    },
    methods: {
        ...mapActions('userManagementStore',['editUserAsync','getUsersAsync','addUserAsync']),
        runAction() {
            this.hasItem
                ? this.edit()
                : this.saveNewItem();
            this.dialog = false
        },
        edit(){
            this.editUserAsync(this.form).then(result => {
                if(result){
                    this.$swal({
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }else{
                    this.$swal({
                        icon: 'error',
                        title: this.$t(`${trans_prefix}.errorEditUser`),
                        showConfirmButton: false,
                        timer: 5000
                    });
                }
                this.getUsersAsync();
            });
        },
        saveNewItem(){
            this.addUserAsync(this.form).then(result => {
                if(result){
                    this.$swal({
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }else{
                    this.$swal({
                        icon: 'error',
                        title: this.$t(`${trans_prefix}.errorAddUser`),
                        showConfirmButton: false,
                        timer: 5000
                    });
                }
                this.getUsersAsync();
            });
        },
    }
}
</script>
<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            :width="$vuetify.breakpoint.mdAndUp ? '30%' : '100%'"
            @click:outside="dialog = false"
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
                        :label="$t(`app.name`)"
                        v-model="form.name"/>
                    <v-text-field
                        maxlength="50"
                        counter
                        outlined
                        clearable
                        :label="$t(`app.surname`)"
                        v-model="form.surname"/>
                    <v-text-field
                        maxlength="50"
                        counter
                        outlined
                        clearable
                        :label="$t(`app.patronymic`)"
                        v-model="form.patronymic"/>
                    <v-text-field
                        outlined
                        v-show="!hasItem"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        counter
                        @click:append="show = !show"
                        :label="$t(`app.password`)"
                        v-model="form.password"/>
                    <v-text-field
                        maxlength="50"
                        counter
                        outlined
                        clearable
                        type="email"
                        :label="$t(`app.email`)"
                        v-model="form.email"/>
                    <v-text-field
                        outlined
                        clearable
                        :label="$t(`app.phone`)"
                        v-model="form.phone"/>
                    <v-select
                        v-model="form.role"
                        :items="roles"
                        :label="$t(`app.role`)"
                        item-text="name"
                        item-value="id"
                        dense
                        outlined
                    ></v-select>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="dialog = false"
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
