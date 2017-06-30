<template>
	<div class="popup-box showTamashii" v-show="swiper.showTamashii">
		<div class="view-photo"></div>
		<div class="swiper-container swiper-tamashii">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, index) in photo">
					<div class="inner-box">
						<div class="figure">
							<img class="img swiper-lazy" :data-src="item.img">
							<img class="bg swiper-lazy" :data-src="item.bg">
						</div>
						<div class="info">
							<div class="title">
								<span class="nickname">{{item.nickname}}</span>
								<h3>{{item.name}}</h3>
								<span class="attribute">属性：<img class="img swiper-lazy" :data-src="item.attribute"></span>
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
		<div class="btn-close" @click="hideTamashii"></div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data(){
			return {
				photo:[{
					"img": require("../assets/images/tamashii/Tamasii_detail_33_akira.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_fire.png"),
					"nickname": "最后的SP",
					"name": "明",
					"attribute": require("../assets/images/tamashii/property_fire.png"),
					"content": "<p>保护小雪父亲和家族的SP。<br />可自由操控大多数枪支火器。<br />是敌人无法接近的战斗专家。</p><p>CV.中村悠一</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_01_satoru.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "全知的观测者 ",
					"name": "聪",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>如同流星般突然出现的物理学界新星<br />运动全能 容貌端庄帅气<br />然而 没有人知晓他的少年时的事迹</p><p>CV.内田雄馬</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_02_davinci.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "万能的天才",
					"name": "达芬奇",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>留下跨时代的卓越功绩<br />被人们歌颂为万能人的伟人<br />他仅仅只是天才么亦或是。</p><p>CV.内田雄馬</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_03_gamemaster.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "终焉的游戏管理员",
					"name": "“？？？”",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>被谜团所包围的存在<br />没人见过他的真面目。</p><p>CV.内田雄馬</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_04_nightingale.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "战场的天使",
					"name": "南丁格尔",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>自愿上战场看护负伤士兵<br />成为“白衣天使”由来的伟人。</p><p>CV.加隈亜衣</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_05_alice.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "永远的梦想少女",
					"name": "爱丽丝",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>著名剧团预定上演的<br />“不可思议王国的爱丽丝”的主人公<br />经常说些不可思议的话让人困惑</p><p>CV.田中美海</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_06_sumire.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "杀戮公主",
					"name": "堇",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>某怪盗团中的一员<br />挥动电锯的同时绝对不会伤到自己的裙子</p><p>CV.遠藤ゆりか</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_07_hazuki.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "觉醒兵器",
					"name": "叶月",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>她作为兵器再次醒来时<br />失去了作为人时候的记忆<br />只记得自己所爱之人的侧颜</p><p>CV.鈴木愛奈</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_08_tsubasa.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "消逝的怪盗绅士",
					"name": "银翼",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>某怪盗团的团长<br />在偷盗收集情报的同时<br />不断寻找自己失散的弟弟</p><p>CV.島崎信長</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_09_yoshiaki.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_wood.png"),
					"nickname": "消失的幻影师",
					"name": "庆明",
					"attribute": require("../assets/images/tamashii/property_wood.png"),
					"content": "<p>只要变得出名了<br />说不定就能见到失散的哥哥了<br />将这份思念埋藏于心中<br />庆明向着更为耀目的舞台为目标而前进</p><p>CV.松岡禎丞</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_10_mirai.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "妙笔升龙",
					"name": "未来",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>出生于名门一家 在书法方面受到英才的教育<br />内心期望着有朝一日能够超越作为人类国宝的祖父</p><p>CV.井澤美香子</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_11_yayoi.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "弯曲一切之人",
					"name": "弥佳",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>某怪盗团中的一员<br />使用能让勺子弯曲的杂技<br />赚点零花钱</p><p>CV.大橋彩香</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_12_airi.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "小小大明星",
					"name": "爱理",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>在电视剧“海鸥”中获得极大关注度的人气童星<br />四岁就表现出出人意料的演技力<br />只有双亲才能看穿她的真实想法</p><p>CV.田中あいみ</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_13_oda.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "第六天魔王",
					"name": "织田信长",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>以残酷的行径而受人敬畏的武将<br />不惧牺牲以冷酷而又华丽的战术即将统一天下<br />然而……</p><p>CV.武内駿輔</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_14_kiyo.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "被蛇神选中的少女",
					"name": "纪代",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>悉心守护妹妹们<br />优雅的“四姐妹”中的长女<br />有些时候过于稳重</p><p>CV.伊藤美来</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_15_marie_antoinette.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "华丽王妃",
					"name": "玛丽·安托瓦内特",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>由于过于奢侈而激起世间的反感<br />而被传言已被处刑的一人孤独的王妃</p><p>CV.桑原由気</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_16_marry.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "无情女王",
					"name": "玛丽",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>由于“月之泪”宝石的影响<br />而失去自我的大小姐<br />虽然这么说但是她貌似原本性格就很糟糕</p><p>CV.桑原由気</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_17_ayano.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_wood.png"),
					"nickname": "花之少女",
					"name": "绫乃",
					"attribute": require("../assets/images/tamashii/property_wood.png"),
					"content": "<p>在孤儿院长大的少女<br />闭上双眼<br />就会回想起年少时候和双亲一起摘花的记忆</p><p>CV.秦佐和子</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_18_alexander.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_fire.png"),
					"nickname": "征服王",
					"name": "亚历山大",
					"attribute": require("../assets/images/tamashii/property_fire.png"),
					"content": "<p>寄宿在假象中<br />曾经统治世界的大王的记忆<br />或者说是追求那个力量的人勇猛的具象吧</p><p>CV.杉田智和</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_19_rou.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "开眼的暗气功师",
					"name": "罗",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>使用暗气功进行暗杀的大师<br />虽然进行暗杀活动时冷酷无情<br />却很珍惜同伴</p><p>CV.沢城千春</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_20_ru.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "绝技女气功师",
					"name": "璐",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>所属于有千年历史的流派<br />操纵气功的少女</p><p>CV.富田美憂</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_21_himiko.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_wood.png"),
					"nickname": "掌控鬼道的女王",
					"name": "卑弥呼",
					"attribute": require("../assets/images/tamashii/property_wood.png"),
					"content": "<p>古代帝国的女王<br />作为神的代理人治理帝国的少女</p><p>CV.五十嵐裕美</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_22_mami.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "世纪的大发明家",
					"name": "真美",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>言行自由奔放并伴随飞跃式思考力<br />自成天才的美少女发明家</p><p>CV.諏訪ななか</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_23_emi.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_fire.png"),
					"nickname": "夏夜思念",
					"name": "惠美",
					"attribute": require("../assets/images/tamashii/property_fire.png"),
					"content": "<p>男友为了实现成为传说中的摇滚歌手梦想而远赴海外<br />惠美就这样目送他离开<br />在那个地方留下的 是爱的话语</p><p>CV.徳井青空</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_24_ryoko.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_wood.png"),
					"nickname": "不屈的守护者",
					"name": "凉子",
					"attribute": require("../assets/images/tamashii/property_wood.png"),
					"content": "<p>年少时为了超越殉职的父亲而成为刑警<br />实际上渴望着相亲结婚</p><p>CV.黒沢ともよ</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_25_minako.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "掌控天空之人",
					"name": "美奈子",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>以可爱的外表大获人气的女播报员<br />美奈子在最初的天气预报环节时就获得巨大的反响<br />如今成为高收视率的名环节</p><p>CV.川上千尋</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_26_frog.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_wood.png"),
					"nickname": "",
					"name": "青蛙",
					"attribute": require("../assets/images/tamashii/property_wood.png"),
					"content": "<p>呱呱呱</p><p>CV.高橋未奈美</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_27_coleburn.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_fire.png"),
					"nickname": "兵器使",
					"name": "柯尔本",
					"attribute": require("../assets/images/tamashii/property_fire.png"),
					"content": "<p>黑衣组织中被称为“执行机关”中领导一样的存在<br />从来不会容忍任何一个伤害他同伴的人</p><p>CV.森嶋秀太</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_28_rosebank.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "时空守门人",
					"name": "罗斯班克",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>“执行机关”中的一员<br />好像拥有和平行世界相关的强大力量<br />和“执行机关”的成立有着密切的联系</p><p>CV.大西沙織</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_29_girvan.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "太刀使",
					"name": "格文",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>“执行机关”中的一员，首屈一指的武斗派<br />能使用多把刀，对组织的敌人进行斩杀</p><p>CV.浜田賢二</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_30_portellen.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_wood.png"),
					"nickname": "解析的参谋",
					"name": "波特艾伦",
					"attribute": require("../assets/images/tamashii/property_wood.png"),
					"content": "<p>“执行机关”的一员 特长情报解析<br />对自己的体能也十分自信<br />为达目的而不择手段</p><p>CV.八代拓</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_31_littlemill.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_water.png"),
					"nickname": "人偶使",
					"name": "小米尔",
					"attribute": require("../assets/images/tamashii/property_water.png"),
					"content": "<p>“执行机关”的一员 擅长咒术<br />由于得到这个力量也付出代价<br />原来的性格完全变了</p><p>CV.花守ゆみり</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_32_miya.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_light.png"),
					"nickname": "日本女仆",
					"name": "美弥",
					"attribute": require("../assets/images/tamashii/property_light.png"),
					"content": "<p>在某资产家中进行女仆工作的少女<br />为了成为日本第一女仆而奋斗</p><p>CV.加隈亜衣</p>"
				},
				{
					"img": require("../assets/images/tamashii/Tamasii_detail_34_kazuma.png"),
					"bg": require("../assets/images/tamashii/Tamasii_bg_darkness.png"),
					"nickname": "不败的律师",
					"name": "一马",
					"attribute": require("../assets/images/tamashii/property_darkness.png"),
					"content": "<p>能干的资深律师<br />对胜利有异常的执着<br />不败的记录还在更新中</p><p>CV.武内駿輔</p>"
				}]
			}
		},
		methods: mapActions(['hideTamashii']),
		computed: mapGetters(['swiper'])
	}
</script>