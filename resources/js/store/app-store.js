import axios from "../modules/axios_module";
const state = {
    isShowDrawer: false,
    carouselImage: [],
};

const getters = {
    isShowDrawer: state => {
        return state.isShowDrawer
    },
    carouselImage: state => {
        return state.carouselImage
    },
};

const mutations = {
    setIsShowDrawer: (state, payload) => {
        state.isShowDrawer = payload;
    },
    setCarouselImage: (state, payload) => {
        state.carouselImage = payload;
    },

};

const actions = {
    changeIsShowDrawer: ({commit,state}) => {
        commit('setIsShowDrawer', !state.isShowDrawer);
    },
    getCarouselImageAsync: async ({commit}) => {
        return await axios.post('/get-carousel-image-public')
            .then(({data}) => {
                commit('setCarouselImage', data.data.result);
            })
            .catch(errorResponse => {
                commit('setCarouselImage', []);
            });
    },
    callMyAsync: async ({commit},payload) => {
        return await axios.post('/call-my', payload)
            .then(({data}) => {
                return data.status
            })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
