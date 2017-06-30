<template>
	<div class="registered">
		<ViewBg></ViewBg>
		<ViewTopBar></ViewTopBar>
		<ViewContent></ViewContent>
		<ViewFooter></ViewFooter>
	</div>
</template>

<script>
	import ViewBg from './Bg.vue'
	import ViewTopBar from './TopBar.vue'
	import ViewContent from './Content.vue'
	import ViewFooter from './Footer.vue'

	export default {
		components:{
			ViewBg,
			ViewTopBar,
			ViewContent,
			ViewFooter
		}
	}
</script>
