<script>
import {CallMyMixin} from "../../mixins/call-my-mixin";
import {mapActions} from "vuex";
import Vue from "vue";
import moment from 'moment'
import {BEGIN_WORK, END_WORK} from '../../constants/time-working'
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6Lfy_OogAAAAAN9UqPizPZMJoq8HM8fvzdZaXWlD" });

const NOT_WORK_DAYS_MOMENT = [0,6];
export default {
    name: "CallMy",
    data () {
        return {
            NOT_WORK_DAYS_MOMENT,
            dateNow: moment(),
            beginWork: moment(BEGIN_WORK, 'HH:mm'),
            endWork: moment(END_WORK, 'HH:mm'),
            show: false,
            name: '',
            patronymic: '',
            phone: '+380',
            isSuccess: false,
            showText: false,
            isShowNotWorkingTime: false
        }
    },
    mixins:[CallMyMixin],
    mounted() {
        this.isShowNotWorkingTime = (
            this.dateNow.isAfter(this.endWork)
            || this.dateNow.isBefore(this.beginWork)
            || this.NOT_WORK_DAYS_MOMENT.includes(this.dateNow.weekday())
        )
    },
    computed:{
        disableRunAction(){
            let result = true
            if(this.name !== '' && this.name !== null &&
                this.patronymic !== '' && this.patronymic !== null &&
                this.phone !== '' && this.phone !== null && this.phone.length === 13){
                    result = false;
            }
            return result
        }
    },
    methods:{
        ...mapActions('appStore',['callMyAsync']),
        callMy(){
            this.$recaptcha("login").then((token) => {
                this.$swal.showLoading();
                this.callMyAsync({
                    name: this.name,
                    patronymic: this.patronymic,
                    phone: this.phone,
                }).then(result => {
                    this.$swal({
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    this.dialog = false;
                })
            });
        },
    },
}
</script>
<template>
    <v-row justify="center">
        <div v-show="showCallMy" @click.stop="dialog = true" type="button" class="callback-bt">
            <v-btn
                @mouseover="showText = true"
                @mouseleave="showText = false"
                fab
                elevation="24"
                color="#4F53B1"
               >
                <v-icon color="white">call</v-icon>
            </v-btn>
        </div>

        <v-dialog
            v-model="dialog"
            max-width="300"
        >
            <v-card>
                <v-card-title class="text-h5">
                    {{$t(`app.callMy`)}}
                </v-card-title>
                <v-alert
                    v-show="isShowNotWorkingTime"
                    dense
                    outlined
                    color="orange"
                >
                    {{$t(`app.alertNotWorkTime`)}}
                </v-alert>
                <v-card-text>
                    <v-text-field
                        maxlength="50"
                        counter
                        outlined
                        clearable
                        :label="$t(`app.name`)"
                        v-model="name"/>
                    <v-text-field
                        maxlength="50"
                        counter
                        outlined
                        clearable
                        :label="$t(`app.patronymic`)"
                        v-model="patronymic"/>
                    <v-text-field
                        outlined
                        counter
                        maxlength="13"
                        clearable
                        :label="$t(`app.phone`)"
                        v-model="phone"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="dialog = false"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>

                    <v-btn
                        color="green darken-1"
                        text
                        :disabled="disableRunAction"
                        @click="callMy"
                    >
                        <v-icon>done</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<style>
/*кнопка звонка*/

.callback-bt {
    border-radius:50%;
    cursor:pointer;
    text-align:center;
    position: fixed;
    right: 8%;
    bottom: 18%;
    z-index:999;
    transition:.3s;
    -webkit-animation:hoverWave linear 1s infinite;
    animation:hoverWave linear 1s infinite;
}
.callback-bt i {
    color:#fff;
    font-size:34px;
    transition:.3s;
    line-height: 66px;transition: .5s ease-in-out;
}

.callback-bt i  {
    animation: 1200ms ease 0s normal none 1 running shake;
    animation-iteration-count: infinite;
    -webkit-animation: 1200ms ease 0s normal none 1 running shake;
    -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes hoverWave {
    0% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 0 rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
    }
    40% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 15px rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
    }
    80% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 26.7px rgba(56,163,253,0.067)
    }
    100% {
        box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 40px rgba(56,163,253,0.0)
    }
}@keyframes hoverWave {
     0% {
         box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 0 rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
     }
     40% {
         box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 15px rgba(56,163,253,0.2),0 0 0 0 rgba(56,163,253,0.2)
     }
     80% {
         box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 26.7px rgba(56,163,253,0.067)
     }
     100% {
         box-shadow:0 8px 10px rgba(56,163,253,0.3),0 0 0 30px rgba(56,163,253,0),0 0 0 40px rgba(56,163,253,0.0)
     }
 }

