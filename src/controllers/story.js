angular.module('modStory', [])
.controller('storyController', ['$scope', '$http', '$location', '$anchorScroll', function($scope, $http, $location, $anchorScroll){
	function getPos(obj){
		var l = 0;
		var t = 0;
		while(obj) {
			l += obj.offsetLeft;
			t += obj.offsetTop;
			
			obj = obj.offsetParent;
		}
		return {left:l, top:t};
	};
	
	function loadImgs() {
		var aLi = document.querySelectorAll('.story-list li');
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var clientH = document.documentElement.clientHeight;
		
		for (var i = 0; i < aLi.length; i++) {
			var oLi = aLi[i];
			var top = getPos(oLi).top;
			if (top < scrollTop + clientH) {
				if(i % 2 == 1){
					oLi.className = "even animated";
				}else{
					oLi.className = "odd animated";
				}
			}else{
				if(i % 2 == 1){
					oLi.className = "even";
				}else{
					oLi.className = "odd";
				}
			};
		};
	};
	
	(function (){
		var total = 9;
		var count = 1;
		for (var i = 1; i < total; i++) {
			var oImg = new Image();
			oImg.src = "images/story/story_" + i + ".png";
			oImg.onload = function() {
				count++;
				if(count == total) loadImgs();
			};
		};
	}());
	
	function addEvent(obj, sEv, fn){
		if(obj.addEventListener){
			obj.addEventListener(sEv, fn, false);
		}
		else{
			obj.attachEvent("on" + sEv, fn);
		}
	};
//	if (window.navigator.userAgent.indexOf("MSIE 8") != -1) {
//		return;
//	};
	addEvent(window, 'scroll', loadImgs);
//	window.addEventListener('scroll', loadImgs, false);
}]);