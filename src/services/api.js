/**
 *  Base URL: https://api.themoviedb.org/3/
 */

/**
 *  API URL: movie/now_playing?api_key=b50ee01c8091ecddec4d2f9d051d706e&language=pt-BR
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export const api_key = 'b50ee01c8091ecddec4d2f9d051d706e';

export default api;
