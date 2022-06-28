<script>
import {mapActions} from "vuex";

export default {
    name: "Registr",
    data(){
        return {
            show: false,
            show1: false,
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                phone: '',
            }
        }
    },
    methods:{
        ...mapActions('authStore',['registerAsync']),
        register(){
          this.registerAsync(this.form).then(() => {
              this.$router.push({name: 'home'});
          })
        },
    }
}
</script>

<template>
    <v-card>
        <v-form ref="form">
            <v-card class="m-1 p-1 my-1 " width="500px">
                <v-card-title class="text-center justify-center py-6 gen-ft-style">
                    <span class="display-0">{{$t(`app.reg`) }}</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        clearable
                        :label="$t(`app.name`)"
                        v-model="form.name"/>
                    <v-text-field
                        clearable
                        type="email"
                        :label="$t(`app.email`)"
                        v-model="form.email"/>
                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        counter
                        @click:append="show = !show"
                        :label="$t(`app.password`)"
                        v-model="form.password"/>
                    <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        counter
                        @click:append="show1 = !show1"
                        :label="$t(`app.confirmPassword`)"
                        v-model="form.password_confirmation"/>
                    <v-text-field
                        clearable
                        :label="$t(`app.phone`)"
                        v-model="form.phone"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="register">
                        <v-icon>mdi-check-outline</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-card>
</template>
