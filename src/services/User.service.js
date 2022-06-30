const {axiosService} = require("./Axios.service");

const {urls} = require("../urls/Urls");


const userService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {
    userService
}