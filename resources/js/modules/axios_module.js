import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};

//axios.defaults.timeout = TIMEOUT;
export default axios;
