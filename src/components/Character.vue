<template>
	<div class="character" id="main">
		<div class="avatar item-list" id="avatar">
			<ul>
				<li v-for="(item, index) in character" @click="characterSwiper(index)">
					<a>
						<img :src="item.avatar" />
						<span>
							<h3>{{item.name}}</h3>
							<p>{{item.cv}}</p>
						</span>
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
				character: [{
					"avatar": require("../assets/images/character/Character_01_yuki.png"),
					"name": "小雪",
					"cv": "CV.花澤香菜"
				},
				{
					"avatar": require("../assets/images/character/Character_03_takuya.png"),
					"name": "拓也",
					"cv": "CV.杉田智和"
				},
				{
					"avatar": require("../assets/images/character/Character_02_yuki_red_half.png"),
					"name": "小雪（失落世界）",
					"cv": "CV.花澤香菜"
				},
				{
					"avatar": require("../assets/images/character/Character_04_souma_young_half.png"),
					"name": "苍真",
					"cv": "CV.朝井彩加"
				},
				{
					"avatar": require("../assets/images/character/Character_05_souma_adult_half.png"),
					"name": "苍真（失落世界）",
					"cv": "CV.入野自由"
				},
				{
					"avatar": require("../assets/images/character/Character_06_akira_half.png"),
					"name": "明",
					"cv": "CV.中村悠一"
				},
				{
					"avatar": require("../assets/images/character/Character_07_johnny_half.png"),
					"name": "尊尼获加",
					"cv": "CV.中村悠一"
				},
				{
					"avatar": require("../assets/images/character/Character_08_chief_half.png"),
					"name": "主任",
					"cv": "CV.安元洋貴"
				},
				{
					"avatar": require("../assets/images/character/Character_09_suzuna_half.png"),
					"name": "铃奈",
					"cv": "CV.佐倉綾音"
				},
				{
					"avatar": require("../assets/images/character/Character_10_kikyo_half.png"),
					"name": "桔梗",
					"cv": "CV.愛美"
				},
				{
					"avatar": require("../assets/images/character/Character_11_taiyo_half.png"),
					"name": "太阳",
					"cv": "CV.高橋英則"
				},
				{
					"avatar": require("../assets/images/character/Character_16_geek_half.png"),
					"name": "极客",
					"cv": "CV.西村太佑"
				},
				{
					"avatar": require("../assets/images/character/Character_17_researcher_half.png"),
					"name": "调查员",
					"cv": "CV.中恵光城"
				},
				{
					"avatar": require("../assets/images/character/Character_12_tuki_half.png"),
					"name": "皎月",
					"cv": "CV.朝井彩加"
				},
				{
					"avatar": require("../assets/images/character/Character_13_hoshi_half.png"),
					"name": "星辰",
					"cv": "CV.金元寿子"
				},
				{
					"avatar": require("../assets/images/character/Character_14_risa_half.png"),
					"name": "丽莎",
					"cv": "CV.渕上舞"
				},
				{
					"avatar": require("../assets/images/character/Character_15_kouta_half.png"),
					"name": "幸太",
					"cv": "CV.高橋信"
				},
				{
					"avatar": require("../assets/images/character/Character_22_blackcoat_half.png"),
					"name": "黑衣男子",
					"cv": "CV.水中雅章 / 仲村宗悟"
				},
				{
					"avatar": require("../assets/images/character/Character_24_yukimother_half.png"),
					"name": "小雪的母亲",
					"cv": "CV.清都ありさ"
				},
				{
					"avatar": require("../assets/images/character/Character_18_headhunter_half.png"),
					"name": "猎头",
					"cv": "CV.福田賢二"
				},
				{
					"avatar": require("../assets/images/character/Character_19_kenkyusha_half.png"),
					"name": "研究者",
					"cv": "CV.新垣樽助"
				},
				{
					"avatar": require("../assets/images/character/Character_20_ginga_half.png"),
					"name": "银河",
					"cv": "CV.拝真之介"
				},
				{
					"avatar": require("../assets/images/character/Character_21_uchu_half.png"),
					"name": "宇宙",
					"cv": "CV.山本彩乃"
				},
				{
					"avatar": require("../assets/images/character/Character_23_yukifather_half.png"),
					"name": "小雪的父亲",
					"cv": "CV.ランズベリー・アーサー"
				}]
			}
		},
		methods: mapActions(['characterSwiper'])
	}
</script>