<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Cubos</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li v-for="marca of marcas" :key="marca">
                                    <router-link class="dropdown-item" :to="'/marca/'+marca">{{ marca }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Seguridad
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link class="dropdown-item" to="/login">Login</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/registro">Registro</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/logout">Log out</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { CuboService } from '@/services/CuboService';
const service = new CuboService();
export default {
    name: "MenuComponent",
    data() {
        return {
            marcas: [],
        }
    },
    mounted() {
        service.getMarcas().then(res => {
            this.marcas = res.data;
        })
    },
}
</script>
<style></style>