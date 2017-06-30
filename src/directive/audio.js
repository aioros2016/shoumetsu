angular.module('modAudio', [])
.controller('audioController', ['$scope', function($scope){
	if (window.navigator.userAgent.indexOf("MSIE 8") != -1) {
		var oCtrl = document.getElementById('audioCtrl');
		oCtrl.className += ' hide';
	}
	
	// 暂停播放
	$scope.audioToggle = function(){
		var oAudio = document.getElementById('bgm');
		var oMenu = document.getElementById('audioCtrl').getElementsByTagName('a')[0];
		
		if(!oAudio.paused){
			oAudio.pause();
			oMenu.className = 'btn-play';
		}else{
			oAudio.play();
			oMenu.className = 'btn-pause';
		}
		
	};
}])
.directive('audio', function(){
	return {
		restrict: 'A',
		template: '	<audio id="bgm" autoplay="autoplay" loop="loop">\
						<source src="/audio/lalala.mp4" type="audio/mpeg" />\
					</audio>\
					<div class="audioCtrl" id="audioCtrl">\
						<a class="btn-pause" href="javascript:;" ng-click="audioToggle()"></a>\
					</div>'
	}
});