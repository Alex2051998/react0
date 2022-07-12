import {axiosService} from "./axios.service";
import {urls} from "../constans/urls";

const todosService = {
    getAll:() => axiosService.get(urls.todos)
}

export {
    todosService
}