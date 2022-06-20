<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    name: "NavDrawer",
    data: () => ({

        group: null,
    }),
    methods:{
        ...mapActions('appStore',['changeIsShowDrawer']),
        ...mapMutations('appStore',['setIsShowDrawer'])
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
                <v-list-item>
                     <router-link :to="{ name: 'home' }">Home </router-link>

                </v-list-item>

                <v-list-item>
                    <router-link :to="{ name: 'bar' }">About </router-link>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Buzz</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
