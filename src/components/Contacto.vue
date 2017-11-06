<template>
	<div>

		<h1>Contacto</h1>

		<h2>manejo de stack historico con $router</h2>
		<button @click="volverHome">Volver al home</button>
	</div>

</template>

<script>
	export default {
		created(){
			setTimeout(()=>this.$router.push('/'),3000)
		},
		methods: {
			volverHome(){
				this.$router.push('/', () => console.log('ruta cambiada')) //home
			}
		}
		
	}
</script>

<style>
	
	
</style>