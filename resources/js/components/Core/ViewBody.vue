<script>
export default {
    name: "ViewBody"
}
</script>

<template>
    <v-main class="grey lighten-3 bg_content">
        <div id="core-view">
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </div>
    </v-main>
</template>
