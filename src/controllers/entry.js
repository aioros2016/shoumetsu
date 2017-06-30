angular.module('modEntry', [])
.controller('entryController', ['$scope', '$http', '$location', '$anchorScroll', function($scope, $http, $location, $anchorScroll){
	
	// 预约人数
	$scope.people = 0;
	
	// 预约奖励
	$scope.item = [{
		"iClass": "item1"
	}, 
	{
		"iClass": "item2"
	},
	{
		"iClass": "item3"
	},
	{
		"iClass": "item4"
	}];
	
	// 获取人数
	$scope.getNum = function(){
		$http.get($scope.host + $scope.port + $scope.number).success(function (res){
			$scope.people = res.count;
			$scope.step();
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
	$scope.getNum();
	
	// 预约逻辑
	$scope.step = function(){
		if($scope.people >= 10000){
			$scope.item[0].iClass = "item1 pass";
		};
		if($scope.people >= 30000){
			$scope.item[1].iClass = "item2 pass";
		};
		if($scope.people >= 50000){
			$scope.item[2].iClass = "item3 pass";
		};
		if($scope.people >= 100000){
			$scope.item[3].iClass = "item4 pass";
		};
	};
	
	// 预约奖励显示隐藏
	$scope.reward = false;
	$scope.showReward = function(){
		$scope.reward = true;
	};
	$scope.hideReward = function(){
		$scope.reward = false;
	};
	
	// 显示弹出层
	$scope.openModel = function(){
		$scope.$emit('showModel', true);
	};
	
	// 播放视频
	$scope.playVideo = function(){
		$scope.$emit('playVideo', true);
	};
	
	// 监听页高
	var clientH = document.documentElement.clientHeight;
	var footer = document.getElementById('entry-footer');
	var pageH = document.getElementById('page-wrapper').offsetHeight;
	var footH = footer.offsetHeight;
	if(footH + pageH < clientH){
		footer.className += ' fixed';
	}else{
		footer.className = 'entry-footer';
	}
}]);