<script>
const MAX_E = 22;
const MIN_E = 0;
const BG_HOVER = '#4F53B1';
const BG_LEAVE = '#FFFFFF';


export default {
    name: "ItemCard",
    data(){
      return {
          BG_HOVER,
          BG_LEAVE,
          MAX_E,
          MIN_E,
          elevation: MIN_E,
          bg: BG_LEAVE,
      }
    },
    props:{
      item: Object,
    },
    computed:{
      mdAndUp(){
          if(!this.$vuetify.breakpoint.mdAndUp) {
              this.elevation = MAX_E
              this.bg = BG_HOVER
          }else{
              this.elevation = MIN_E
              this.bg = BG_LEAVE
          }
      }
    },
    methods:{
        hoverCard(){
            this.elevation = MAX_E
            this.bg = BG_HOVER
        },
        leaveCard(){
            this.elevation = MIN_E
            this.bg = BG_LEAVE
        },
    },
}
</script>
<template>
    <v-card
        @mouseover="hoverCard"
        @mouseleave="leaveCard"
        :style="$vuetify.breakpoint.mdAndUp ? 'background-color:'+ bg : 'background-color:'+ BG_HOVER"
        :elevation="elevation"
        :max-width="$vuetify.breakpoint.mdAndUp ? '400' : '350'"
    >
        <v-img id="img"
            class="mt-0 ml-0 mr-0"
            height="200px"
            :src="item.path"
        >
        </v-img>
        <span class="ml-5" id="HeaderCardProduct">
            {{item.name | UPPERCASE}}
        </span>
    </v-card>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
#img {
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center center;
    background-attachment: fixed;
    height: 100%;
}
#HeaderCardProduct {
    font-family: 'Bad Script', cursive;
    word-spacing: 3px;
    font-size: 20pt;
}
</style>
