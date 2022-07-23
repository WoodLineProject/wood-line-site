import axios from "../../modules/axios_module";

const state = {};
const getters = {};
const mutations = {};
const actions = {
    addTypeAsync: async ({commit},payload) => {
        return await axios.post('/add-product-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
    editTypeAsync: async ({commit},payload) => {
        return await axios.post('/edit-product-type', payload)
            .then(({data}) => {
                return data.status
            })
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
