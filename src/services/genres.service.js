const {axiosService} = require("./axios.service");
const {urls, ApiKey} = require("../constans");

const genreService = {
    getAll:()=>axiosService.get(urls.genre, {'headers': { 'Authorization': ApiKey }})
}

export {
    genreService
};
