export const CallMyMixin = {
    data () {
        return {
            showCallMy: true,
            dialog: false,
            arrayRouteName: [
                'adminPanel',
                'userManagement',
                'OrdersCallBackPanel',
                'ProductManagement',
                'EmailSenderPanel',
                'TextileManagement',
                'login',
                'registry',
                'HomePageCarousel',
            ]
        }
    },
    mounted() {
        this.showCallMy = !this.arrayRouteName.includes(this.$router.currentRoute.name)
    },
    methods:{
      openDialog(){
          this.showCallMy = !this.dialog
      }
    },
    watch: {
        $route (to){
            this.showCallMy = !this.arrayRouteName.includes(to.name)
        },
        dialog: 'openDialog'
    }
}
