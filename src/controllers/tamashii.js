angular.module('modTamashii', [])
.controller('tamashiiController', ['$scope', function($scope){
	
	// 显示念灵弹层
	$scope.showTamashii = function(index){
		var tamashiiObj = {
			state: true,
			index: index
		}
		$scope.$emit('showTamashii', tamashiiObj);
	};
	
	// 隐藏念灵弹层
	$scope.hideTamashii = function(){
		$scope.$emit('hideTamashii', false);
		var oBody = document.getElementsByTagName('body')[0];
		oBody.className = '';
	};
}]);