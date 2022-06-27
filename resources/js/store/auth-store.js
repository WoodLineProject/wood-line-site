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
    loginAsync: async ({commit}, payload) => {
        return await axios.post('/login', payload)
            .then(({data}) => {
                console.log(data)
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
