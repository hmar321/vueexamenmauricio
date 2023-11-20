<template>
    <div>
        <div class="card" style="width: 18rem;" *ngFor="let compra of compras">
            <div class="card-body">
                <h5 class="card-title">Clave Pedido: {{ compra.idPedido }}</h5>
                <p class="card-text">Ustedo ordeno el cubo con id {{ compra.idCubo }}</p>
                <p class="card-text">En la fecha: {{ compra.fechaPedido }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { CompraService } from '@/services/CompraService';
const service = new CompraService();
export default {
    name: "ComprasComponent",
    data() {
        return {
            compras: [],
        }
    },
    mounted() {
        service.getCompras().then((res) => {
            this.compras = res.data;
        });
    },
};
</script>
