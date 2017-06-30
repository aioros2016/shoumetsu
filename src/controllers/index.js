angular.module('shoumetsu', ['modRouter', 'modHeader', 'modHome', 'modBg', 'modCharacter', 'modTamashii', 'modStory', 'modNews', 'modSwiper', 'modModel', 'modVideo', 'modAudio', 'modUrl', 'modQr'])
.controller('globalController', ['$scope', '$http', '$location', '$anchorScroll', 'urlConfig', function($scope, $http, $location, $anchorScroll, urlConfig){
	
	// 接口url配置
	$scope.host = urlConfig.host;
	$scope.port = urlConfig.port;
	$scope.registered = urlConfig.path.registered;
	$scope.sendCode = urlConfig.path.sendCode;
	$scope.forget = urlConfig.path.forget;
	$scope.number = urlConfig.path.number;
	
	// 数据初始化
	$scope.showModel = false;
	$scope.showMask = false;
	$scope.showVideo = false;
	$scope.showQr = false;
	
	// 显示弹窗
	$scope.$on('showModel', function(event,data) {
		$scope.showModel = data;
		$scope.showMask = data;
	});
	
	$scope.$on('openQr', function(event,data) {
		$scope.showMask = data;
		$scope.showQr = data;
	});
	
	$scope.hideAll = function(){
		$scope.showMask = false;
		$scope.showQr = false;
		$scope.showVideo = false;
		var video = document.querySelector('video');
		video.pause();
	}
	
	// 播放视频
	$scope.$on('playVideo', function(event,data) {
		$scope.showMask = data;
		$scope.showVideo = data;
		var video = document.querySelector('video');
		var audio = document.querySelector('audio');
		var oCtrl = document.getElementById('audioCtrl').getElementsByTagName('a')[0];
		if(!video.src){
			video.src = video.getAttribute('_src');
		}
		video.play();
		audio.pause();
		video.setAttribute("_src", "");
		oCtrl.className = 'btn-play';
	});
	
	// 关闭视频
	$scope.$on('stopVideo', function(event,data) {
		$scope.showMask = data;
		$scope.showVideo = data;
		var video = document.querySelector('video');
		video.pause();
	});
	
	$scope.characterState = false;
	$scope.tamashiiState = false;
	
	$scope.character = [{
		"avatar": "../images/character/Character_01_yuki.png",
		"name": "小雪",
		"cv": "CV.花澤香菜",
		"img": "../images/character/character_detail_01_yuki.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "神秘少女",
		"content": "<p>【在这个时候，不要对我这么温柔，太狡猾了】</p><p>从“消灭”中奇迹生还的少女。<br />受此影响，身体中寄宿着不可思议的力量。</p><p>幼年时失去母亲。<br />和父亲以及弟弟苍真一起生活。</p><p>CV.花澤香菜</p>"
	},
	{
		"avatar": "../images/character/Character_03_takuya.png",
		"name": "拓也",
		"cv": "CV.杉田智和",
		"img": "../images/character/character_detail_03_takuya.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "男运输员",
		"content": "<p>【如果你也能变成大人话就能明白了】</p><p>什么都可以运送的专家运输员<br />能够不问私情，将客户委托放在第一位。</p><p>以前在侦探事务所工作。</p><p>CV.杉田智和</p>"
	},
	{
		"avatar": "../images/character/Character_02_yuki_red_half.png",
		"name": "小雪（失落世界）",
		"cv": "CV.花澤香菜",
		"img": "../images/character/character_detail_02_yuki_red.png",
		"bg": "../images/character/character_bg_detail_world_a.png",
		"nickname": "",
		"content": "<p>对于来自不同世界线举止可疑的拓也<br />心存怀疑<br />但渐渐变得信任起来</p><p>CV.花澤香菜</p>"
	},
	{
		"avatar": "../images/character/Character_04_souma_young_half.png",
		"name": "苍真",
		"cv": "CV.朝井彩加",
		"img": "../images/character/character_detail_04_souma_young.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "迷之少年",
		"content": "<p>在“消失”之后，据说用不可思议的力量将关键人物一个又一个杀害。</p><p>比小雪小三岁的弟弟<br />消灭前曾是内向，老实的性格<br />曾经是个姐控，经常紧握着小雪得手跟在她的身后</p><p>CV.朝井彩加。</p>"
	},
	{
		"avatar": "../images/character/Character_05_souma_adult_half.png",
		"name": "苍真（失落世界）",
		"cv": "CV.入野自由",
		"img": "../images/character/character_detail_05_souma_adult.png",
		"bg": "../images/character/character_bg_detail_world_a.png",
		"nickname": "",
		"content": "<p>平行世界的苍真。<br />一直在寻找能让自己幸福的世界线。</p><p>唯一的愿望是想和姐姐小雪再一次幸福得生活在一起。</p><p>CV.入野自由</p>"
	},
	{
		"avatar": "../images/character/Character_06_akira_half.png",
		"name": "明",
		"cv": "CV.中村悠一",
		"img": "../images/character/character_detail_06_akira.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "传说中的SP",
		"content": "<p>作为关键人物小雪父亲护卫的青年。</p><p>在小雪年少时期就担任护卫<br />对小雪来说是如同家人般的存在<br />却卷入消灭的事件中。</p><p>CV.中村悠一</p>"
	},
	{
		"avatar": "../images/character/Character_07_johnny_half.png",
		"name": "尊尼获加",
		"cv": "CV.中村悠一",
		"img": "../images/character/character_detail_07_johnny.png",
		"bg": "../images/character/character_bg_detail_world_a.png",
		"nickname": "尊尼获加",
		"content": "<p>和第一次消失的明不同<br />虽然身披黑衣集团的制服<br />但是他的真正目的仍然是个迷。</p><p>CV.中村悠一</p>"
	},
	{
		"avatar": "../images/character/Character_08_chief_half.png",
		"name": "主任",
		"cv": "CV.安元洋貴",
		"img": "../images/character/character_detail_08_chief.png",
		"bg": "../images/character/character_bg_detail_world_c.png",
		"nickname": "黑衣的男子",
		"content": "<p>出现于新章的“神秘组织”的头目。<br />阻挡两人前往巨大冰柱。<br />好像和小雪的过去有所联系...？</p><p>CV.安元洋貴</p>"
	},
	{
		"avatar": "../images/character/Character_09_suzuna_half.png",
		"name": "铃奈",
		"cv": "CV.佐倉綾音",
		"img": "../images/character/character_detail_09_suzuna.png",
		"bg": "../images/character/character_bg_detail_world_c.png",
		"nickname": "黑衣的少女",
		"content": "<p>所属“神秘组织”主任的部下。<br />虽然和小雪同龄<br />眼神中却散发着冰冷的光芒。</p><p>CV.佐倉綾音</p>"
	},
	{
		"avatar": "../images/character/Character_10_kikyo_half.png",
		"name": "桔梗",
		"cv": "CV.愛美",
		"img": "../images/character/character_detail_10_kikyo.png",
		"bg": "../images/character/character_bg_detail_world_c.png",
		"nickname": "客员研究员",
		"content": "<p>于新章出现 拓也他们的新同伴。<br />量子学和平行世界的研究员，貌似曾经和小雪的父亲一起做研究。</p><p>CV.愛美</p>"
	},
	{
		"avatar": "../images/character/Character_11_taiyo_half.png",
		"name": "太阳",
		"cv": "CV.高橋英則",
		"img": "../images/character/character_detail_11_taiyo.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "神秘男子",
		"content": "<p>研究平行世界的科学家之一。<br />曾经是小雪父亲的搭档<br />三年前和月亮一起失踪了。</p><p>CV.高橋英則</p>"
	},
	{
		"avatar": "../images/character/Character_16_geek_half.png",
		"name": "极客",
		"cv": "CV.西村太佑",
		"img": "../images/character/character_detail_16_geek.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>大学长期留级的技术人员。<br />因为懦弱的性格 没有什么朋友<br />但是却仰慕着拓也。</p><p>“极客”人如其名是一个重度的御宅族，<br />但是技术方面的确有一手。</p><p>CV.西村太佑</p>"
	},
	{
		"avatar": "../images/character/Character_17_researcher_half.png",
		"name": "调查员",
		"cv": "CV.中恵光城",
		"img": "../images/character/character_detail_17_researcher.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>擅长“情报收集”<br />拓也在侦探组织时期的同事。<br />虽然很在意拓也的事<br />自己却从来不主动联系拓也。</p><p>经常将可疑的念灵情报提供给拓也一行人。</p><p>CV.中恵光城</p>"
	},
	{
		"avatar": "../images/character/Character_12_tuki_half.png",
		"name": "皎月",
		"cv": "CV.朝井彩加",
		"img": "../images/character/character_detail_12_tuki.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>太阳的伴侣。<br />研究平行世界的科学家之一。<br />在三年前的消灭事件后变得“像另一个人一样”。之后便失踪了。</p><p>对于自己和太阳的孩子星星<br />一直很后悔没有给予他足够的爱。</p><p>CV.朝井彩加</p>"
	},
	{
		"avatar": "../images/character/Character_13_hoshi_half.png",
		"name": "星辰",
		"cv": "CV.金元寿子",
		"img": "../images/character/character_detail_13_hoshi.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>太阳和月亮的儿子。<br />一出生就被作为实验对象。</p><p>据说基本没和母亲见过几次面。</p><p>CV.金元寿子</p>"
	},
	{
		"avatar": "../images/character/Character_14_risa_half.png",
		"name": "丽莎",
		"cv": "CV.渕上舞",
		"img": "../images/character/character_detail_14_risa.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "侦探组织的干部",
		"content": "<p>拓也曾经所属的侦探组织的干部。<br />非常优秀，深受部下的信赖。</p><p>CV.渕上舞</p>"
	},
	{
		"avatar": "../images/character/Character_15_kouta_half.png",
		"name": "幸太",
		"cv": "CV.高橋信",
		"img": "../images/character/character_detail_15_kouta.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "男运输员",
		"content": "<p>拓也曾经所属的侦探组织的优秀新人。<br />将拓也视作为自己的对手。</p><p>CV.高橋信</p>"
	},
	{
		"avatar": "../images/character/Character_22_blackcoat_half.png",
		"name": "黑衣男子",
		"cv": "CV.水中雅章 / 仲村宗悟",
		"img": "../images/character/character_detail_22_blackcoat.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>黑衣的集团。暗地里不断推行着<br />“诺亚计划”。</p><p>比起自己的意向更坚持与大义。<br />貌似一直保持着地下巨大的设施<br />的运作。</p><p>CV.水中雅章 / 仲村宗悟</p>"
	},
	{
		"avatar": "../images/character/Character_24_yukimother_half.png",
		"name": "小雪的母亲",
		"cv": "CV.清都ありさ",
		"img": "../images/character/character_detail_24_yukimother.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>小雪和苍真的母亲。<br />两人自幼便被卷入事件之中<br />将两个孩子的未来托付给前来救援的明之后便去世了。</p><p>CV.清都ありさ</p>"
	},
	{
		"avatar": "../images/character/Character_18_headhunter_half.png",
		"name": "猎头",
		"cv": "CV.福田賢二",
		"img": "../images/character/character_detail_18_headhunter.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>着手于“情报买卖”<br />只为钱而行动的商人。<br />喜欢艺妓和豆沙水果凉粉。</p><p>很是照顾自己任性又可爱的侄女。</p><p>CV.福田賢二</p>"
	},
	{
		"avatar": "../images/character/Character_19_kenkyusha_half.png",
		"name": "研究者",
		"cv": "CV.新垣樽助",
		"img": "../images/character/character_detail_19_kenkyusha.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>曾经和小雪的父亲一起研究“平行世界”。<br />小雪的知心朋友。</p><p>同样进行着对念灵的能力和记忆的研究。</p><p>CV.新垣樽助</p>"
	},
	{
		"avatar": "../images/character/Character_20_ginga_half.png",
		"name": "银河",
		"cv": "CV.拝真之介",
		"img": "../images/character/character_detail_20_ginga.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>拥有“掌管记忆之人”的称号。<br />感受到太阳的死<br />而从平行世界来到这里。</p><p>CV.拝真之介</p>"
	},
	{
		"avatar": "../images/character/Character_21_uchu_half.png",
		"name": "宇宙",
		"cv": "CV.山本彩乃",
		"img": "../images/character/character_detail_21_utyu.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>受到银河崇拜的谜之少女。<br />蕴藏着强大的力量。</p><p>CV.山本彩乃</p>"
	},
	{
		"avatar": "../images/character/Character_23_yukifather_half.png",
		"name": "小雪的父亲",
		"cv": "CV.ランズベリー・アーサー",
		"img": "../images/character/character_detail_23_yukifather.png",
		"bg": "../images/character/character_bg_detail_world_b.png",
		"nickname": "",
		"content": "<p>小雪和苍真的父亲。<br />一直在推进这某项对世界非常重要的研究<br />工作非常忙将子女托付给了妻子。<br />被卷入消灭世界中行踪不明<br />自那之后三年。<br />向小雪发出了【在失落世界等你】的讯息。</p><p>CV.ランズベリー・アーサー</p>"
	}];

	$scope.tamashii = [{
		"avatar": "../images/tamashii/Tamasii_33.png",
		"img": "../images/tamashii/Tamasii_detail_33_akira.png",
		"bg": "../images/tamashii/Tamasii_bg_fire.png",
		"nickname": "最后的SP",
		"name": "明",
		"attribute": "../images/tamashii/property_fire.png",
		"content": "<p>保护小雪父亲和家族的SP。<br />可自由操控大多数枪支火器。<br />是敌人无法接近的战斗专家。</p><p>CV.中村悠一</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_01.png",
		"img": "../images/tamashii/Tamasii_detail_01_satoru.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "全知的观测者 ",
		"name": "聪",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>如同流星般突然出现的物理学界新星<br />运动全能 容貌端庄帅气<br />然而 没有人知晓他的少年时的事迹</p><p>CV.内田雄馬</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_02.png",
		"img": "../images/tamashii/Tamasii_detail_02_davinci.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "万能的天才",
		"name": "达芬奇",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>留下跨时代的卓越功绩<br />被人们歌颂为万能人的伟人<br />他仅仅只是天才么亦或是。</p><p>CV.内田雄馬</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_03.png",
		"img": "../images/tamashii/Tamasii_detail_03_gamemaster.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "终焉的游戏管理员",
		"name": "“？？？”",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>被谜团所包围的存在<br />没人见过他的真面目。</p><p>CV.内田雄馬</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_04.png",
		"img": "../images/tamashii/Tamasii_detail_04_nightingale.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "战场的天使",
		"name": "南丁格尔",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>自愿上战场看护负伤士兵<br />成为“白衣天使”由来的伟人。</p><p>CV.加隈亜衣</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_05.png",
		"img": "../images/tamashii/Tamasii_detail_05_alice.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "永远的梦想少女",
		"name": "爱丽丝",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>著名剧团预定上演的<br />“不可思议王国的爱丽丝”的主人公<br />经常说些不可思议的话让人困惑</p><p>CV.田中美海</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_06.png",
		"img": "../images/tamashii/Tamasii_detail_06_sumire.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "杀戮公主",
		"name": "堇",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>某怪盗团中的一员<br />挥动电锯的同时绝对不会伤到自己的裙子</p><p>CV.遠藤ゆりか</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_07.png",
		"img": "../images/tamashii/Tamasii_detail_07_hazuki.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "觉醒兵器",
		"name": "叶月",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>她作为兵器再次醒来时<br />失去了作为人时候的记忆<br />只记得自己所爱之人的侧颜</p><p>CV.鈴木愛奈</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_08.png",
		"img": "../images/tamashii/Tamasii_detail_08_tsubasa.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "消逝的怪盗绅士",
		"name": "银翼",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>某怪盗团的团长<br />在偷盗收集情报的同时<br />不断寻找自己失散的弟弟</p><p>CV.島崎信長</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_09.png",
		"img": "../images/tamashii/Tamasii_detail_09_yoshiaki.png",
		"bg": "../images/tamashii/Tamasii_bg_wood.png",
		"nickname": "消失的幻影师",
		"name": "庆明",
		"attribute": "../images/tamashii/property_wood.png",
		"content": "<p>只要变得出名了<br />说不定就能见到失散的哥哥了<br />将这份思念埋藏于心中<br />庆明向着更为耀目的舞台为目标而前进</p><p>CV.松岡禎丞</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_10.png",
		"img": "../images/tamashii/Tamasii_detail_10_mirai.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "妙笔升龙",
		"name": "未来",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>出生于名门一家 在书法方面受到英才的教育<br />内心期望着有朝一日能够超越作为人类国宝的祖父</p><p>CV.井澤美香子</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_11.png",
		"img": "../images/tamashii/Tamasii_detail_11_yayoi.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "弯曲一切之人",
		"name": "弥佳",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>某怪盗团中的一员<br />使用能让勺子弯曲的杂技<br />赚点零花钱</p><p>CV.大橋彩香</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_12.png",
		"img": "../images/tamashii/Tamasii_detail_12_airi.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "小小大明星",
		"name": "爱理",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>在电视剧“海鸥”中获得极大关注度的人气童星<br />四岁就表现出出人意料的演技力<br />只有双亲才能看穿她的真实想法</p><p>CV.田中あいみ</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_13.png",
		"img": "../images/tamashii/Tamasii_detail_13_oda.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "第六天魔王",
		"name": "织田信长",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>以残酷的行径而受人敬畏的武将<br />不惧牺牲以冷酷而又华丽的战术即将统一天下<br />然而……</p><p>CV.武内駿輔</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_14.png",
		"img": "../images/tamashii/Tamasii_detail_14_kiyo.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "被蛇神选中的少女",
		"name": "纪代",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>悉心守护妹妹们<br />优雅的“四姐妹”中的长女<br />有些时候过于稳重</p><p>CV.伊藤美来</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_15.png",
		"img": "../images/tamashii/Tamasii_detail_15_marie_antoinette.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "华丽王妃",
		"name": "玛丽·安托瓦内特",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>由于过于奢侈而激起世间的反感<br />而被传言已被处刑的一人孤独的王妃</p><p>CV.桑原由気</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_16.png",
		"img": "../images/tamashii/Tamasii_detail_16_marry.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "无情女王",
		"name": "玛丽",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>由于“月之泪”宝石的影响<br />而失去自我的大小姐<br />虽然这么说但是她貌似原本性格就很糟糕</p><p>CV.桑原由気</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_17.png",
		"img": "../images/tamashii/Tamasii_detail_17_ayano.png",
		"bg": "../images/tamashii/Tamasii_bg_wood.png",
		"nickname": "花之少女",
		"name": "绫乃",
		"attribute": "../images/tamashii/property_wood.png",
		"content": "<p>在孤儿院长大的少女<br />闭上双眼<br />就会回想起年少时候和双亲一起摘花的记忆</p><p>CV.秦佐和子</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_18.png",
		"img": "../images/tamashii/Tamasii_detail_18_alexander.png",
		"bg": "../images/tamashii/Tamasii_bg_fire.png",
		"nickname": "征服王",
		"name": "亚历山大",
		"attribute": "../images/tamashii/property_fire.png",
		"content": "<p>寄宿在假象中<br />曾经统治世界的大王的记忆<br />或者说是追求那个力量的人勇猛的具象吧</p><p>CV.杉田智和</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_19.png",
		"img": "../images/tamashii/Tamasii_detail_19_rou.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "开眼的暗气功师",
		"name": "罗",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>使用暗气功进行暗杀的大师<br />虽然进行暗杀活动时冷酷无情<br />却很珍惜同伴</p><p>CV.沢城千春</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_20.png",
		"img": "../images/tamashii/Tamasii_detail_20_ru.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "绝技女气功师",
		"name": "璐",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>所属于有千年历史的流派<br />操纵气功的少女</p><p>CV.富田美憂</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_21.png",
		"img": "../images/tamashii/Tamasii_detail_21_himiko.png",
		"bg": "../images/tamashii/Tamasii_bg_wood.png",
		"nickname": "掌控鬼道的女王",
		"name": "卑弥呼",
		"attribute": "../images/tamashii/property_wood.png",
		"content": "<p>古代帝国的女王<br />作为神的代理人治理帝国的少女</p><p>CV.五十嵐裕美</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_22.png",
		"img": "../images/tamashii/Tamasii_detail_22_mami.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "世纪的大发明家",
		"name": "真美",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>言行自由奔放并伴随飞跃式思考力<br />自成天才的美少女发明家</p><p>CV.諏訪ななか</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_23.png",
		"img": "../images/tamashii/Tamasii_detail_23_emi.png",
		"bg": "../images/tamashii/Tamasii_bg_fire.png",
		"nickname": "夏夜思念",
		"name": "惠美",
		"attribute": "../images/tamashii/property_fire.png",
		"content": "<p>男友为了实现成为传说中的摇滚歌手梦想而远赴海外<br />惠美就这样目送他离开<br />在那个地方留下的 是爱的话语</p><p>CV.徳井青空</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_24.png",
		"img": "../images/tamashii/Tamasii_detail_24_ryoko.png",
		"bg": "../images/tamashii/Tamasii_bg_wood.png",
		"nickname": "不屈的守护者",
		"name": "凉子",
		"attribute": "../images/tamashii/property_wood.png",
		"content": "<p>年少时为了超越殉职的父亲而成为刑警<br />实际上渴望着相亲结婚</p><p>CV.黒沢ともよ</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_25.png",
		"img": "../images/tamashii/Tamasii_detail_25_minako.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "掌控天空之人",
		"name": "美奈子",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>以可爱的外表大获人气的女播报员<br />美奈子在最初的天气预报环节时就获得巨大的反响<br />如今成为高收视率的名环节</p><p>CV.川上千尋</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_26.png",
		"img": "../images/tamashii/Tamasii_detail_26_frog.png",
		"bg": "../images/tamashii/Tamasii_bg_wood.png",
		"nickname": "",
		"name": "青蛙",
		"attribute": "../images/tamashii/property_wood.png",
		"content": "<p>呱呱呱</p><p>CV.高橋未奈美</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_27.png",
		"img": "../images/tamashii/Tamasii_detail_27_coleburn.png",
		"bg": "../images/tamashii/Tamasii_bg_fire.png",
		"nickname": "兵器使",
		"name": "柯尔本",
		"attribute": "../images/tamashii/property_fire.png",
		"content": "<p>黑衣组织中被称为“执行机关”中领导一样的存在<br />从来不会容忍任何一个伤害他同伴的人</p><p>CV.森嶋秀太</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_28.png",
		"img": "../images/tamashii/Tamasii_detail_28_rosebank.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "时空守门人",
		"name": "罗斯班克",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>“执行机关”中的一员<br />好像拥有和平行世界相关的强大力量<br />和“执行机关”的成立有着密切的联系</p><p>CV.大西沙織</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_29.png",
		"img": "../images/tamashii/Tamasii_detail_29_girvan.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "太刀使",
		"name": "格文",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>“执行机关”中的一员，首屈一指的武斗派<br />能使用多把刀，对组织的敌人进行斩杀</p><p>CV.浜田賢二</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_30.png",
		"img": "../images/tamashii/Tamasii_detail_30_portellen.png",
		"bg": "../images/tamashii/Tamasii_bg_wood.png",
		"nickname": "解析的参谋",
		"name": "波特艾伦",
		"attribute": "../images/tamashii/property_wood.png",
		"content": "<p>“执行机关”的一员 特长情报解析<br />对自己的体能也十分自信<br />为达目的而不择手段</p><p>CV.八代拓</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_31.png",
		"img": "../images/tamashii/Tamasii_detail_31_littlemill.png",
		"bg": "../images/tamashii/Tamasii_bg_water.png",
		"nickname": "人偶使",
		"name": "小米尔",
		"attribute": "../images/tamashii/property_water.png",
		"content": "<p>“执行机关”的一员 擅长咒术<br />由于得到这个力量也付出代价<br />原来的性格完全变了</p><p>CV.花守ゆみり</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_32.png",
		"img": "../images/tamashii/Tamasii_detail_32_miya.png",
		"bg": "../images/tamashii/Tamasii_bg_light.png",
		"nickname": "日本女仆",
		"name": "美弥",
		"attribute": "../images/tamashii/property_light.png",
		"content": "<p>在某资产家中进行女仆工作的少女<br />为了成为日本第一女仆而奋斗</p><p>CV.加隈亜衣</p>"
	},
	{
		"avatar": "../images/tamashii/Tamasii_34.png",
		"img": "../images/tamashii/Tamasii_detail_34_kazuma.png",
		"bg": "../images/tamashii/Tamasii_bg_darkness.png",
		"nickname": "不败的律师",
		"name": "一马",
		"attribute": "../images/tamashii/property_darkness.png",
		"content": "<p>能干的资深律师<br />对胜利有异常的执着<br />不败的记录还在更新中</p><p>CV.武内駿輔</p>"
	}];
	
	$scope.$on('showCharacter', function(event, data) {
		$scope.characterState = data.state;
		var oBody = document.getElementsByTagName('body')[0];
		var oCharacter = document.getElementById('button-character').getElementsByTagName('li');
		oBody.className = 'lock-scr';
		var swiper = new Swiper('.swiper-character');
		oCharacter[data.index].onclick = function(){
			swiper.reInit();
			swiper.swipeTo(data.index, 0, false);
		};
		$scope.prevItem = function(ev){
			ev.preventDefault();
		    swiper.swipePrev();
		};
		$scope.nextItem = function(ev){
			ev.preventDefault();
		    swiper.swipeNext();
		};
	});
	$scope.$on('hideCharacter', function(event, data) {
		$scope.characterState = data.state;
	});
	$scope.$on('showTamashii', function(event, data) {
		$scope.tamashiiState = data.state;
		var oBody = document.getElementsByTagName('body')[0];
		var oTamashii = document.getElementById('button-tamashii').getElementsByTagName('li');
		oBody.className = 'lock-scr';
		var swiper = new Swiper('.swiper-tamashii');
		oTamashii[data.index].onclick = function(){
			swiper.reInit();
			swiper.swipeTo(data.index, 0, false);
		};
		$scope.prevItem = function(ev){
			ev.preventDefault();
		    swiper.swipePrev();
		};
		$scope.nextItem = function(ev){
			ev.preventDefault();
		    swiper.swipeNext();
		};
	});
	$scope.$on('hideTamashii', function(event, data) {
		$scope.tamashiiState = data.state;
	});
	$scope.$on('$stateChangeStart', function(){
		var video = document.querySelector('video');
		video.pause();
		$scope.showModel = false;
		$scope.showMask = false;
		$scope.showVideo = false;
		$scope.showQr = false;
		$scope.characterState = false;
		$scope.tamashiiState = false;
	});
}])
.directive('onFinishRender', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            };
        }
    };
}])
.filter('showAsHtml', ['$sce', function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
}]);