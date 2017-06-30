<template>
	<div>
		<audio id="audio" autoplay="autoplay" loop="loop">
			<source src="/dist/assets/audio/lalala.mp4" type="audio/mpeg" />
		</audio>
		<section class="playContainer">
			<li class="pauseBtn" id="ctrlAudio">
				<a href="javascript:;" @click="playToggle">Start</a>
			</li>
		</section>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data () {
			return {
				lockSrc: false,
				videoShow: false,
				maskShow: false
			}
		},
		mounted(){
			this.audioAutoPlay();
		},
		methods: {
			playToggle(){
				this.$store.dispatch('playToggle');
			},
			audioAutoPlay(){
				var audio = document.getElementById('audio');
//				audio.play();
				document.addEventListener("WeixinJSBridgeReady", function(){
					audio.play();
				}, false);
			}
		},
		computed: mapGetters(['audio'])
	}
</script>