angular.module('modQr', [])
.directive('modelQr', function(){
	return {
		restrict: 'A',
		template: '	<span class="model-qr" ng-show="showQr"><img src="images/qr2.jpg" /><em>扫二维码关注消灭都市公众号</em></span>'
	}
});