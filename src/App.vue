<template>
  <div id="app">
    <h1>vistas con vue router</h1>
    <hr>

    <router-link to="/" exact active-class="active" tag="li">
      <a href="">Home</a>
    </router-link>

    <router-link to="/contacto" exact active-class="active" tag="li">
      <a href="">Contacto</a>
    </router-link>

    <router-link to="/portada" exact active-class="active" tag="li">
      <a href="">Portada</a>
    </router-link>

 

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

  /*.router-link-active {
    color:red;
  }*/

  .active a {
    color: red;
  }
</style>
