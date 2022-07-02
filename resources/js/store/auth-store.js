import axios from "../modules/axios_module";
const SUCCESS = 302

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
        let resp;
        return await axios.post('/login', payload)
            .then(({data}) =>{
                resp = {
                    result: true,
                    message: 'authSuccess',
                }
                return resp
            }).catch(err =>{
                resp = {
                    result: false,
                    message: 'singIngError',
                }
                return resp
            })
    },
    registerAsync: async ({commit}, payload) => {
        let resp;
        return await axios.post('/register', payload)
            .then(({data}) =>{
                resp = {
                    result: true,
                    message: 'authSuccess',
                }
                return resp
            }).catch(err =>{
                resp = {
                    result: false,
                    message: 'regError',
                }
                return resp
            })
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
    getUserAsync: async ({commit}) => {
        axios.post('api/user').then((data) => {
            localStorage.setItem('x_xsrf_token',data.config.headers['X-XSRF-TOKEN'])
            commit('setCurrentUser', {
                email:data.data.email,
                name:data.data.name,
                role:data.data.role,
            });
        }).catch(err => {});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
