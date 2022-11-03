import axios from "axios";

const api = axios.create({
    //baseURL:"http://44.209.44.203:8080/"
    baseURL:"http://localhost:8080/"
})

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.patch['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

export default api;
