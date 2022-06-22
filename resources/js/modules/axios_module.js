import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.myToken.csrfToken,
};

/*axios.defaults.timeout = config.modules.axios.timeout;

axios.interceptors.request.use(function(config) {
    store.dispatch('app/setLoading', true);
    store.dispatch('app/clearError');
    return config;
}, function(error) {
    store.dispatch('app/setLoading', false);
    store.dispatch('app/setErrorMessage', error)
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    store.dispatch('app/setLoading', false);
    store.dispatch('app/clearError');
    return response;
}, function(error) {
    store.dispatch('app/setLoading', false);

    if(error.response.status === 403) {
        store.dispatch('forbidden/setShowDialog');
        store.dispatch('forbidden/setRoles', error.response.data.roles);
        store.dispatch('forbidden/setSubSystem', error.response.data.subsystem_id);
    } else {
        error = helper.getErrorTextFromAPI(error);
        store.dispatch('app/setErrorMessage', error)
    }

    return Promise.reject(error);
});*/

export default axios;
