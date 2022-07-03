import {axiosService} from "./Axios.service";

const userService = {
    pushUser:(user)=>axiosService.post(`/users`, user),
}

export {
    userService
}