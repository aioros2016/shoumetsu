angular.module('modSwiper', [])
.controller('characterController', ['$scope', function($scope){
	
}])
.directive('swiperCharacter', function(){
	return {
		restrict: 'A',
		template: '	<div class="popup-box">\
						<div class="view-photo"></div>\
						<a class="arrow-left" ng-click="prevItem($event)" href="javascript:;"></a>\
						<a class="arrow-right" ng-click="nextItem($event)" href="javascript:;"></a>\
						<div class="swiper-container swiper-character">\
							<div class="swiper-wrapper">\
								<div class="swiper-slide" ng-repeat="item in character" on-finish-render="ngRepeatFinished">\
									<div class="inner-box">\
										<div class="figure">\
											<img class="img" ng-src="{{item.img}}">\
											<img class="bg swiper-lazy" ng-src="{{item.bg}}">\
										</div>\
										<div class="info">\
											<div class="title">\
												<span class="nickname">{{item.nickname}}</span>\
												<h3>{{item.name}}</h3>\
											</div>\
											<div class="text" ng-bind-html="item.content|showAsHtml"></div>\
										</div>\
									</div>\
								</div>\
							</div>\
					        <div class="swiper-button-next"></div>\
					        <div class="swiper-button-prev"></div>\
						</div>\
						<div class="btn-close" ng-click="hideCharacter()"></div>\
					</div>'
	}
});