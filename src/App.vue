<template>
  <div id="app">
    <h1>vistas con vue router</h1>
    <hr>

    <router-link to="/">Home</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <router-link to="/portada">Portada</router-link>


    <router-view></router-view>


  </div>
</template>

<script>
  import Portada from './components/Portada.vue'
  import Contacto from './components/Contacto.vue'
export default {
  components: {Portada, Contacto},
  name: 'app'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
