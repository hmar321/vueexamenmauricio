import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/Home.vue';
import LoginComponent from './components/Login.vue';
import RegistroComponent from './components/Registro.vue';
import LogoutComponent from './components/Logout.vue';
import PerfilComponent from './components/Perfil.vue';
import ComprasComponent from './components/Compras.vue';
import TiendaComponent from './components/Tienda.vue';
import MarcaComponent from './components/Marca.vue';
import DetallesCuboComponent from './components/DetallesCubo.vue';


var routes = [
    { path: "/", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/registro", component: RegistroComponent },
    { path: "/logout", component: LogoutComponent },
    { path: "/perfil", component: PerfilComponent },
    { path: "/compras", component: ComprasComponent },
    { path: "/tienda", component: TiendaComponent },
    { path: "/marca/:marca", component: MarcaComponent },
    { path: "/detallescubo/:idcubo", component: DetallesCuboComponent },
];

var router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;