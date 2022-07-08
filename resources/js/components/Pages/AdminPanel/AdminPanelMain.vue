<script>
import {AdminNavMenu} from "../../../constants/admin-nav-menu";

const trans_prefix = 'adminPanel.adminPanelMain'
export default {
    name: "AdminPanelMain",
    data(){
        return {
            trans_prefix,
            group: null,
        }
    },
    mixins: [AdminNavMenu],
}
</script>

<template>
    <v-card height="auto">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">
                    {{ $t(`${trans_prefix}.title`) }}
                </span>
        </v-card-title>
        <v-card-text>
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <template v-for="(item, key) in ADMIN_NAV_MENU">
                        <v-list-item
                            v-show="item.show"
                            :key="key"
                            :to="item.to"

                        >
                            <v-list-item-icon>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{$t(`${trans_prefix}.${item.text}`)}}</v-list-item-title>
                        </v-list-item>
                    </template>
                </v-list-item-group>
            </v-list>
        </v-card-text>
    </v-card>
</template>
