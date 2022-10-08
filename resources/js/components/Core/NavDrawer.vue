<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import {CheckUserAndRolesMixin} from "../../mixins/check-user-and-role-mixin";
import {Menu} from "../../constants/nav-menu";

export default {
    name: "NavDrawer",
    mixins: [CheckUserAndRolesMixin,Menu],
    data: () => ({
        group: null,
    }),
    methods:{
        ...mapActions('appStore',['changeIsShowDrawer']),
        ...mapActions('authStore',['logoutAsync']),
        ...mapMutations('appStore',['setIsShowDrawer']),
        logout(){
            this.logoutAsync().then(() =>{
                this.$swal({
                    icon: 'success',
                    title: this.$t(`auth.logoutSuccess`),
                    showConfirmButton: false,
                    timer: 3000
                })
            });
            this.$router.push({ name: 'home'})
        }
    },
    computed:{
        ...mapGetters('appStore',['isShowDrawer']),
        ...mapGetters('authStore',['currentUser']),
        showUser(){
            return this.checkUserAndRoles()
        },
        drawer: {
            get() {
                return this.isShowDrawer;
            },
            set(val) {
                this.setIsShowDrawer(val)
            }
        },
    },
}
</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="#4F53B1"
        :width="$vuetify.breakpoint.mdAndUp ? '30%' : '60%'"
    >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                v-model="group"
                active-class="white--text text--accent-4"
            >
                <v-list-item link v-show="showUser">
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{currentUser.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{currentUser.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <template v-for="(item, key) in NAV_MENU">
                    <v-list-item
                        v-if="item.text !== 'logout'"
                        v-show="item.show"
                        :key="key"
                        :to="item.to"
                    >
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{$t(`navMenu.${item.text}`)}}</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        v-else
                        v-show="item.show"
                        :key="key"
                        @click="logout()"
                    >
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{$t(`navMenu.${item.text}`)}}</v-list-item-title>
                    </v-list-item>
                </template>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
