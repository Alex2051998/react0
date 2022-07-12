import {axiosService} from "./axios.service";
import {urls} from "../constans/urls";

const postsService = {
    getById:(postId) => axiosService.get(`${urls.posts}/${postId}`)
}

export {
    postsService
}