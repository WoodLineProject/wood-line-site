<script>
export default {
    name: "HomePage",
    components:{
        DesktopHomePage: () => import('./components/DesktopHomePage'),
        MobileHomePage: () => import('./components/MobileHomePage'),
    }
}
</script>

<template>
    <div>
        <desktop-home-page v-if="$vuetify.breakpoint.mdAndUp"/>
        <mobile-home-page v-else/>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@1,700&display=swap');

.textInHomePage {
    word-break: keep-all;
    font-size: 13pt;
    font-family: 'Overpass', sans-serif;
}

.textInIcons {
    word-break: keep-all;
    font-size: 9pt;
    font-family: 'Overpass', sans-serif;
}

.textBtn {
    font-size: 9pt;
    font-weight: bold;
    font-family: 'Overpass', sans-serif;
}

#lineInHomePage {
    background-color: #4F53B1;
    width: 100%;
    height: 5pt;
}
</style>
