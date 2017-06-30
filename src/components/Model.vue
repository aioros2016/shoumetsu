<template>
	<div class="model" v-show="model.showModel" @click="hideMask($event)">
		<a class="btn-close" href="javascript:;"></a>
		<div class="model-box">
			<div class="inner-box" v-html="model.modelContent" @click="forgetPass($event)"></div>
		</div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data(){
			return {
				content: "",
				codeReady: true,
				regExp: {
					mobile: /^1[3-8]\d{9}$/,
					code: /^\d{4}$/
				}
			}
		},
		mounted(){
		},
		methods: {
			hideMask(event){
				if (event.target.nodeName === 'A' && event.target.className == 'btn cancel' || event.target.className == 'btn-close') {
					this.$store.dispatch('hideMask')
				}
			},
			forgetPass(event){
				var _this = this;
				if (event.target.nodeName === 'A' && event.target.className == 'forget') {
					this.$store.dispatch('showForget')
				}
				if (event.target.nodeName === 'A' && event.target.className == 'btn pass submitId') {
					var phoneNum = document.querySelector("#phoneNum");
					var passWord = document.querySelector("#passWord");
					var getCode = document.querySelector("#getCode");
					if(!_this.regExp['mobile'].test(phoneNum.value)){
						alert("手机号输入有误");
						return;
					}
					if(!_this.regExp['code'].test(getCode.value)){
						alert("验证码输入有误");
						return;
					}
					this.$http.post('http://athenareg.opd2c.com:18080/preregistration/athena',{
						phoneNumber: phoneNum.value,
						code: parseInt(getCode.value)
					}).then(function(res){
						if(res.data.code === 0 && res.data.msg === ''){
							phoneNum.innerHTML = '';
							getCode.innerHTML = '';
							alert('恭喜您预约成功！');
							_this.$store.dispatch('hideMask');
						}else{
							alert(res.data.msg);
							_this.$store.dispatch('hideMask');
						}
					}).catch(function(err){
						console.log(err);
					});
				}
				if (event.target.nodeName === 'A' && event.target.className == 'btn pass submitPass') {
					var phoneNum = document.querySelector("#phoneNum");
					var passWord = document.querySelector("#passWord");
					var getCode = document.querySelector("#getCode");
					if(!_this.regExp['mobile'].test(phoneNum.value)){
						alert("手机号输入有误");
						return;
					}
					if(!_this.regExp['code'].test(getCode.value)){
						alert("验证码输入有误");
						return;
					}
					if(passWord.value.length < 6){
						alert("密码不能小于6位");
						return;
					}
					this.$http.post('http://athenareg.opd2c.com:18080/resetPassword',{
						phoneNumber: phoneNum.value,
						password: passWord.value,
						code: parseInt(getCode.value)
					}).then(function(res){
						console.log(res);
						if(res.data.code === 0 && res.data.msg === ''){
							phoneNum.innerHTML = '';
							passWord.innerHTML = '';
							getCode.innerHTML = '';
							alert('恭喜您密码已重置');
							_this.$store.dispatch('hideMask');
						}else{
							alert(res.data.msg);
							_this.$store.dispatch('hideMask');
						}
					}).catch(function(err){
						console.log(err);
					});
				}
				if (event.target.nodeName === 'SPAN' && event.target.className == 'get-code') {
					if(!_this.codeReady) return;
					var phoneNum = document.querySelector("#phoneNum");
					var getCode = document.querySelector(".get-code");
					if(!_this.regExp['mobile'].test(phoneNum.value)){
						alert("手机号输入有误");
						return;
					}
					_this.codeReady = false;
					getCode.className += ' active';
					this.$http.post('http://athenareg.opd2c.com:18080/sendCode',{
						phoneNumber: phoneNum.value
					}).then(function(res){
						if(res.data.code === 0 && res.data.msg === ''){
							var timer = null;
							var time = 60;
							timer = setInterval(function(){
								getCode.innerHTML =  time + "秒后可以重新发送";
								time--;
								if (time < 0) {
									clearInterval(timer);
									getCode.innerHTML = "获取验证码";
									_this.codeReady = true;
									getCode.className = 'get-code';
								}
							}, 1000);
						}else{
							alert(res.data.msg);
							_this.codeReady = true;
							getCode.className = 'get-code';
						}
					}).catch(function(err){
						console.log(err);
					});
				}
			},
			fetchData(){
				var _this = this;
				this.$http.get('http://192.168.8.177:18080/regcount/athena').then(function(res){
					console.log(res);
					_this.num = res.data.count;
				}).catch(function(err){
					console.log(err);
				});
			}
		},
		computed: mapGetters(['model'])
	}
</script>