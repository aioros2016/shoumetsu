<template>
	<div class="popup-box" v-show="swiper.showCharacter">
		<div class="view-photo"></div>
		<div class="swiper-container swiper-character">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, index) in photo">
					<div class="inner-box">
						<div class="figure">
							<img class="img fixSpaceRight swiper-lazy" :data-src="item.img">
							<img class="bg swiper-lazy" :data-src="item.bg">
						</div>
						<div class="info">
							<div class="title">
								<span class="nickname">{{item.nickname}}</span>
								<h3>{{item.name}}</h3>
							</div>
							<div class="text" v-html="item.content"></div>
						</div>
						<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</div>
				</div>
			</div>
			<!-- Navigation -->
	        <div class="swiper-button-next"></div>
	        <div class="swiper-button-prev"></div>
		</div>
		<div class="btn-close" @click="hideCharacter"></div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data(){
			return {
				showView: true,
//				swiper.showCharacter
				photo:[{
					"img": require("../assets/images/character/character_detail_01_yuki.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "神秘少女",
					"name": "小雪",
					"content": "<p>【在这个时候，不要对我这么温柔，太狡猾了】</p><p>从“消灭”中奇迹生还的少女。<br />受此影响，身体中寄宿着不可思议的力量。</p><p>幼年时失去母亲。<br />和父亲以及弟弟苍真一起生活。</p><p>CV.花澤香菜</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_03_takuya.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "男运输员",
					"name": "拓也 ",
					"content": "<p>【如果你也能变成大人话就能明白了】</p><p>什么都可以运送的专家运输员<br />能够不问私情，将客户委托放在第一位。</p><p>以前在侦探事务所工作。</p><p>CV.杉田智和</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_02_yuki_red.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_a.png"),
					"nickname": "",
					"name": "小雪（失落世界）",
					"content": "<p>对于来自不同世界线举止可疑的拓也<br />心存怀疑<br />但渐渐变得信任起来</p><p>CV.花澤香菜</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_04_souma_young.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "迷之少年",
					"name": "苍真",
					"content": "<p>在“消失”之后，据说用不可思议的力量将关键人物一个又一个杀害。</p><p>比小雪小三岁的弟弟<br />消灭前曾是内向，老实的性格<br />曾经是个姐控，经常紧握着小雪得手跟在她的身后</p><p>CV.朝井彩加。</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_05_souma_adult.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_a.png"),
					"nickname": "",
					"name": "苍真（失落世界）",
					"content": "<p>平行世界的苍真。<br />一直在寻找能让自己幸福的世界线。</p><p>唯一的愿望是想和姐姐小雪再一次幸福得生活在一起。</p><p>CV.入野自由</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_06_akira.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "传说中的SP",
					"name": "明",
					"content": "<p>作为关键人物小雪父亲护卫的青年。</p><p>在小雪年少时期就担任护卫<br />对小雪来说是如同家人般的存在<br />却卷入消灭的事件中。</p><p>CV.中村悠一</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_07_johnny.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_a.png"),
					"nickname": "尊尼获加",
					"name": "平行世界的明",
					"content": "<p>和第一次消失的明不同<br />虽然身披黑衣集团的制服<br />但是他的真正目的仍然是个迷。</p><p>CV.中村悠一</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_08_chief.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_c.png"),
					"nickname": "黑衣的男子",
					"name": "主任",
					"content": "<p>出现于新章的“神秘组织”的头目。<br />阻挡两人前往巨大冰柱。<br />好像和小雪的过去有所联系...？</p><p>CV.安元洋貴</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_09_suzuna.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_c.png"),
					"nickname": "黑衣的少女",
					"name": "铃奈",
					"content": "<p>所属“神秘组织”主任的部下。<br />虽然和小雪同龄<br />眼神中却散发着冰冷的光芒。</p><p>CV.佐倉綾音</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_10_kikyo.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_c.png"),
					"nickname": "客员研究员",
					"name": "桔梗",
					"content": "<p>于新章出现 拓也他们的新同伴。<br />量子学和平行世界的研究员，貌似曾经和小雪的父亲一起做研究。</p><p>CV.愛美</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_11_taiyo.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "神秘男子",
					"name": "太阳",
					"content": "<p>研究平行世界的科学家之一。<br />曾经是小雪父亲的搭档<br />三年前和月亮一起失踪了。</p><p>CV.高橋英則</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_16_geek.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "极客",
					"content": "<p>大学长期留级的技术人员。<br />因为懦弱的性格 没有什么朋友<br />但是却仰慕着拓也。</p><p>“极客”人如其名是一个重度的御宅族，<br />但是技术方面的确有一手。</p><p>CV.西村太佑</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_17_researcher.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "调查员",
					"content": "<p>擅长“情报收集”<br />拓也在侦探组织时期的同事。<br />虽然很在意拓也的事<br />自己却从来不主动联系拓也。</p><p>经常将可疑的念灵情报提供给拓也一行人。</p><p>CV.中恵光城</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_12_tuki.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "皎月",
					"content": "<p>太阳的伴侣。<br />研究平行世界的科学家之一。<br />在三年前的消灭事件后变得“像另一个人一样”。之后便失踪了。</p><p>对于自己和太阳的孩子星星<br />一直很后悔没有给予他足够的爱。</p><p>CV.朝井彩加</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_13_hoshi.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "星辰",
					"content": "<p>太阳和月亮的儿子。<br />一出生就被作为实验对象。</p><p>据说基本没和母亲见过几次面。</p><p>CV.金元寿子</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_14_risa.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "侦探组织的干部",
					"name": "丽莎",
					"content": "<p>拓也曾经所属的侦探组织的干部。<br />非常优秀，深受部下的信赖。</p><p>CV.渕上舞</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_15_kouta.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "男运输员",
					"name": "幸太",
					"content": "<p>拓也曾经所属的侦探组织的优秀新人。<br />将拓也视作为自己的对手。</p><p>CV.高橋信</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_22_blackcoat.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "黑衣男子",
					"content": "<p>黑衣的集团。暗地里不断推行着<br />“诺亚计划”。</p><p>比起自己的意向更坚持与大义。<br />貌似一直保持着地下巨大的设施<br />的运作。</p><p>CV.水中雅章 / 仲村宗悟</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_24_yukimother.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "小雪的母亲",
					"content": "<p>小雪和苍真的母亲。<br />两人自幼便被卷入事件之中<br />将两个孩子的未来托付给前来救援的明之后便去世了。</p><p>CV.清都ありさ</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_18_headhunter.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "猎头",
					"content": "<p>着手于“情报买卖”<br />只为钱而行动的商人。<br />喜欢艺妓和豆沙水果凉粉。</p><p>很是照顾自己任性又可爱的侄女。</p><p>CV.福田賢二</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_19_kenkyusha.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "研究者",
					"content": "<p>曾经和小雪的父亲一起研究“平行世界”。<br />小雪的知心朋友。</p><p>同样进行着对念灵的能力和记忆的研究。</p><p>CV.新垣樽助</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_20_ginga.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "银河",
					"content": "<p>拥有“掌管记忆之人”的称号。<br />感受到太阳的死<br />而从平行世界来到这里。</p><p>CV.拝真之介</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_21_utyu.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "宇宙",
					"content": "<p>受到银河崇拜的谜之少女。<br />蕴藏着强大的力量。</p><p>CV.山本彩乃</p>"
				},
				{
					"img": require("../assets/images/character/character_detail_23_yukifather.png"),
					"bg": require("../assets/images/character/character_bg_detail_world_b.png"),
					"nickname": "",
					"name": "小雪的父亲",
					"content": "<p>小雪和苍真的父亲。<br />一直在推进这某项对世界非常重要的研究<br />工作非常忙将子女托付给了妻子。<br />被卷入消灭世界中行踪不明<br />自那之后三年。<br />向小雪发出了【在失落世界等你】的讯息。</p><p>CV.ランズベリー・アーサー</p>"
				}]
			}
		},
		methods: mapActions(['hideCharacter']),
		computed: mapGetters(['swiper'])
	}
</script>