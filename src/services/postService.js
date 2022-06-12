import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const postService ={
    getAll:() => axiosService.get(urls.posts),
    getPostById:(id) => axiosService.get(`${urls.posts}?userId=${id}`)
}

export {
    postService
}