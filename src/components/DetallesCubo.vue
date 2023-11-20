<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="{{cubo.imagen}}" class="card-img-top" style="width: 18rem;height: 16rem;">
            <div class="card-body">
                <h5 class="card-title">{{ cubo.marca }} {{ cubo.modelo }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ cubo.nombre }}</h6>
                <h6 class="card-text">COmentarios:</h6>
                <p class="card-text" v-for="comentario in comentarios" :key="comentario">{{ comentario.comentario }}
                    {{ comentario.fechaComentario }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { CuboService } from '@/services/CuboService';
const service = new CuboService();
export default {
    name: "DetallesCuboComponent",
    data() {
        return {
            idcubo: -1,
            comentarios: [],
            cubo: {},
        }
    },
    mounted() {
        var params = this.$route.params;
        var id = parseInt(params['idcubo']);
        if (id != null) {
            this.idcubo = id;
        }
        service.findComentariosByIdCubo(this.idcubo).then(res => {
            this.comentarios = res.data;
        })
        service.findCuboById(this.idcubo).then(res => {
            this.cubo = res.data;
        })
    },
};
</script>
  