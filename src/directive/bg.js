angular.module('modBg', [])
.controller('bgController', ['$scope', function($scope){
	if (window.navigator.userAgent.indexOf("MSIE 9") != -1 || window.navigator.userAgent.indexOf("MSIE 8") != -1) {
		return;
	}
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
}])
.directive('bg', function(){
	return {
		restrict: 'A',
		template: '	<div class="bg-box">\
						<ul id="scene">\
							<li class="bg_sky layer" data-depth="0.10">\
								<img src="../images/bg/bg_sky.jpg">\
							</li>\
						    <li class="bg_icetower layer" data-depth="0.30">\
						      <img src="../images/bg/bg_icetower.png">\
						    </li>\
						    <li class="bg_buildings layer" data-depth="0.60">\
						      <img src="../images/bg/bg_buildings.png">\
						    </li>\
						    <li class="bg_flare layer" data-depth="0.16">\
						      <img src="../images/bg/bg_flare.png">\
						    </li>\
						    <li class="bg_silhouette layer" data-depth="0.90">\
						      <img src="../images/bg/bg_silhouette.png">\
						    </li>\
						    <li class="bg_grass layer" data-depth="1.00">\
						      <img src="../images/bg/bg_grass.png">\
						    </li>\
						    <li class="bg_bottom layer" data-depth="1.00">\
						      <img src="../images/bg/bg_bottom.png">\
						    </li>\
						</ul>\
					</div>'
	}
});