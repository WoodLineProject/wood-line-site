import axios from '../../modules/axios_module';

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
    }
};
const actions = {
    addTextileItemAsync: async ({commit},payload) => {
        return await axios.post('/add-textile-item', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editTextileItemAsync: async ({commit},payload) => {
        return await axios.post('/edit-textile-item', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteTextileItemAsync: async ({commit},payload) => {
        return await axios.post('/delete-textile-item', payload)
            .then(({data}) => {
                return data.status
            })
    },

    addTypeAsync: async ({commit}, payload) => {
        return await axios.post('/add-textile-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-textile-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteTypeAsync: async ({commit},payload) => {
        return await axios.post('/delete-textile-type', payload)
            .then(({data}) => {
                return data.status
            })
    },

    addMakerTypeAsync: async ({commit}, payload) => {
        return await axios.post('/add-maker-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editMakerTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-maker-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteMakerTypeAsync: async ({commit},payload) => {
        return await axios.post('/delete-maker-type', payload)
            .then(({data}) => {
                return data.status
            })
    },

    addColorTypeAsync: async ({commit}, payload) => {
        return await axios.post('/add-color-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editColorTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-color-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteColorTypeAsync: async ({commit},payload) => {
        return await axios.post('/delete-color-type', payload)
            .then(({data}) => {
                return data.status
            })
    },

    getPhotoAsync: async ({commit},payload) => {
        return await axios.post('/get-textile-photo-by-id', payload)
            .then(({data}) => {
                commit('setPhoto', data.data);
            })
            .catch(errorResponse => {
                commit('setPhoto', []);
            });
    },
    deletePhotoAsync: async ({commit},payload) => {
        return await axios.post('/delete-photo', payload)
            .then(({data}) => {
                return data.status
            })
    },
    uploadPhotoAsync: async ({commit},payload) => {
        return await axios.post('/upload-photo-textile', payload)
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
