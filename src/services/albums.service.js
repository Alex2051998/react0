import {axiosService} from "./axios.service";
import {urls} from "../constans/urls";

const albumsService = {
    getAll:() => axiosService.get(urls.albums)
}

export {
    albumsService
}