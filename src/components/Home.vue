<template>
    <div>
        <h1>Home Component</h1>
    </div>
</template>
<script>
import { CuboService } from '@/services/CuboService';
const service = new CuboService();
export default {
    name: "HomeComponent",
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