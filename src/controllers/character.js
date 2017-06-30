angular.module('modCharacter', [])
.controller('characterController', ['$scope', function($scope){
	
	// 显示角色弹层
	$scope.showCharacter = function(index){
		var characterObj = {
			state: true,
			index: index
		}
		$scope.$emit('showCharacter', characterObj);
	};
	
	// 隐藏角色弹层
	$scope.hideCharacter = function(){
		$scope.$emit('hideCharacter', false);
		var oBody = document.getElementsByTagName('body')[0];
		oBody.className = '';
	};
}]);