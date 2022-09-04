import axios from "../../modules/axios_module";

const state = {
    CarrouselImage: [],
};

const getters = {
    CarrouselImage: state => {
        return state.CarrouselImage
    },
};

const mutations = {
    SetCarrouselImage: (state, payload) => {
        state.CarrouselImage = payload;
    },
};

const actions = {
    getAllCarrouselImageAsync: async ({commit}) => {
        return await axios.post('/get-all-carrousel-image')
            .then(({data}) => {
                commit('SetCarrouselImage', data.data.result);
            })
            .catch(errorResponse => {
                commit('SetCarrouselImage', []);
            });
    },
    uploadImageAsync: async ({commit},payload) => {
        return await axios.post('/upload-carrousel-image', payload)
            .then(({data}) => {
                return data.status
            })
    },
    deleteImageAsync: async ({commit},payload) => {
        return await axios.post('/delete-carrousel-image', payload)
            .then(({data}) => {
                return data.status
            })
    },
    changePositionAsync: async ({commit},payload) => {
        return await axios.post('/change-position-carrousel-image', payload)
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
