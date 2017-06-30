angular.module('modModel', [])
.controller('modelController', ['$scope', '$http', function($scope, $http){
	$scope.regTxt = '<p>亲爱的玩家，请填写常用手机号码进行预约，预约成功后我们将以短信的方式通知您！</p>\
					<div class=\"form-area\">\
						<span><input class=\"needsclick\" id=\"phoneNum\" type=\"text\" placeholder=\"输入手机号码\" /></span>\
						<span><input class=\"needsclick\" id=\"codeNum\" type=\"text\" placeholder=\"输入验证码\" /><span class=\"get-code\" id=\"getCode\">发送验证码</span></span>\
					</div>\
					<div class=\"button-box\">\
						<a class=\"btn pass submitId\" href=\"javascript:;\">确认</a>\
						<a class=\"btn cancel\" href=\"javascript:;\">取消</a>\
					</div>';
	
	$scope.forgetTxt = '<p>找回密码</p>\
						<div class=\"form-area\">\
							<span><input class=\"needsclick\" id=\"phoneNum\" type=\"text\" placeholder=\"输入手机号码\" /></span>\
							<span><input class=\"needsclick\" id=\"codeNum\" type=\"text\" placeholder=\"输入验证码\" /><span class=\"get-code\" id=\"getCode\">获取验证码</span></span>\
							<span><input class=\"needsclick\" id=\"passWord\" type=\"password\" placeholder=\"输入新密码(6-16位字母或数字)\" /></span>\
						</div>\
						<div class=\"button-box\">\
							<a class=\"btn pass submitPass\" href=\"javascript:;\">确认</a>\
							<a class=\"btn cancel\" href=\"javascript:;\">取消</a>\
						</div>';
	
	// 弹层内容
	$scope.modelContent = $scope.regTxt;
	
	// 关闭弹层
	$scope.hideModel = function(){
		$scope.$emit('showModel', false);
		$scope.modelContent = $scope.regTxt;
	};
	
	// 正则表达式
	$scope.regExp = {
		mobile: /^1[3-8]\d{9}$/,
		code: /^\d{4}$/
	};
	
	// 事件委托
	$scope.eventSend = function(event){
		var phoneNum = document.getElementById('phoneNum');
		var passWord = document.getElementById("passWord");
		var codeNum = document.getElementById("codeNum");
		var getCode = document.getElementById("getCode");
		var codeReady = true;
		var bOk = true;
		
		// 正则效验
		$scope.verification = function(){
			if(phoneNum && !$scope.regExp['mobile'].test(phoneNum.value)){
				alert("手机号输入有误");
				bOk = false;
				return;
			}
			if(codeNum && !$scope.regExp['code'].test(codeNum.value)){
				alert("验证码输入有误");
				bOk = false;
				return;
			}
			if(passWord && passWord.value.length < 6){
				alert("密码不能小于6位");
				bOk = false;
				return;
			}
		};
		
		// 数据交互
		$scope.fetchData = function(options){
			options = options || {};
			options.host = options.host || '';
			options.port = options.port || '';
			options.path = options.path || '';
			options.data = options.data || {};
			options.msg = options.msg || '';
			$http.post(options.host + options.port + options.path, options.data).success(function (res){
				if(res.code === 0 && res.msg === ''){
					phoneNum.innerHTML = '';
					passWord.innerHTML = '';
					getCode.innerHTML = '';
					$scope.modelContent = '<strong class="result">'+ options.msg +'</strong>';
				}else{
					alert(res.msg);
				}
			}).error(function (err){
				$scope.modelContent = '<strong class="result">网络超时,请稍后再试</strong>';
				console.log(err);
			});
		};
		
		// 跳转到找回密码
		if (event.target.nodeName === 'A' && event.target.className == 'forget') {
			$scope.modelContent = $scope.forgetTxt;
		};
		
		// 关闭弹层
		if (event.target.nodeName === 'A' && event.target.className == 'btn cancel') {
			$scope.$emit('showModel', false);
			$scope.modelContent = $scope.regTxt;
		};
		
		// 获取验证码
		if (event.target.nodeName === 'SPAN' && event.target.className == 'get-code') {
			if(!codeReady) return;
			if(!$scope.regExp['mobile'].test(phoneNum.value)){
				alert("手机号输入有误");
				return;
			}
			codeReady = false;
			getCode.className += ' active';
			
			$http.post($scope.host + $scope.port + $scope.sendCode,{
				phoneNumber: phoneNum.value
			}).success(function(res){
				if(res.code === 0 && res.msg === ''){
					var timer = null;
					var time = 60;
					timer = setInterval(function(){
						getCode.innerHTML =  time + "秒后可以重新发送";
						time--;
						if (time < 0) {
							clearInterval(timer);
							getCode.innerHTML = "获取验证码";
							codeReady = true;
							getCode.className = 'get-code';
						}
					}, 1000);
				}else{
					$scope.modelContent = '<strong class="result">'+ res.msg +'</strong>';
					codeReady = true;
					getCode.className = 'get-code';
				}
			}).error(function(err){
				$scope.modelContent = '<strong class="result">网络超时,请稍后再试</strong>';
				console.log(err);
			});
		};
		
		// 注册登录
		if (event.target.nodeName === 'A' && event.target.className == 'btn pass submitId') {
			$scope.verification();
			if(!bOk) return;
			
			$http.post($scope.host + $scope.port + $scope.registered,{
				phoneNumber: phoneNum.value,
				code: parseInt(codeNum.value)
			}).success(function (res){
				if(res.code === 0 && res.msg === ''){
					phoneNum.innerHTML = '';
					getCode.innerHTML = '';
					$scope.modelContent = '<strong class="result">恭喜您预约成功！</strong>';
					$http.get($scope.host2 + $scope.port + $scope.number).success(function (res){
						$scope.people = res.count;
					}).error(function (){
						console.log('载入失败，请稍后重试！');
					});
				}else{
					alert(res.msg);
				}
			}).error(function (err){
				$scope.modelContent = '<strong class="result">网络超时,请稍后再试</strong>';
				console.log(err);
			});
		};
		
		// 找回密码
		if (event.target.nodeName === 'A' && event.target.className == 'btn pass submitPass') {
			$scope.verification();
			if(!bOk) return;
			
			$scope.fetchData({
				host: $scope.host,
				port: $scope.port,
				path: $scope.forget,
				data: {
					phoneNumber: phoneNum.value,
					password: passWord.value,
					code: parseInt(codeNum.value)
				},
				msg: '恭喜您密码已重置'
			});
		};
	};
}])
.directive('model', function(){
	return {
		restrict: 'A',
		template: '	<div class="model">\
						<a class="btn-close" href="javascript:;" ng-click="hideModel()"></a>\
						<div class="model-box">\
							<div class="inner-box" ng-bind-html="modelContent|showAsHtml" ng-click="eventSend($event)"></div>\
						</div>\
					</div>'
	}
});