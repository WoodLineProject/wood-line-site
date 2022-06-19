import {RUS} from "../../../../constants/locale";
import { i18n } from "../../../../plugins/i18n";
const state = {
    currentLocale: RUS,
};

const getters = {
    currentLocale: (state) => {
        return state.currentLocale;
    },
};

const mutations = {
    setCurrentLocale: (state, payload) => {
        state.currentLocale = payload;
    },
};

const actions = {
    changeCurrentLocale: ({commit}, payload) => {
        i18n.global.locale.value = payload
        return commit('setCurrentLocale', payload)
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
