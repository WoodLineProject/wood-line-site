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
        return await axios.post('/test2', payload)
            .then(({data}) => {
                //console.log(data)
            })
            .catch(errorResponse => {

            });
    },
    user: async ({commit},payload) => {
        return await axios.post('/test3', payload)
            .then(({data}) => {
                //console.log(data)
            })
            .catch(errorResponse => {

            });
    },
    admin: async ({commit},payload) => {
        return await axios.post('/test4', payload)
            .then(({data}) => {
                //console.log(data)
            })
            .catch(errorResponse => {

            });
    },
    owner: async ({commit},payload) => {
        return await axios.post('/test5', payload)
            .then(({data}) => {
                //console.log(data)
            })
            .catch(errorResponse => {

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
