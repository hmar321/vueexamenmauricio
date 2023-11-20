<template>
    <div>
        <div class="d-flex flex-wrap">
            <CuboComponent :cubo="cubo" />
        </div>
    </div>
</template>
<script>
import CuboComponent from './Cubo.vue';
import { CuboService } from '@/services/CuboService';
const service = new CuboService();
export default {
    name: "HomeComponent",
    components: {
        CuboComponent
    },
    data() {
        return {
            cubos: [],
        }
    },
    mounted() {
        service.getCubos().then((res) => {
            this.cubos = res.data;
        })
    },
}
</script>
<style></style>