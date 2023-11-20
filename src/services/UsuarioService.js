import Global from "@/Global";
import axios from "axios";

export class UsuarioService {

    getToken(usuario) {
        var request = "api/manage/login";
        var url = Global.urlApiCubos + request;
        return axios.post(url, usuario);
    }

    insertarPerfil(usuario) {
        var request = "api/manage/registrousuario";
        var url = Global.urlApiCubos + request;
        return axios.post(url, usuario);
    }

    getPerfilUsuario() {
        var request = "api/manage/perfilusuario";
        var token = localStorage.getItem('token');
        var header = { headers: { 'Authorization': 'bearer ' + token } };
        var url = Global.urlApiCubos + request;
        return axios.get(url, header);
    }
}