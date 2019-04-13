import axios from 'axios'

const api = axios.create({
    baseURL: 'https://electro-omnistack-backend.herokuapp.com',
});

export default api;