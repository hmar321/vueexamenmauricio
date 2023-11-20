<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="{{cubo.imagen}}" class="card-img-top" style="width: 18rem;height: 16rem;">
            <div class="card-body">
                <h5 class="card-title">{{ cubo.marca }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ cubo.modelo }}</h6>
                <p class="card-text">{{ cubo.nombre }}</p>
                <p class="card-text">{{ cubo.precio }} €</p>
                <router-link :to="'/detallescubo/'+cubo.idCubo" class="btn btn-primary">Detalles</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CuboComponent",
    props: ['objcubo'],
    data() {
        return {
            cubo: {},
        }
    },
    mounted() {
        this.cubo = JSON.parse(this.objcubo);
    },
};
</script>
  