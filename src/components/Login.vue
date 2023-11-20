<template>
    <div>
        <form v-on:submit.prevent="logearUsuario()" v-if="!loged">
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Email</label>
                <input type="text" name="cajausuario" v-model="usuario.email" class="form-control">
            </div>
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Contraseña</label>
                <input type="text" name="cajapassword" v-model="usuario.password" class="form-control">
            </div>
            <button class="btn btn-success">Login</button>
        </form>
        <div v-if="loged">
            <router-link to="/perfil" class="btn btn-success">Perfil</router-link>
            <router-link to="/compras" class="btn btn-info">Compras</router-link>
            <router-link to="/tienda" class="btn btn-primary">Comprar</router-link>
        </div>
    </div>
</template>
<script>
import { UsuarioService } from '@/services/UsuarioService';
const service = new UsuarioService();
export default {
    name: "LoginComponent",
    data() {
        return {
            usuario: {
                email: "",
                password: "",
            },
            loged: false
        }
    },
    methods: {
        actualizarSesion() {
            if (localStorage.getItem('token') != null) {
                this.loged = true;
            } else {
                this.loged = false;
            }
        },
        logearUsuario() {
            service.getToken(this.usuario).then((res) => {
                var token = res.data.response;
                localStorage.setItem("token", token);
                this.actualizarSesion();
            })
        }
    },
};
</script>
  