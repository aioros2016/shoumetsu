<template>
	<div id="top">
		<ViewBg></ViewBg>
		<ViewHeader></ViewHeader>
		<keep-alive>
        	<router-view class="router-view"></router-view>
		</keep-alive>
		<ViewNew></ViewNew>
		<ViewFooter></ViewFooter>
		<ViewSwiperCharacter></ViewSwiperCharacter>
		<ViewSwiperTamashii></ViewSwiperTamashii>
		<ViewMask></ViewMask>
		<div class="tip-box" v-show="tip.showWx"><img src="../assets/images/tip_wx.jpg" /></div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import ViewBg from './Bg.vue'
	import ViewHeader from './Header.vue'
	import ViewHome from './Home.vue'
	import ViewNew from './New.vue'
	import ViewFooter from './Footer.vue'
	import ViewMask from './Mask.vue'
	import ViewSwiperCharacter from './SwiperCharacter.vue'
	import ViewSwiperTamashii from './SwiperTamashii.vue'

	export default {
		components:{
			ViewBg,
			ViewHeader,
			ViewHome,
			ViewNew,
			ViewFooter,
			ViewMask,
			ViewSwiperCharacter,
			ViewSwiperTamashii
		},
		computed: mapGetters(['tip'])
	}
</script>
