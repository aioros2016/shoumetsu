<template>
	<div class="story">
		<ul>
			<li><img src="../assets/images/story/story_1.png" /></li>
			<li><img src="../assets/images/story/story_2.png" /></li>
			<li><img src="../assets/images/story/story_3.png" /></li>
			<li><img src="../assets/images/story/story_4.png" /></li>
			<li><img src="../assets/images/story/story_5.png" /></li>
			<li><img src="../assets/images/story/story_6.png" /></li>
			<li><img src="../assets/images/story/story_7.png" /></li>
			<li><img src="../assets/images/story/story_8.png" /></li>
			<li><img src="../assets/images/story/story_9.png" /></li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},
		mounted(){
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
				var aLi = document.querySelectorAll('.story li');
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var clientH = document.documentElement.clientHeight;
				
				for (var i = 0; i < aLi.length; i++) {
					var oLi = aLi[i];
					var top = getPos(oLi).top;
					console.log(top+"|"+scrollTop+"|"+clientH)
					if (top < scrollTop + clientH) {
						oLi.className = "animated";
					}else{
						oLi.className = "";
					};
				};
			};
			
			(function (){
				var total = 9;
				var count = 1;
				for (var i = 1; i < total; i++) {
					var oImg = new Image();
					oImg.src = require("../assets/images/story/story_" + i + ".png");
					oImg.onload = function() {
						count++;
						if(count == total) loadImgs();
					};
				};
			}());
			
			window.addEventListener('scroll', loadImgs, false);
		}
	}
</script>