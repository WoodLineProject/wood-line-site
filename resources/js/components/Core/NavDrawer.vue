<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import {NAV_MENU} from "../../constants/nav-menu";
export default {
    name: "NavDrawer",
    data: () => ({
        NAV_MENU,
        group: null,
    }),
    methods:{
        ...mapActions('appStore',['changeIsShowDrawer']),
        ...mapActions('authStore',['logoutAsync']),
        ...mapMutations('appStore',['setIsShowDrawer']),
        logout(){
            this.logoutAsync();

        }
    },
    watch: {

    },
    computed:{
      ...mapGetters('appStore',['isShowDrawer']),
        drawer: {
            get() {
                return this.isShowDrawer;
            },
            set(val) {
                this.setIsShowDrawer(val)
            }
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
                        v-if="!item.items"
                        :to="item.to"
                    >
                        <v-icon>{{item.icon}}</v-icon>
                        <v-list-item-title>{{$t(`navMenu.${item.text}`)}}</v-list-item-title>
                    </v-list-item>

                    <v-list-group
                        v-else

                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-icon>{{item.icon}}</v-icon>
                                <v-list-item-title>{{$t(`navMenu.${item.text}`)}}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <template v-for="(subItem, subKey) in item.items">
                            <v-list-item
                                v-if="subItem.text !== 'logout'"
                                :key="subKey"
                                :to="subItem.to"
                            >
                                <v-icon>{{subItem.icon}}</v-icon>
                                <v-list-item-title>{{$t(`navMenu.${subItem.text}`)}}</v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                v-else
                                :key="subKey"
                                @click="logout()"
                            >
                                <v-icon>{{subItem.icon}}</v-icon>
                                <v-list-item-title>{{$t(`navMenu.${subItem.text}`)}}</v-list-item-title>
                            </v-list-item>
                        </template>

                    </v-list-group>
                </template>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
