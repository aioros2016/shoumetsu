angular.module('modNews', [])
.controller('newsController', ['$scope', '$http', '$stateParams', '$location', '$anchorScroll', function($scope, $http, $stateParams, $location, $anchorScroll){
	
	$scope.host = $location.host() +':'+ $location.port();
	if($location.path().indexOf('/news') >= 0){
		$scope.list = [];
		$scope.page = 1;
		
		// 获取文章列表
		function getArticle(page){
			$scope.curPage = page;
			$http.get('http://'+ $scope.host +'/xmds/api_page_newslist.ashx', {
				params: {
					page: page
				}
			}).success(function (data){
				$scope.list = data.data;
				$scope.page = data.page;
				$scope.curPage = $scope.page.current;
				$scope.totPage = $scope.page.total;
			}).error(function (){
				console.log('载入失败，请稍后重试！');
			});
		};
		console.log();
		$scope.getArticle = getArticle;
		$scope.getArticle($scope.page);
		
		// 下一页
		$scope.nextPage = function(page){
			if($scope.curPage == $scope.totPage) return;
			page++;
			$scope.getArticle(page);
		};
		
		// 上一页
		$scope.prevPage = function(page){
			if($scope.curPage == 1) return;
			page--;
			$scope.getArticle(page);
		};
		
		// 最后一页
		$scope.lastPage = function(page){
			if($scope.curPage == $scope.totPage) return;
			$scope.getArticle(page);
		};
	} else if($location.path().indexOf('/detail') >= 0){
		$scope.postId = $stateParams.id;
		
		// 新闻详情
		$http.get('http://'+ $scope.host +'/xmds/api_page_newsdetail.ashx', {
			params: {
				id: $scope.postId
			}
		}).success(function(res){
			$scope.detail = res.data;
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
}])
.filter('filterDate', function(){
	return function(input){
		input = input.substring(0, 10);
		return input;
	}
});