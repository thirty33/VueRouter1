<template>
	<h2>{{ id }}</h2>
</template>


<script>
	export default {
		data(){
			return {
				// no confundir router con route
				id: this.$route.params.id
			}
		}
	}
</script>

<style>
	
</style>