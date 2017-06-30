angular.module('modHome', ['modSwiper', 'modSwiper2'])
.controller('homeController', ['$scope', '$http', '$interval', function($scope, $http, $interval){
	
	function getNotice(){
		$http.get('http://sta-api.opd2c.com:8080/xmds/api_page_noticdetail.ashx').success(function (data){
			$scope.notice = data[0];
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
	getNotice();
	
	$scope.banner = [{
		"img": "images/event_banner.jpg",
		"href": "javascript:;"
	}];
	
	function getBanner(){
		$http.get('http://sta-api.opd2c.com:8080/xmds/api_page_show.ashx?pid=0301').success(function (data){
			$scope.banner = data;
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
	getBanner();
	
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		(function(){
			var oBox = $('.event-banner');
			var oList = $('.event-banner ul');
			var aBanner = $('.event-banner ul li');
			var aPoint = $('.event-banner ol li');
			var iWidth = $('.event-banner ul li:eq(0)').width();
			$scope.iNow = 0;
			var iSpeed = 4000;
			var timer = null;
			oList.css("width", iWidth * aBanner.length);
			
			function next() {
				$scope.iNow++;
				if ($scope.iNow == aBanner.length) {
					$scope.iNow = 0;
				}
				tab();
			};
			
			if($scope.banner.length == 1) return;
			timer = setInterval(next, iSpeed);
			
			oBox.mouseover(function(){
				clearInterval(timer);
			});
			
			oBox.mouseout(function() {
				timer = setInterval(next, iSpeed);
			});
			
			function tab() {
				oList.stop().animate({
				    left: '-'+ iWidth * $scope.iNow +'px'
				}, 500);
				aPoint.removeClass('active');
				aPoint.eq($scope.iNow).addClass('active');
			};
			
			aPoint.mouseover(function(){
				$scope.iNow = $(this).index();
				tab();
			});
			
			$scope.$on('$stateChangeStart', function(){
				clearInterval(timer);
			});
		}());
	});
	
	// 显示弹出层
	$scope.openModel = function(){
		$scope.$emit('showModel', true);
	};
	
	// 播放视频
	$scope.playVideo = function(){
		$scope.$emit('playVideo', true);
	};
	
	// 显示二维码
	$scope.openQr = function(){
		$scope.$emit('openQr', true);
	}
	
	// 首页念灵数量
	$scope.homeTamashii = [];
	for(var i=0; i<$scope.tamashii.length; i++){
		$scope.homeTamashii.push($scope.tamashii[i]);
	};
	$scope.homeTamashii.length = 26;
	
	// 显示角色弹层
	$scope.showCharacter = function(index){
		var characterObj = {
			state: true,
			index: index
		}
		$scope.$emit('showCharacter', characterObj);
	};
	
	// 显示念灵弹层
	$scope.showTamashii = function(index){
		var tamashiiObj = {
			state: true,
			index: index
		}
		$scope.$emit('showTamashii', tamashiiObj);
	};
}]);