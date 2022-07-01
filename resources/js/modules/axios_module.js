import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
};

//axios.defaults.timeout = TIMEOUT;
export default axios;
