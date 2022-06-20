
const state = {
    isShowDrawer: false
};

const getters = {
    isShowDrawer: state => {
        return state.isShowDrawer
    },
};

const mutations = {
    setIsShowDrawer: (state, payload) => {
        state.isShowDrawer = payload;
    },

};

const actions = {
    changeIsShowDrawer: ({commit,state}) => {
        commit('setIsShowDrawer', !state.isShowDrawer);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
