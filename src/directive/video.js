angular.module('modVideo', [])
.controller('videoController', ['$scope', function($scope){
	
	// 暂停播放
	$scope.stopVideo = function(){
		$scope.$emit('stopVideo', false);
	};
}])
.directive('video', function(){
	return {
		restrict: 'A',
		template: '	<div id="video-box" class="video-box">\
						<video _src="video/movie.mp4" controls loop>\
							<object name="wmode" align="middle" width="600" height="338" classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000>\
								<param name="FlashVars" VALUE=\'config={"play":null,"playlist":[{"url":"http://thecroods.opd2c.com/images/cover.jpg","scaling":"fit","fadeInSpeed":0,"fadeOutSpeed":0},{"url":"http://xmds2.opd2c.com/video/movie.mp4","autoPlay":false,"autoBuffering":true,"scaling":"fit","fadeInSpeed":0,"fadeOutSpeed":0}],"clip":{"scaling":"fit","fadeInSpeed":0,"fadeOutSpeed":0},"canvas":{"backgroundGradient":"none","backgroundColor":"#000000"},"plugins":{"controls":{"url":"http://xmds.opd2c.com/templets/site/webjs/flowplayer.controls.swf","opacity":0.8,"backgroundColor":"#181818","backgroundGradient":"none","fullscreen":true,"autoHide":{"fullscreenOnly":false,"enabled":true,"hideStyle":"fade","mouseOutDelay":0}}},"playerId":"fp_33885030"}\'>\
					            <param name="Movie" value="http://xmds.opd2c.com/templets/site/webjs/flowplayer.swf">\
					            <param name="Src" value="http://xmds.opd2c.com/templets/site/webjs/flowplayer.swf">\
					            <param name="allowScriptAccess" value="sameDomain">\
					            <param name="wmode" value="opaque">\
					            <param name="movie" value="http://xmds2.opd2c.com/video/movie.mp4">\
					            <param name="quality" value="high">\
					        </object>\
					    </video>\
					    <a class="btn-close-video" href="javascript:;" ng-click="stopVideo()">关闭视频</a>\
					</div>'
	}
});