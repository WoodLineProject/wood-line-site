import axios from "../../modules/axios_module";

const state = {
    types: [],
};

const getters = {
    types: state => {
        return state.types
    },
};

const mutations = {
    setTypes: (state, payload) => {
        state.types = payload;
    },
};

const actions = {
    getTypesAsync: async ({commit}) => {
        return await axios.post('/get-product-types')
            .then(({data}) => {
                commit('setTypes', data.data);
            })
            .catch(errorResponse => {
                commit('setTypes', []);
            });
    },
    makeCompleteAsync: async ({commit},payload) => {
        return await axios.post('/orders-call-back-make-complete', payload)
            .then(({data}) => {
                return data.status
            })
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
