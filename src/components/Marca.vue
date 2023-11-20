<template>
    <div>
        <h1>MarcaComponent</h1>
    </div>
</template>
<script>
import { CuboService } from '@/services/CuboService';
const service = new CuboService();
export default {
    name: "MarcaComponent",
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
  