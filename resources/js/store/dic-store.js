import axios from "../modules/axios_module";

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
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
