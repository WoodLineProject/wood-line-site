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
        isSmall() {
          return this.$vuetify.breakpoint.mdAndUp
              ? 'flex-row'
              : 'flex-column'
        },
        isSmallVCard() {
            return this.$vuetify.breakpoint.mdAndUp
                ? 'mr-2'
                : 'mb-2'
        },
        disableRunAction(){
            let result = true;
            if (this.topic !== '' && this.topic !== null &&
                this.body !== '' && this.body !== null &&
                !!this.selected.length)
            {
                result = false;
            }

            return result
        },
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
            let emails = [];
            this.selected.forEach(e => {
               emails.push(e.email);
            });
            this.sendMailToSimpleUsersAsync({
                topic: this.topic,
                body: this.body,
                selectedUsers: emails
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
    <div class="d-flex mb-5" :class='isSmall'>
    <v-card height="auto" :class='isSmallVCard'>
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

                <v-card-actions>
                    <v-btn
                        :disabled="disableRunAction"
                        @click="sendEmail()"
                        outlined
                        color="green"
                    >{{ $t(`${trans_prefix}.button`) }}</v-btn>
                </v-card-actions>
            </v-container>
        </v-form>
    </v-card>
    </div>
</template>
