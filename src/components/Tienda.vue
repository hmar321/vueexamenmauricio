<template>
    <div>
        <form v-on:submit.prevent="realizarPedido()">
            <div class="mb-3" style="width: 400px;">
                <label class="form-label">Cubo</label>
                <select class="form-select" v-model="idcubo">
                    <option value="{{cubo.idCubo}}" v-for=" cubo of cubos" :key="cubo">{{ cubo.marca }} {{ cubo.nombre }}</option>
                </select>
            </div>
            <button class="btn btn-success" >Realizar pedido</button>
        </form>
    </div>
</template>
<script>
import { CuboService } from '@/services/CuboService';
import { CompraService } from '@/services/CompraService';
const cuboSer = new CuboService();
const comSer = new CompraService();
export default {
    name: "TiendaComponent",
    data() {
        return {
            idcubo: "",
            cubos: []
        }
    },
    mounted() {
        cuboSer.getCubos().then((res) => {
            this.cubos = res.data;
        });
    }, methods: {
        realizarPedido() {
            var aux = parseInt(this.idcubo);
            comSer.insertarPedido(aux).then(() => {
                this.$router.navigate('/compras');
            });
        }
    },
};
</script>
  