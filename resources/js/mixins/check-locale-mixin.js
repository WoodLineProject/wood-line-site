import {RUS, UKR} from "../constants/locale";
import i18n from "../plugins/i18n";

export const CheckLocaleMixin = {
    computed:{
        isUkrLocale(){
            return i18n.locale === UKR
        }
    },
}
