<template>
	<div class="tamashii" id="main">
		<div class="avatar item-list" id="avatar">
			<ul>
				<li v-for="(item, index) in character" @click="tamashiiSwiper(index)">
					<a href="javascript:;">
						<img :src="item.avatar" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data(){
			return {
				showView: false,
				character: [{
					"avatar": require("../assets/images/tamashii/Tamasii_33.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_01.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_02.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_03.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_04.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_05.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_06.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_07.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_08.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_09.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_10.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_11.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_12.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_13.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_14.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_15.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_16.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_17.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_18.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_19.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_20.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_21.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_22.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_23.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_24.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_25.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_26.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_27.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_28.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_29.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_30.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_31.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_32.png")
				},
				{
					"avatar": require("../assets/images/tamashii/Tamasii_34.png")
				}]
			}
		},
		methods: mapActions(['tamashiiSwiper'])
	}
</script>