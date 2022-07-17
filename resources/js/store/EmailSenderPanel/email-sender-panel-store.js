import axios from "../../modules/axios_module";

const state = {
    simpleUsers: [],
};

const getters = {
    simpleUsers: state => {
        return state.simpleUsers;
    }
};

const mutations = {
    setSimpleUsers: (state, payload) => {
        state.simpleUsers = payload;
    },
};

const actions = {
    getSimpleUsersAsync: async ({commit}) => {
        return await axios.post('/get-simple-users')
            .then(({data}) => {
                commit('setSimpleUsers', data.data);
            })
            .catch(errorResponse => {
                commit('setSimpleUsers', []);
            });
    },
    sendMailToSimpleUsersAsync: async ({commit}, payload) => {
        return await axios.post('/send-mail-to-simple-users', payload)
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
