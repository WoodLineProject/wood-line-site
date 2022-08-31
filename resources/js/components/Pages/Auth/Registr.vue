<script>
import {mapActions, mapGetters} from "vuex";
import rules from "../../../constants/field-validation-rules";

export default {
    name: "Registr",
    data(){
        return {
            show: false,
            show1: false,
            form: {
                name: '',
                surname: '',
                patronymic: '',
                email: '',
                password: '',
                password_confirmation: '',
                phone: '+380',
            },
            rules: rules
        }
    },

    methods:{
        ...mapActions('authStore',['registerAsync','getCurrentUserAsync']),
        register(){
            if (this.$refs.form.validate()) {
                this.form.password_confirmation = this.form.password
                this.registerAsync(this.form).then((response) => {
                    if (response.result) {
                        this.$swal({
                            icon: 'success',
                            title: this.$t(`auth.${response.message}`, {name: response.name}),
                            showConfirmButton: false,
                            timer: 2000
                        })
                        this.$router.push({path: '/'});
                        this.getCurrentUserAsync();
                    } else {
                        this.$swal({
                            icon: 'error',
                            title: this.$t(`auth.${response.message}`, {error: response.errors}),
                            showConfirmButton: false,
                            timer: 5000
                        });
                    }
                })
            }
        },
    }
}
</script>

<template>
    <v-form ref="form">
        <v-card class="m-1 p-1 my-1 " width="500px">
            <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">{{$t(`app.reg`) }}</span>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    :rules="[rules.required]"
                    maxlength="50"
                    counter
                    outlined
                    clearable
                    :label="$t(`app.name`)"
                    v-model="form.name"/>
                <v-text-field
                    :rules="[rules.required]"
                    maxlength="50"
                    counter
                    outlined
                    clearable
                    :label="$t(`app.surname`)"
                    v-model="form.surname"/>
                <v-text-field
                    :rules="[rules.required]"
                    maxlength="50"
                    counter
                    outlined
                    clearable
                    :label="$t(`app.patronymic`)"
                    v-model="form.patronymic"/>
                <v-text-field
                    :rules="[rules.required, rules.email]"
                    maxlength="50"
                    counter
                    outlined
                    clearable
                    type="email"
                    :label="$t(`app.email`)"
                    v-model="form.email"/>
                <v-text-field
                    :rules="[rules.required]"
                    outlined
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    counter
                    @click:append="show = !show"
                    :label="$t(`app.password`)"
                    v-model="form.password"/>
                <v-text-field
                    :rules="[rules.required]"
                    outlined
                    clearable
                    counter
                    maxlength="13"
                    :label="$t(`app.phone`)"
                    v-model="form.phone"/>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" text @click="register">
                    <v-icon>done</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
