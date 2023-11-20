<template>
    <div>
        <h1>Perfil</h1>
        <ul>
            <li>Usuario: {{ usuario.nombre }}</li>
            <li>Email: {{ usuario.email }}</li>
            <li><router-link to="/compras" class="btn btn-info">Mostrar mis compras</router-link></li>
        </ul>
    </div>
</template>
<script>
import { UsuarioService } from '@/services/UsuarioService';
const service = new UsuarioService();
export default {
    name: "PerfilComponent",
    data() {
        return {
            usuario: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            }
        }
    },
    mounted() {
        service.getPerfilUsuario().then((res) => {
            this.usuario = res.data;
        });
    },
};
</script>
  