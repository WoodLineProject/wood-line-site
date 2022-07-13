<script>
import {mapActions, mapGetters} from "vuex";
import {CheckUserAndRolesMixin} from "../../../../mixins/check-user-and-role-mixin";
import {ROLE_OWNER} from "../../../../constants/roles";
import SetNewPasswordDialog from "./SetNewPasswordDialog";

const trans_prefix = 'adminPanel.userManagement';
export default {
    name: "UserManagement",
    components: {
        SetNewPasswordDialog,
        UserFormDialog: () => import('./UserFormDialog'),
    },
    mixins: [CheckUserAndRolesMixin,SetNewPasswordDialog],
    data(){
        return {
            trans_prefix,
            search: '',
        }
    },
    mounted() {
      this.getUsersAsync();
      this.getRolesAsync();
    },
    computed:{
        ...mapGetters('userManagementStore',['users','roles']),
        showForOwner(){
            return this.checkUserAndRoles([ROLE_OWNER])
        },
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
                    text: this.$t(`${trans_prefix}.tableHeaders.surname`),
                    value: 'surname',
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
                    text: this.$t(`${trans_prefix}.tableHeaders.email`),
                    value: 'email',
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
                    text: this.$t(`${trans_prefix}.tableHeaders.role`),
                    value: 'role',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.getCallBackResponse`),
                    value: 'getCallBackResponse',
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
        ...mapActions('userManagementStore',['getUsersAsync','getRolesAsync','deleteUserAsync']),
        deleteUser(item){
            this.deleteUserAsync({id: item.id}).then(result => {
                if(result){
                    this.$swal({
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }else{
                    this.$swal({
                        icon: 'error',
                        title: this.$t(`${trans_prefix}.deleteAddUser`),
                        showConfirmButton: false,
                        timer: 5000
                    });
                }
                this.getUsersAsync();
            });
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <v-card height="auto">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">
                    {{ $t(`${trans_prefix}.title`) }}
                </span>
        </v-card-title>
        <v-card-text>
            <v-row class="mb-3">
                <v-text-field
                    class="ml-3"
                    v-model="search"
                    append-icon="mdi-magnify"
                    :label="$t(`${trans_prefix}.search`)"
                    single-line
                    hide-details
                ></v-text-field>
                <user-form-dialog v-if="!$vuetify.breakpoint.mdAndUp"
                    class="mt-4 ml-10"
                    v-bind:title="$t(`${trans_prefix}.add`)"
                />
            </v-row>
            <v-data-table
                :headers="headers"
                :items="users"
                :search="search"

            >
                <template v-slot:header.action="{ props }">
                    <user-form-dialog v-if="$vuetify.breakpoint.mdAndUp"
                        v-bind:title="$t(`${trans_prefix}.add`)"
                    />
                </template>
                    <template v-slot:item.action="{ item }">
                        <v-row>
                            <user-form-dialog
                                class="mt-0"
                                v-show="showForOwner"
                                v-bind:title="$t(`${trans_prefix}.edit`)"
                                v-bind:item="item"/>
                            <v-btn
                                v-show="showForOwner"
                                @click="deleteUser(item)"
                                color="red darken-1" text>
                                <v-icon>close</v-icon>
                            </v-btn>
                            <set-new-password-dialog
                                class="mt-0"
                                v-show="showForOwner"
                                v-bind:item="item"/>
                        </v-row>
                    </template>
                    <template v-slot:item.getCallBackResponse="{ item }">
                            <v-checkbox class="ml-10" disabled v-model="!!item.getCallBackResponse"/>
                    </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
