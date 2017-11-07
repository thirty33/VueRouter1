<template>
	<section>
		
		<h1>Home</h1>

		<!-- <router-link :to="'/equipo/' + id ">Equipo</router-link> -->


		<!-- named routes -->
		<router-link :to="{name: 'equipo', params: {id: id}}">Equipo</router-link>
	</section>

</template>


<script>
	export default {
		data(){
			return {
				id: 'joel'
			}
		}
	}
</script>