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
    getCsrfTokenAsync: async () => {
        return await axios.get('sanctum/csrf-cookie');
    },
    loginAsync: async ({commit}, payload) => {
        return await axios.post('/login', payload)
            .then(({data}) => {

            })
            .catch(errorResponse => {

            });
    },
    registerAsync: async ({commit}, payload) => {
        return await axios.post('/register', payload)
            .then(({data}) => {

            })
            .catch(errorResponse => {

            });
    },
    logoutAsync: async () => {
        return await axios.post('/logout').then(() =>{
            this.$router.push({name: 'home'});
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
