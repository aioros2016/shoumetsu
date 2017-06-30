<template>
	<div class="header">
		<div class="side-box">
			<div class="pad-wrapper">
				<div class="top-area">
					<div class="logo">
						<h1><img src="../assets/images/siteLogo.png" /></h1>
					</div>
					<div class="float-right">
						<div class="slogan">
							<h2><img src="../assets/images/siteLogoCopy.png" /></h2>
						</div>
						<div class="download-box">
							<a class="ios" href="https://itunes.apple.com/cn/app/id1036169535" target="_blank">app store下载</a>
							<a class="android" href="http://update-athena.opd2c.com/download/xmds_opd2c.apk" target="_blank">android下载</a>
						</div>
					</div>
				</div>
				<div class="nav" @click="closeSide">
					<ul>
						<router-link :to="menu.link" :tag="menu.tag" v-for="(menu, index) in nav">{{menu.title}}</router-link>
					</ul>
				</div>
			</div>
			<div class="btn-side" v-show="showNavBtn">
				<span class="line"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				showNavBtn: false,
				nav: [{
					"link": "/Index",
					"tag": "li",
					"title": "首页"
				},
				{
					"link": "/News",
					"tag": "li",
					"title": "新闻"
				},
				{
					"link": "/character",
					"tag": "li",
					"title": "角色"
				},
				{
					"link": "/tamashii",
					"tag": "li",
					"title": "念灵"
				},
				{
					"link": "/story",
					"tag": "li",
					"title": "故事"
				}]
			}
		},
		mounted(){
			this.slideMenu();
			this.fixedNav();
			window.addEventListener('scroll', this.sideBtn, false);
			window.addEventListener('scroll', this.fixedNav, false);
		},
		methods: {
			sideBtn(){
				var oHtml = document.querySelector('html');
				var menuBtn = document.querySelector('.btn-side');
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var clientHeight = document.body.clientWidth;
				var _this = this;
				if(scrollTop > 196 || oHtml.className == 'lock-scr' ){
					_this.showNavBtn = true;
				}else{
					_this.showNavBtn = false;
					menuBtn.className = "btn-side";
				};
			},
			slideMenu(){
				var oHtml = document.querySelector('html');
				var oBody = document.querySelector('body');
				var menuBtn = document.querySelector('.btn-side');
				var header = document.querySelector('.header');
				var side = document.querySelector('.side-box');
				
				var _this = this;
				menuBtn.onclick = function(){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					if(this.className == "btn-side is-active"){
						this.className = "btn-side";
						header.className = 'header';
						window.removeEventListener('touchmove', _this.handler , false);
						side.style.top = 'auto';
					}else{
						this.className = "btn-side is-active";
						header.className = 'header side-menu';
						window.addEventListener('touchmove', _this.handler, false);
						side.style.top = scrollTop +'px';
					};
				};
			},
			closeSide(){
				var oBody = document.querySelector('body');
				var menuBtn = document.querySelector('.btn-side');
				var header = document.querySelector('.header');
				menuBtn.className = "btn-side";
				header.className = 'header';
				window.removeEventListener('touchmove', this.handler , false);
//				oBody.style.overflow = "visible";
			},
			fixedNav(){
				var iPad = document.querySelector('.pad-wrapper');
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop > 118){
					iPad.className = "pad-wrapper fixed";
				}
				if(scrollTop < 118){
					iPad.className = "pad-wrapper";
				}
			},
			handler(){
				event.preventDefault();
			}
		}
	}
</script>