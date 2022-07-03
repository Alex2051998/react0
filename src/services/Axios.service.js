import axios from "axios";

const baseURL = 'http://jsonplaceholder.typicode.com';

const axiosService = axios.create({baseURL});

export {
    axiosService
}