<template>
	<div class="news-box">
		<div class="title">
			<h2>新闻中心</h2>
		</div>
		<div class="list">
			<ul>
				<li v-for="(article, index) in newsList">
					<router-link :to="'/Detail/'+ article.postId" tag="a">{{article.title}}</router-link>
					<em>{{article.datetime.substring(0, 10)}}</em>
				</li>
			</ul>
		</div>
		<div class="page-num" v-show="page.total > 1">
			<a :class="page.current == 1 ? 'lock' : ''" @click="prevPage(page.current)" href="javascript:;">上一页</a>
			<a :class="page.current == page.total ? 'lock' : ''" @click="nextPage(page.current)" href="javascript:;">下一页</a>
		</div>
		<div class="no-data" v-show="page.total == 0">暂无数据...</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				newsList: [],
				page: {}
			}
		},
		mounted(){
			this.fetchData(1);
		},
		methods:{
			fetchData(page){
				var _this = this;
				this.$http.get('http://admin-xmds.opd2c.com:8081/xmds/api_page_newslist.ashx', {
				    params: {
				    	page: page
				    }
				}).then(function(res){
					_this.newsList = res.data.data;
					_this.page = res.data.page;
				}).catch(function(err){
					console.log(err);
				});
			},
			prevPage(page){
				var _this = this;
				if(_this.page.current == 1) return;
				page--;
				this.fetchData(page);
			},
			nextPage(page){
				var _this = this;
				if(_this.page.current == _this.page.total) return;
				page++;
				this.fetchData(page);
			}
		}
	}
</script>