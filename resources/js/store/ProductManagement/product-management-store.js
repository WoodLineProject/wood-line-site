import axios from "../../modules/axios_module";

const state = {
    photo: [],
};
const getters = {
    photo: state => {
        return state.photo
    },
};
const mutations = {
    setPhoto: (state, payload) => {
        state.photo = payload;
    },
};
const actions = {
    addTypeAsync: async ({commit},payload) => {
        return await axios.post('/add-product-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-product-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteTypeAsync: async ({commit},payload) => {
        return await axios.post('/delete-product-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    //---------------------------------layout
    addLayoutTypeAsync: async ({commit},payload) => {
        return await axios.post('/add-layout-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editLayoutTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-layout-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteLayoutTypeAsync: async ({commit},payload) => {
        return await axios.post('/delete-layout-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    //---------------------------------age
    addAgeTypeAsync: async ({commit},payload) => {
        return await axios.post('/add-age-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editAgeTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-age-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteAgeTypeAsync: async ({commit},payload) => {
        return await axios.post('/delete-age-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    //---------------------------- product item
    addProductItemAsync: async ({commit},payload) => {
        return await axios.post('/add-product-item', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editProductItemAsync: async ({commit},payload) => {
        return await axios.post('/edit-product-item', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteProductItemAsync: async ({commit},payload) => {
        return await axios.post('/delete-product-item', payload)
            .then(({data}) => {
                return data.status
            })
    },
    getPhotoAsync: async ({commit},payload) => {
        return await axios.post('/get-photo-by-id', payload)
            .then(({data}) => {
                commit('setPhoto', data.data);
            })
            .catch(errorResponse => {
                commit('setPhoto', []);
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
