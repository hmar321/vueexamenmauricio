import Global from "@/Global";
import axios from "axios";
export class CuboService{
    getCubos() {
        var request = "api/cubos";
        var url = Global.urlApiCubos+request;
        return axios.get(url);
    }
    getMarcas() {
        var request = "api/cubos/marcas";
        var url = Global.urlApiCubos+request;
        return axios.get(url);
    }
    getCubosMarca(marca) {
        var request = "api/cubos/cubosmarca/" + marca;
        var url = Global.urlApiCubos+request;
        return axios.get(url);
    }
    findComentariosByIdCubo(id){
        var request = "api/comentarioscubo/getcomentarioscubo/" + id;
        var url = Global.urlApiCubos+request;
        return axios.get(url);
    }
    findCuboById(id){
        var request = "api/cubos/" + id;
        var url = Global.urlApiCubos+request;
        return axios.get(url);
    }
}