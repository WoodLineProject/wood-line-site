<script>

import {mapActions, mapGetters} from "vuex";

const trans_prefix = 'adminPanel.emailSenderPanel';
export default {
    name: "EmailSenderPanel",
    data() {
        return {
            trans_prefix,
            topic: '',
            body: '',
            selected: []
        }
    },
    mounted() {
        this.getSimpleUsersAsync();
    },
    computed: {
        ...mapGetters('emailSenderPanelStore', ['simpleUsers']),
        headers() {
            return [
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.name`),
                    value: 'name',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.patronymic`),
                    value: 'patronymic',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.email`),
                    value: 'email',
                    align: 'center',
                    class: 'my-header',
                    sortable: true
                }
            ]
        }
    },
    methods: {
        ...mapActions('emailSenderPanelStore', ['getSimpleUsersAsync', 'sendMailToSimpleUsersAsync']),
        sendEmail(){
            this.$swal.showLoading();
            console.log(this.selected);
            this.sendMailToSimpleUsersAsync({
                topic: this.topic,
                body: this.body,
                selectedUsers: this.selected
            }).then(result => {
                this.$swal({
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.dialog = false;
            })
                .catch(result => {
                    this.$swal({
                        icon: 'error',
                        title: result,
                        showConfirmButton: false,
                        timer: 5000
                })
            });
        }
    }
}
</script>

<template>
    <div class="d-flex flex-row">
    <v-card height="auto" class="mr-2">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
            <span class="display-0">
                {{ $t(`${trans_prefix}.table`) }}
            </span>
        </v-card-title>
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="simpleUsers"
                show-select
            >
                <template v-slot:item.action="{ item }">
                    <v-btn
                        icon
                        color="green"
                    >
                        <v-icon>done</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>

    <v-card height="auto">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
            <span class="display-0">
                {{ $t(`${trans_prefix}.title`) }}
            </span>
        </v-card-title>
        <v-form>
            <v-container>
                <v-text-field
                    solo
                    v-bind:label="$t(`${trans_prefix}.fieldLabels.topic`)"
                    required
                    v-model="topic"
                ></v-text-field>

                <v-textarea
                    solo
                    v-bind:label="$t(`${trans_prefix}.fieldLabels.body`)"
                    required
                    v-model="body"
                ></v-textarea>
                <v-btn
                    width="95%"
                    @click="sendEmail()"
                    class="ma-2 "
                    outlined
                    color="green"
                >{{ $t(`${trans_prefix}.button`) }}</v-btn>
            </v-container>
        </v-form>
    </v-card>
    </div>
</template>
