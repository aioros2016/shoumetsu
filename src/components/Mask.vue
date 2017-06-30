<template>
	<div>
		<div class="mask" v-show="mask.showMask" @click="hideMask"></div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: mapGetters(['mask']),
		methods: mapActions(['hideMask'])
	}
</script>