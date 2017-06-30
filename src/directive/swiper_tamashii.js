angular.module('modSwiper2', [])
.controller('tamashiiController', ['$scope', function($scope){
	
}])
.directive('swiperTamashii', function(){
	return {
		restrict: 'A',
		template: '	<div class="popup-box">\
						<div class="view-photo"></div>\
						<a class="arrow-left" ng-click="prevItem($event)" href="javascript:;"></a>\
						<a class="arrow-right" ng-click="nextItem($event)" href="javascript:;"></a>\
						<div class="swiper-container swiper-tamashii">\
							<div class="swiper-wrapper">\
								<div class="swiper-slide" ng-repeat="item in tamashii" on-finish-render="ngRepeatFinished">\
									<div class="inner-box">\
										<div class="figure">\
											<img class="img" ng-src="{{item.img}}">\
											<img class="bg swiper-lazy" ng-src="{{item.bg}}">\
										</div>\
										<div class="info">\
											<div class="title">\
												<span class="nickname">{{item.nickname}}</span>\
												<h3>{{item.name}}</h3>\
												<span class="attribute">属性：<img class="img swiper-lazy" ng-src="{{item.attribute}}"></span>\
											</div>\
											<div class="text" ng-bind-html="item.content|showAsHtml"></div>\
										</div>\
									</div>\
								</div>\
							</div>\
					        <div class="swiper-button-next"></div>\
					        <div class="swiper-button-prev"></div>\
						</div>\
						<div class="btn-close" ng-click="hideTamashii()"></div>\
					</div>'
	}
});