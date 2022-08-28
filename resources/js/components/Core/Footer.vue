<script>
export default {
    name: "Footer",
    data: () => ({
        icons: [
            'mdi-instagram',
        ],
    }),
}
</script>

<template>
    <v-footer
        dark
        padless
    >
        <v-card
            width="100%"
            flat
            tile
            class="lighten-1 white--text"
            color="#4F53B1"
        >
            <v-card-text>
                <div
                    style="margin-left: 35%"
                    v-if="!$vuetify.breakpoint.mdAndUp"
                    class="mt-2 d-flex flex-column">
                    <v-row>
                        <v-icon>date_range</v-icon>
                        <span class="ml-1 mt-1"> - пн-пт</span>
                    </v-row>
                    <v-row>
                        <v-icon>schedule</v-icon>
                        <span class="ml-1 mt-1">{{$t(`app.timeWork`)}}</span>
                    </v-row>
                    <v-row>
                        <v-icon>smartphone</v-icon>
                        <span class="ml-1 mt-1"> - +380932303341</span>
                    </v-row>
                </div>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
