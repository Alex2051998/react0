const {axiosService} = require("./Axios.service");

const {urls} = require("../urls/Urls");


const postsService = {
    getById:(id)=>axiosService.get(`${urls.users}/${id}${urls.posts}`),
}

export {
    postsService
}