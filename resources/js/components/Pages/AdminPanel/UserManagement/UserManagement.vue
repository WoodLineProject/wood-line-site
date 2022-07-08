<script>
import {mapActions, mapGetters} from "vuex";
import {CheckUserAndRolesMixin} from "../../../../mixins/check-user-and-role-mixin";
import {ROLE_OWNER} from "../../../../constants/roles";

const trans_prefix = 'adminPanel.userManagement';
export default {
    name: "UserManagement",
    components: {
        UserFormDialog: () => import('./UserFormDialog'),
    },
    mixins: [CheckUserAndRolesMixin],
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
        ...mapGetters('userManagementStore',['users']),
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
                    value: 'action',
                    align: 'center',
                    class: 'my-header',
                    sortable: false,
                },
            ]
        }
    },
    methods:{
        ...mapActions('userManagementStore',['getUsersAsync','getRolesAsync'])
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
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                :label="$t(`${trans_prefix}.search`)"
                single-line
                hide-details
            ></v-text-field>
            <v-data-table
                :headers="headers"
                :items="users"
                :search="search"
                :disable-sort="true"
            >
                <template v-slot:header.action="{ props }">
                    <user-form-dialog
                        v-bind:title="$t(`${trans_prefix}.add`)"
                    />
                </template>
                <template v-slot:item.action="{ item }">
                    <user-form-dialog
                        v-show="showForOwner"
                        v-bind:title="$t(`${trans_prefix}.edit`)"
                        v-bind:item="item"/>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
