angular.module('modHeader', [])
.controller('headerController', ['$scope', '$location', '$state', function($scope, $location, $state){
	
	$scope.nav = [{
		"name": "首页",
		"href": "index",
		"hClass": "home"
	},
	{
		"name": "新闻",
		"href": "news",
		"hClass": "news"
	},
	{
		"name": "故事",
		"href": "story",
		"hClass": "story"
		
	},
	{
		"name": "角色",
		"href": "character",
		"hClass": "character"
	},
	{
		"name": "念灵",
		"href": "tamashii",
		"hClass": "tamashii"
	}];
	
	function addEvent(obj, sEv, fn){
		if(obj.addEventListener){
			obj.addEventListener(sEv, fn, false);
		}
		else{
			obj.attachEvent("on" + sEv, fn);
		}
	};
	addEvent(window, 'scroll', fixedNav);
//	window.addEventListener('scroll', fixedNav, false);
	
	function fixedNav(){
		var oHeader = document.getElementById('header');
		if(!oHeader) return;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 170){
			oHeader.className = 'header fixed'
		}else{
			oHeader.className = 'header'
		};
	};
	fixedNav();
	
	function path2title(){
		if($location.path().indexOf('index') >= 0){
			$scope.nowPage = 0;
		}
		else if($location.path().indexOf('news') >= 0){
			$scope.nowPage = 1;
		}
		else if($location.path().indexOf('story') >= 0){
			$scope.nowPage = 2;
		}
		else if($location.path().indexOf('character') >= 0){
			$scope.nowPage = 3;
		}
		else if($location.path().indexOf('tamashii') >= 0 || $location.path().indexOf('detail') >= 0){
			$scope.nowPage = 4;
		}
		else {
			$scope.nowPage = 0;
		};
	};
	$scope.$on('$stateChangeSuccess', function(){
		path2title();
	});
}])
