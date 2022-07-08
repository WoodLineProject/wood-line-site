import axios from "../../modules/axios_module";

const state = {
    users: [],
    roles: []
};

const getters = {
    users: state => {
        return state.users
    },
    roles: state => {
        return state.roles
    },
};

const mutations = {
    setUsers: (state, payload) => {
        state.users = payload;
    },
    setRoles: (state, payload) => {
        state.roles = payload;
    },
};

const actions = {
    getUsersAsync: async ({commit}) => {
        return await axios.post('/get-users')
            .then(({data}) => {
                commit('setUsers', data.data);
            })
            .catch(errorResponse => {
                commit('setUsers', []);
            });
    },
    getRolesAsync: async ({commit}) => {
        return await axios.post('/get-roles')
            .then(({data}) => {
                commit('setRoles', data.data);
            })
            .catch(errorResponse => {
                commit('setRoles', []);
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
