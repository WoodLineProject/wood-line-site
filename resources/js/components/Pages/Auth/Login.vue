<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Login",
    data(){
        return {
            show: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    computed:{
      ...mapGetters('authStore',['currentUser']),
    },
    methods:{
        ...mapActions('authStore',['loginAsync','getCurrentUserAsync']),
        login(){
            this.loginAsync(this.form).then((response) => {
                if(response.result){
                    this.getCurrentUserAsync();
                    setTimeout(() => {
                        this.$swal({
                            icon: 'success',
                            title: this.$t(`auth.${response.message}`,{name: this.currentUser.name}),
                            showConfirmButton: false,
                            timer: 3000
                        })
                        this.$router.push({path: '/'});
                    }, 500);

                }else{
                    this.$swal({
                        //position: 'top-end',
                        icon: 'error',
                        title: this.$t(`auth.${response.message}`),
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
        }
    }
}
</script>

<template>
    <v-form ref="form">
        <v-card class="m-1 p-1 my-1 " width="500px">
            <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">{{$t(`app.login`) }}</span>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    clearable
                    outlined
                    :label="$t(`app.email`)"
                    v-model="form.email"/>
                <v-text-field
                    outlined
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    counter
                    @click:append="show = !show"
                    :label="$t(`app.password`)"
                    v-model="form.password"/>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="login">
                   <v-icon>mdi-check-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
