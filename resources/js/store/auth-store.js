import axios from "../modules/axios_module";

const state = {
    isShowDrawer: false,
    currentUser :{
        email: '',
        name: '',
        role: ''
    }
};

const getters = {
    isShowDrawer: state => {
        return state.isShowDrawer
    },
    currentUser: state => {
        return state.currentUser
    },
};

const mutations = {
    setIsShowDrawer: (state, payload) => {
        state.isShowDrawer = payload;
    },
    setCurrentUser: (state, payload) => {
        state.currentUser = payload;
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
                    commit('setCurrentUser', {
                        email:data.data.email,
                        name:data.data.name,
                        role:data.data.role,
                    });
                })
               // this.$alertify.success('success')
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
                    commit('setCurrentUser', {
                        email:data.data.email,
                        name:data.data.name,
                        role:data.data.role,
                    });
                })
                this.$router.push({path: '/'});
            })
            .catch(errorResponse => {

            });
    },
    logoutAsync: async ({commit}) => {
        return await axios.post('/logout').then(() =>{
            localStorage.removeItem('x_xsrf_token');
            commit('setCurrentUser', {
                email:'',
                name:'',
                role:'',
            });
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
