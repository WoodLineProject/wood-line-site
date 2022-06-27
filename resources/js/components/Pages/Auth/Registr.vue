<script>
export default {
    name: "Registr",
    data(){
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
            }
        }
    },
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
                        :label="$t(`app.email`)"
                        v-model="form.email"/>
                    <v-text-field
                        clearable
                        :label="$t(`app.password`)"
                        v-model="form.password"/>
                    <v-text-field
                        clearable
                        :label="$t(`app.confirmPassword`)"
                        v-model="form.confirmPassword"/>
                    <v-text-field
                        clearable
                        :label="$t(`app.phone`)"
                        v-model="form.phone"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text>
                        <v-icon>mdi-check-outline</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-card>
</template>
