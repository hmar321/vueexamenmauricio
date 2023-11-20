<template>
    <div>
        <h1>Sesión cerrada</h1>
    </div>
  </template>
  <script>
  export default {
    name: "LogoutComponent",
    mounted() {
        localStorage.clear();
    },
  };
  </script>
  