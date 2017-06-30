<template>
	<div class="home item-list">
		<ul>
			<li class="share">
				<a class="sina" href="http://weibo.com/u/5654093794?topnav=1&wvr=6&topsug=1" target="_blank"></a>
				<a class="baidu" href="http://tieba.baidu.com/f?kw=%E6%B6%88%E7%81%AD%E9%83%BD%E5%B8%82%E5%AE%98%E6%96%B9&ie=utf-8" target="_blank"></a>
				<a class="wx" href="javascript:;" @click="showWx"></a>
			</li>
			<li class="variable">
				<div class="swiper-container swiper-banner">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide" v-for="(banner, index) in banner">
			            	<a :href="banner.href">
							<img :src="banner.img" />
						</a>
			            </div>
			        </div>
			   </div>
			</li>
			<li class="movie">
				<a href="javascript:;" @click="playVideo">
					<img src="../assets/images/contents_movie.jpg" />
					<span>
						<h3>《消灭都市》PV</h3>
					</span>
					<i class="play" ></i>
				</a>
			</li>
			<li>
				<router-link to="/character" tag="a">
					<img src="../assets/images/contents_character1_sp.jpg" />
					<span>
						<h3>角色介绍</h3>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/tamashii" tag="a">
					<img src="../assets/images/contents_character2_sp.jpg" />
					<span>
						<h3>念灵介绍</h3>
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/story" tag="a">
					<img src="../assets/images/contents_movie_old_02.jpg" />
					<span>
						<h3>故事介绍</h3>
					</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data(){
			return {
				banner: []
			}
		},
		created() {
			this.fetchData();
		},
		mounted(){
		},
		methods: {
			fetchData(){
				var _this = this;
				this.$http.get('http://sta-api.opd2c.com:8080/xmds/api_page_show.ashx?pid=0301').then(function(res){
					_this.banner = res.data;
					if(_this.banner.length == 1) return;
					_this.$nextTick(() => {
						var swiper = new Swiper('.swiper-banner', {
					        effect: 'cube',
					        grabCursor: true,
					        autoplay : 4000,
					        loop : true,
					        cube: {
					            shadow: false,
					            slideShadows: false,
					            shadowOffset: 20,
					            shadowScale: 0.94
					        }
					    });
					})
				}).catch(function(err){
					console.log(err);
				});
			},
			showWx(){
				this.$store.dispatch('showWx');
			},
			playVideo(){
				this.$store.dispatch('playVideo');
			}
		}
	}
</script>