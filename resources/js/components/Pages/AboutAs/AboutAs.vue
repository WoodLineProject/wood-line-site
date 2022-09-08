<script>
const trans_prefix = 'pages.aboutAs'
export default {
    name: "AboutAs",
    data(){
        return {
            trans_prefix
        }
    }
}
</script>
<template>
    <v-card
        id="myCardAboutAs"
        class="d-flex flex-column pl-5 "
        elevation="24"
        :width="$vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
        shaped>
        <div class="d-flex flex-row my-2">
            <div id="lineInHomePage" class="my-auto"></div>
                <h1 style="white-space: nowrap"
                    v-if="$vuetify.breakpoint.mdAndUp">
                    {{ $t(`${trans_prefix}.title`) }}
                </h1>
                <h2 style="white-space: nowrap"
                    v-else>
                    {{ $t(`${trans_prefix}.title`) }}
                </h2>

            <div id="lineInHomePage" class="my-auto"></div>
        </div>

        <div class="text-center">
            <h2>{{ $t(`${trans_prefix}.miniTitle1`) }}</h2>
            <h2>{{ $t(`${trans_prefix}.miniTitle2`) }}</h2>
        </div>
        <div id="check_list" class="mx-auto my-3">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.check_1`) }}
                <br/>
                <span :class="$vuetify.breakpoint.mdAndUp ? 'ml-10' : ''">
                    {{ $t(`${trans_prefix}.check_1_1`) }}
                </span>
                <br/>
                <span :class="$vuetify.breakpoint.mdAndUp ? 'ml-10' : ''">
                    {{ $t(`${trans_prefix}.check_1_2`) }}
                </span>
            </h3>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.check_2`) }}</h3>
        </div>
        <div class="mx-auto my-3" id="check_list">
            <div style="float: left; clear: left">
                <v-icon class="mr-3" color="green">done</v-icon>
            </div>
            <h3>{{ $t(`${trans_prefix}.check_3`) }}</h3>
        </div>
        <h2 class="mx-5 mb-5 text-center">
            {{ $t(`${trans_prefix}.footer`) }}
            {{ $t(`${trans_prefix}.footer_1`) }}
        </h2>
        <div id="lineInHomePage" class="mb-5"></div>
    </v-card>
</template>
<style>
#myCardAboutAs{
    font-size: 13pt;
}
#check_list{
    width: 80%;
}
</style>
