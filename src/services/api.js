import axios from 'axios';

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;

//https://viacep.com.br/ws/  01310930/json/
//url que nunca muda            isso é uma rota