<template>
	<div>
		<router-view class="router-view"></router-view>
		<ViewMask></ViewMask>
		<ViewModel></ViewModel>
		<ViewVideo></ViewVideo>
		<ViewAudio></ViewAudio>
	</div>
</template>
<script>
	import ViewMask from './components/Mask.vue'
	import ViewModel from './components/Model.vue'
	import ViewAudio from './components/Audio.vue'
	import ViewVideo from './components/Video.vue'
	export default {
		components:{
			ViewMask,
			ViewModel,
			ViewAudio,
			ViewVideo
		}
	}
</script>