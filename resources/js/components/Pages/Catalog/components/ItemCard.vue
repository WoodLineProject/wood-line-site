<script>
const MAX_E = 22;
const MIN_E = 0;
const BG_HOVER = '#02c4fa';
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
    methods:{
        hoverCard(){
            this.elevation = MAX_E
            this.bg = BG_HOVER
        },
        leaveCard(){
            this.elevation = MIN_E
            this.bg = BG_LEAVE
        }
    }
}
</script>
<template>
    <v-card
        @mouseover="hoverCard"
        @mouseleave="leaveCard"
        :style="'background-color:'+ bg"
        :elevation="elevation"
        class="mx-auto"
        max-width="400"
    >
        <v-img
            class="white--text align-end mt-2 mx-2"
            height="200px"
            :src="item.path"
        >
        </v-img>
        <v-card-title>
            <div>{{item.name}}</div>
        </v-card-title>
    </v-card>
</template>
