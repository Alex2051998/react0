const {axiosService} = require("./axios.service");
const {urls, ApiKey} = require("../constans");

const moviService = {
    getAll:()=>axiosService.get(urls.movies, {'headers': { 'Authorization': ApiKey }}),
    getByMoviId: (id) =>axiosService.get(`${urls.moviesById}/${id}`, {'headers': { 'Authorization': ApiKey }})
}

export {
    moviService
};
