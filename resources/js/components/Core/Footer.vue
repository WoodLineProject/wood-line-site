<script>
export default {
    name: "Footer",
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
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
            class="indigo lighten-1 white--text text-center"
        >
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                <strong>{{$t(`projectName`)}}</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
