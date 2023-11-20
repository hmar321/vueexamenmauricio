<template>
    <div>
        <form v-on:submit.prevent="registrarUsuario()">
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Nombre</label>
                <input type="text" v-model="perfil.nombre" class="form-control">
            </div>
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Email</label>
                <input type="text" v-model="perfil.email" class="form-control">
            </div>
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Contraseña</label>
                <input type="text" v-model="perfil.pass" class="form-control">
            </div>
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Contraseña</label>
                <input type="text" v-model="passverificar" class="form-control">
            </div>
            <button class="btn btn-success">Crear</button>
        </form>
    </div>
</template>
<script>
import { UsuarioService } from '@/services/UsuarioService';
const service=new UsuarioService();
export default {
    name: "RegistroComponent",
    data() {
        return {
            perfil: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            },
            passverificar: ""
        }
    },
    methods: {
        registrarUsuario() {
            if (this.passverificar != this.perfil.pass) {
                alert("La contraseña no es la misma");
                return;
            }
            service.insertarPerfil(this.perfil).then(() => {
                var login = { email: this.perfil.email, password: this.perfil.pass };
                service.getToken(login).then((res) => {
                    localStorage.setItem('token', res.data.response);
                    this.$router.push('/login');
                });
            });
        }
    },
};
</script>
  