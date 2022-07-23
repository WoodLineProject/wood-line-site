import axios from "../modules/axios_module";

const state = {
    types: [],
    layout: [],
    age: [],
    products: [],
};

const getters = {
    types: state => {
        return state.types
    },
    layout: state => {
        return state.layout
    },
    age: state => {
        return state.age
    },
    products: state => {
        return state.products
    },
};

const mutations = {
    setTypes: (state, payload) => {
        state.types = payload;
    },
    setLayout: (state, payload) => {
        state.layout = payload;
    },
    setAge: (state, payload) => {
        state.age = payload;
    },
    setProducts: (state, payload) => {
        state.products = payload;
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
    getLayoutAsync: async ({commit}) => {
        return await axios.post('/get-layout-types')
            .then(({data}) => {
                commit('setLayout', data.data);
            })
            .catch(errorResponse => {
                commit('setLayout', []);
            });
    },
    getAgeAsync: async ({commit}) => {
        return await axios.post('/get-age-types')
            .then(({data}) => {
                commit('setAge', data.data);
            })
            .catch(errorResponse => {
                commit('setAge', []);
            });
    },
    getProductsAsync: async ({commit}) => {
        return await axios.post('/get-products')
            .then(({data}) => {
                commit('setProducts', data.data);
            })
            .catch(errorResponse => {
                commit('setProducts', []);
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
