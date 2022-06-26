import axios from "../modules/axios_module";
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
    testAxios: async ({commit},payload) => {
        return await axios.post('/register', payload)
            .then(({data}) => {
                //console.log(data)
            })
            .catch(errorResponse => {

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
