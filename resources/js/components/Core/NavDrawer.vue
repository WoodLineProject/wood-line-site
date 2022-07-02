<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import {Menu} from "../../constants/nav-menu";
import {CheckUserAndRolesMixin} from "../../mixins/check-user-and-role-mixin";
import {ROLE_ADMIN, ROLE_OWNER, ROLE_USER} from "../../constants/roles";
export default {
    name: "NavDrawer",
    mixins: [CheckUserAndRolesMixin],
    data: () => ({
        Menu,
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
        }
    },
    mounted() {
    },
    computed:{
      ...mapGetters('appStore',['isShowDrawer']),
        showUser(){
          return this.checkUserAndRoles([ROLE_USER, ROLE_ADMIN, ROLE_OWNER])
        },
        drawer: {
            get() {
                return this.isShowDrawer;
            },
            set(val) {
                this.setIsShowDrawer(val)
            }
        },
        NAV_MENU () {
          return this.Menu.methods.getMenu()
        }
    },
}
</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
    >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
            >
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
