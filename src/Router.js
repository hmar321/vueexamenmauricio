import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';

var routes = [
    { path: "/", component: HomeComponent },
];

var router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;