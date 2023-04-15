import axios from "axios";



const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '96b1936b39533cd9542a6bf2c841f4c7'
    }
})

export const fetchTrending = () => instance.get(`/trending/movie/day`);

export const fetchByID = (id) => instance.get(`/movie/${id}`);