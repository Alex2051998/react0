import {axiosService} from "./Axios.service";

const postService = {
    pushPost:(post)=>axiosService.post(`/posts`, post),
}

export {
    postService
}