<template>
    <div>
        <h1 v-for="i in 50">{{$t(`app.test`)}}</h1>
    </div>
</template>

<script>
export default {
    name: "Test"
}
</script>

<style scoped>

</style>
