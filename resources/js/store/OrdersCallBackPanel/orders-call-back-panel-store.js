import axios from "../../modules/axios_module";

const state = {
    ordersCallBack: [],
};

const getters = {
    ordersCallBack: state => {
        return state.ordersCallBack
    },
};

const mutations = {
    setOrdersCallBack: (state, payload) => {
        state.ordersCallBack = payload;
    },
};

const actions = {
    getOrdersCallBackAsync: async ({commit}) => {
        return await axios.post('/get-orders-call-back')
            .then(({data}) => {
                commit('setOrdersCallBack', data.data);
            })
            .catch(errorResponse => {
                commit('setOrdersCallBack', []);
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
