<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<template>
    <div>
        <v-btn>test</v-btn>
        <router-link :to="{ name: 'home' }">Home </router-link>
        <router-link :to="{ name: 'bar' }">About </router-link>
        <router-view></router-view>
    </div>
</template>
