import Global from "@/Global";
import axios from "axios";
export class CompraService {
    getCompras() {
        var request = "api/compra/comprasusuario";
        var token = localStorage.getItem('token');
        var header = { headers: { 'Authorization': 'bearer ' + token } };
        var url = Global.urlApiCubos + request;
        return axios.get(url, header);
    }
    insertarPedido(id) {
        var request = "api/compra/insertarpedido/" + id;
        var token = localStorage.getItem('token');
        var header = { headers: { 'Authorization': 'bearer ' + token } };
        var url = Global.urlApiCubos + request;
        return axios.post(url, {}, header);
    }
}