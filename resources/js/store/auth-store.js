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
                axios.post('api/user').then((data) => {
                    localStorage.setItem('x_xsrf_token',data.config.headers['X-XSRF-TOKEN'])
                })
                this.$alertify.success('success')
                this.$router.push({path: '/'});
            })
            .catch(err => {
            });
    },
    registerAsync: async ({commit}, payload) => {
        return await axios.post('/register', payload)
            .then(({data}) => {
                axios.post('api/user').then((data) => {
                    localStorage.setItem('x_xsrf_token',data.config.headers['X-XSRF-TOKEN'])
                })
                this.$router.push({path: '/'});
            })
            .catch(errorResponse => {

            });
    },
    logoutAsync: async () => {
        return await axios.post('/logout').then(() =>{
            localStorage.removeItem('x_xsrf_token');
            //this.$router.push({path: '/'});
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
