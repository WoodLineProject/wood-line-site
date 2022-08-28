<script>
const trans_prefix = 'pages.wholesaleCustomers'
export default {
    name: "WholesaleCustomers",
    data(){
        return {
            trans_prefix
        }
    }
}
</script>
<template>
    <v-card
        id="myCardWholesaleCustomers"
        class="d-flex flex-column pl-5 "
        elevation="24"
        :width="$vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
        shaped>
        <div class="text-center mt-5">
            <h1>{{ $t(`${trans_prefix}.title`) }}</h1>
        </div>
        <div class="text-center">
            <h2>{{ $t(`${trans_prefix}.miniTitle1`) }}</h2>
            <h2>{{ $t(`${trans_prefix}.miniTitle2`) }}</h2>
        </div>
        <div class="text-center mt-5">
            <h2>{{ $t(`${trans_prefix}.subTitle`) }}</h2>
        </div>
        <div id="check_list" class="mx-auto my-3">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.sub1`) }}</h3>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.sub2`) }}</h3>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.sub3`) }}</h3>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.sub4`) }}</h3>
        </div>
        <div class="text-center mt-5">
            <h2>{{ $t(`${trans_prefix}.need`) }}</h2>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.need1`) }}</h3>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.need2`) }}</h3>
        </div>
        <router-link style="text-decoration: none;" :to="{ name: 'catalog'}">
            <h2 id="route" class="mx-5 mb-5 text-center">
                {{ $t(`${trans_prefix}.route`) }}
            </h2>
        </router-link>
    </v-card>
</template>
<style>
#myCardWholesaleCustomers{
    font-size: 10pt;
}
#check_list{
    width: 80%;
}
#route{
    color: #4F53B1;
    text-decoration: none;
}
</style>
