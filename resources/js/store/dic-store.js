import axios from "../modules/axios_module";

const state = {
    types: [],
    layout: [],
    age: [],
    products: [],
    productsAndPhoto: [],
    productById: [],
    photoById: []
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
    productsAndPhoto: state => {
        return state.productsAndPhoto
    },
    productById: state => {
        return state.productById
    },
    photoById: state => {
        return state.photoById
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
    setProductsAndPhoto: (state, payload) => {
        state.productsAndPhoto = payload;
    },
    setProductById: (state, payload) => {
        state.productById = payload;
    },
    setPhotoById: (state, payload) => {
        state.photoById = payload;
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

    getProductsAndPhotoAsync: async ({commit}) => {
        return await axios.post('/get-products-and-photo')
            .then(({data}) => {
                commit('setProductsAndPhoto', data.data);
            })
            .catch(errorResponse => {
                commit('setProductsAndPhoto', []);
            });
    },
    getProductByIdAsync: async ({commit},payload) => {
        return await axios.post('/get-product-by-id',payload)
            .then(({data}) => {
                commit('setProductById', data.data);
            })
            .catch(errorResponse => {
                commit('setProductById', []);
            });
    },
    getPhotoByIdAsync: async ({commit}, payload) => {
        return await axios.post('/get-photo-by-id-user',payload)
            .then(({data}) => {
                commit('setPhotoById', data.data);
            })
            .catch(errorResponse => {
                commit('setPhotoById', []);
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
