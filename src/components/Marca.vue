<template>
   <div class="d-flex flex-wrap">
    <CuboComponent v-for="cubo of cubos" :key="cubo" [cubo]="cubo"/>
</div>
</template>
<script>
import CuboComponent from './Cubo.vue';
import { CuboService } from '@/services/CuboService';
const service = new CuboService();
export default {
    name: "MarcaComponent",
    components: {
        CuboComponent
    },
    data() {
        return {
            cubos: [],
            marca: "",
        }
    },
    mounted() {
        var params = this.$route.params;
        var aux = params["marca"];
        if (aux != null) {
            this.marca = aux;
        }
        service.getCubosMarca(this.marca).then((res) => {
            this.cubos = res.data;
        });
    },
};
</script>
  