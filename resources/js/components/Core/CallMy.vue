<script>
import {CallMyMixin} from "../../mixins/call-my-mixin";
import {mapActions} from "vuex";
import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6Lfy_OogAAAAAN9UqPizPZMJoq8HM8fvzdZaXWlD" });

export default {
    name: "CallMy",
    data () {
        return {
            show: false,
            name: '',
            patronymic: '',
            phone: '+380',
            isSuccess: false,
        }
    },
    mixins:[CallMyMixin],
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
            this.$swal.showLoading();
            this.$recaptcha("login").then((token) => {
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
            <div class="text-call">
                <i class="fa fa-phone"></i>
                <span>{{$t(`app.order`)}}<br>{{$t(`app.call`)}}</span>
            </div>
        </div>

        <v-dialog
            v-model="dialog"
            max-width="290"
        >
            <v-card>
                <v-card-title class="text-h5">
                    {{$t(`app.callMy`)}}
                </v-card-title>

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
    background:#38a3fd;
    border:2px solid #38a3fd;
    border-radius:50%;
    box-shadow:0 8px 10px rgba(56,163,253,0.3);
    cursor:pointer;
    height:68px;
    text-align:center;
    width:68px;
    position: fixed;
    right: 8%;
    bottom: 18%;
    z-index:999;
    transition:.3s;
    -webkit-animation:hoverWave linear 1s infinite;
    animation:hoverWave linear 1s infinite;
}

.callback-bt .text-call{
    height:68px;
    width:68px;
    border-radius:50%;
    position:relative;
    overflow:hidden;
}

.callback-bt .text-call span {
    text-align: center;
    color:#38a3fd;
    opacity: 0;
    font-size: 0;
    position:absolute;
    right: 4px;
    top: 22px;
    line-height: 14px;
    font-weight: 600;
    text-transform: uppercase;
    transition: opacity .3s linear;
    font-family: 'montserrat', Arial, Helvetica, sans-serif;
}

.callback-bt .text-call:hover span {
    opacity: 1;
    font-size: 11px;
}
.callback-bt:hover i {
    display:none;
}

.callback-bt:hover {
    z-index:1;
    background:#fff;
    color:transparent;
    transition:.3s;
}
.callback-bt:hover i {
    color:#38a3fd;
    font-size:40px;
    transition:.3s;
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
/* конец кнопки звонка */
</style>
