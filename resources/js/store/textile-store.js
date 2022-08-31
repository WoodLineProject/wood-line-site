import axios from "../modules/axios_module";

const state = {
    textiles: [],
    types: [],
    maker: [],
    color: [],
    textilesAndPhoto: [],
    textileById: [],
    photoById: [],
};

const getters = {
    textiles: state => {
        return state.textiles
    },
    types: state => {
        return state.types
    },
    maker: state => {
        return state.maker
    },
    color: state => {
        return state.color
    },
    textilesAndPhoto: state => {
        return state.textilesAndPhoto
    },
    textileById: state => {
        return state.textileById
    },
    photoById: state => {
        return state.photoById
    },
};

const mutations = {
    setTextiles: (state, payload) => {
        state.textiles = payload;
    },
    setTypes: (state, payload) => {
        state.types = payload;
    },
    setMaker: (state, payload) => {
        state.maker = payload;
    },
    setColor: (state, payload) => {
        state.color = payload;
    },
    setTextilesAndPhoto: (state, payload) => {
        state.textilesAndPhoto = payload;
    },
    setTextileById: (state, payload) => {
        state.textileById = payload;
    },
    setPhotoById: (state, payload) => {
        state.photoById = payload;
    },
};

const actions = {
    getTextilesAsync: async ({commit}) => {
        return await axios.post('/get-textiles')
            .then(({data}) => {
                commit('setTextiles', data.data);
            })
            .catch(errorResponse => {
                commit('setTextiles', []);
            });
    },
    getTypesAsync: async ({commit}) => {
        return await axios.post('/get-textile-types')
            .then(({data}) => {
                commit('setTypes', data.data);
            })
            .catch(errorResponse => {
                commit('setTypes', []);
            });
    },
    getMakerAsync: async ({commit}) => {
        return await axios.post('/get-textile-makers')
            .then(({data}) => {
                commit('setMaker', data.data);
            })
            .catch(errorResponse => {
                commit('setMaker', []);
            });
    },
    getColorAsync: async ({commit}) => {
        return await axios.post('/get-textile-colors')
            .then(({data}) => {
                commit('setColor', data.data);
            })
            .catch(errorResponse => {
                commit('setColor', []);
            });
    },
    getTextilesAndPhotoAsync: async ({commit}) => {
        return await axios.post('/get-textiles-and-photo')
            .then(({data}) => {
                commit('setTextilesAndPhoto', data.data);
            })
            .catch(errorResponse => {
                commit('setTextilesAndPhoto', []);
            });
    },
    getTextileByIdAsync: async ({commit}, payload) => {
        return await axios.post('/get-textile-by-id', payload)
            .then(({data}) => {
                commit('setTextileById', data.data);
            })
            .catch(errorResponse => {
                commit('setTextileById', []);
            });
    },
    getPhotoByIdAsync: async ({commit}, payload) => {
        return await axios.post('/get-textile-photo-by-id-user', payload)
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
