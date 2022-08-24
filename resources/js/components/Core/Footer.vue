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
            class="lighten-1 white--text text-center"
            color="#4F53B1"
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
        </v-card>
    </v-footer>
</template>
