<template>
	<div class="news-box">
		<div class="title detail-title">
			<h2>{{detail.title}}</h2>
			<div class="date">发布于 {{detail.updatedAt}}</div>
		</div>
		<div class="text" v-html="detail.content"></div>
		<div class="no-data" v-show="false">暂无数据...</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this.fetchData(this.$route.params.id);
		},
		data(){
			return {
				detail: {}
			}
		},
		watch:{
			$route(to){
				console.log(to);
				var reg = /Detail\/\d+/;
				if(reg.test(to.path)){
					var articleId = this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('http://admin-xmds.opd2c.com:8081/xmds/api_page_newsdetail.ashx', {
				    params: {
				    	id: id
				    }
			   }).then(function(res){
					_this.detail = res.data.data;
				}).catch(function(err){
					console.log('文章详细载入失败:',err);
				})
			}
		}
	}
</script>