/* animations icon */

@keyframes shake {
    0% {
        transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
    }
    10% {
        transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        -webkit-transform: rotateZ(-30deg);
    }
    20% {
        transform: rotateZ(15deg);
        -ms-transform: rotateZ(15deg);
        -webkit-transform: rotateZ(15deg);
    }
    30% {
        transform: rotateZ(-10deg);
        -ms-transform: rotateZ(-10deg);
        -webkit-transform: rotateZ(-10deg);
    }
    40% {
        transform: rotateZ(7.5deg);
        -ms-transform: rotateZ(7.5deg);
        -webkit-transform: rotateZ(7.5deg);
    }
    50% {
        transform: rotateZ(-6deg);
        -ms-transform: rotateZ(-6deg);
        -webkit-transform: rotateZ(-6deg);
    }
    60% {
        transform: rotateZ(5deg);
        -ms-transform: rotateZ(5deg);
        -webkit-transform: rotateZ(5deg);
    }
    70% {
        transform: rotateZ(-4.28571deg);
        -ms-transform: rotateZ(-4.28571deg);
        -webkit-transform: rotateZ(-4.28571deg);
    }
    80% {
        transform: rotateZ(3.75deg);
        -ms-transform: rotateZ(3.75deg);
        -webkit-transform: rotateZ(3.75deg);
    }
    90% {
        transform: rotateZ(-3.33333deg);
        -ms-transform: rotateZ(-3.33333deg);
        -webkit-transform: rotateZ(-3.33333deg);
    }
    100% {
        transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
    }
}

@-webkit-keyframes shake {
    0% {
        transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
    }
    10% {
        transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        -webkit-transform: rotateZ(-30deg);
    }
    20% {
        transform: rotateZ(15deg);
        -ms-transform: rotateZ(15deg);
        -webkit-transform: rotateZ(15deg);
    }
    30% {
        transform: rotateZ(-10deg);
        -ms-transform: rotateZ(-10deg);
        -webkit-transform: rotateZ(-10deg);
    }
    40% {
        transform: rotateZ(7.5deg);
        -ms-transform: rotateZ(7.5deg);
        -webkit-transform: rotateZ(7.5deg);
    }
    50% {
        transform: rotateZ(-6deg);
        -ms-transform: rotateZ(-6deg);
        -webkit-transform: rotateZ(-6deg);
    }
    60% {
        transform: rotateZ(5deg);
        -ms-transform: rotateZ(5deg);
        -webkit-transform: rotateZ(5deg);
    }
    70% {
        transform: rotateZ(-4.28571deg);
        -ms-transform: rotateZ(-4.28571deg);
        -webkit-transform: rotateZ(-4.28571deg);
    }
    80% {
        transform: rotateZ(3.75deg);
        -ms-transform: rotateZ(3.75deg);
        -webkit-transform: rotateZ(3.75deg);
    }
    90% {
        transform: rotateZ(-3.33333deg);
        -ms-transform: rotateZ(-3.33333deg);
        -webkit-transform: rotateZ(-3.33333deg);
    }
    100% {
        transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
    }
}
/*!* конец кнопки звонка *!*/
</style>
