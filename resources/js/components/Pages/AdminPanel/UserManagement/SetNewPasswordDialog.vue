
<script>
import {mapActions, mapGetters} from "vuex";

const trans_prefix = 'adminPanel.userManagement';
export default {
    name: "SetNewPasswordDialog",
    data () {
        return {
            trans_prefix,
            show: false,
            dialog: false,
            password: '',
            currentId: ''
        }
    },
    mounted() {
        if(this.item!== undefined){
            this.currentId = this.item.id
        }
    },
    computed: {
        disableRunAction(){
            return !(this.password !== '' && this.password !== null && this.password.length > 7)
        }
    },
    props:{
        item: Object,
    },
    methods: {
        ...mapActions('userManagementStore',['changePassAsync','getUsersAsync',]),
        editPass(){
            this.changePassAsync({
                id: this.currentId,
                password: this.password
            }).then(result => {
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
            this.dialog = false;
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
                     text
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>key</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5">
                    <span class="display-0">{{ $t(`${trans_prefix}.changePass`) }}</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        outlined
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        counter
                        @click:append="show = !show"
                        :label="$t(`app.password`)"
                        v-model="password"/>
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
                        @click="editPass"
                    >
                        <v-icon>done</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
