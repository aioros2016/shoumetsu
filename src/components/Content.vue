<template>
	<div class="reg-content">
		<div class="logo"><img src="../assets/images/siteLogo.png" /></div>
		<div class="reg-area">
			<div class="num">4.0火热准备中... 已有<em>{{num}}</em>人预约</div>
			<div class="btn-reg" @click="showModel">点击预约</div>
		</div>
	    <div class="slogan2" @click="playVideo"></div>
	    <div class="prize">
	    	<span class="tip">活动规则：游戏开启后，玩家可在游戏内【邮箱】领取预约奖励,<br />奖励不叠加</span>
	    	<ul>
	    		<li :class="item.class" v-for="(item, index) in item"></li>
	    	</ul>
	    </div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data(){
			return {
				num: 0,
				item: [{
					"class": "item1"
				}, 
				{
					"class": "item2"
				},
				{
					"class": "item3"
				},
				{
					"class": "item4"
				}]
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-reg', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        paginationBulletRender: function (swiper, index, className) {
		            return '<span class="' + className + ' item'+ index +'"></span>';
		        }
		    });
		    this.fetchData();
		    
		},
		methods: {
			showModel(){
				this.$store.dispatch('showModel')
			},
			step(){
				if(this.num >= 10000){
					this.item[0].class = "item1 pass"
				}
				if(this.num >= 30000){
					this.item[1].class = "item2 pass"
				}
				if(this.num >= 50000){
					this.item[2].class = "item3 pass"
				}
				if(this.num >= 100000){
					this.item[3].class = "item4 pass"
				}
			},
			playVideo(){
				this.$store.dispatch('playVideo');
			},
			fetchData(){
				var _this = this;
				this.$http.get('http://athenareg.opd2c.com:18080/regcount/athena').then(function(res){
					console.log(res);
					_this.num = res.data.count;
					_this.step();
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>