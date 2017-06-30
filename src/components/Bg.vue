<template>
	<div class="bg-box">
		<ul id="scene" data-scalar-x="3" data-scalar-y="3">
			<li class="bg_sky layer" data-depth="0.10">
				<img src="../assets/images/bg_sky.png">
			</li>
		    <li class="bg_icetower layer" data-depth="0.30">
		      <img src="../assets/images/bg_icetower.png">
		    </li>
		    <li class="bg_buildings layer" data-depth="0.60">
		      <img src="../assets/images/bg_buildings.png">
		    </li>
		    <li class="bg_flare layer" data-depth="0.16">
		      <img src="../assets/images/bg_flare.png">
		    </li>
		    <li class="bg_silhouette layer" data-depth="0.90">
		      <img src="../assets/images/bg_silhouette.png">
		    </li>
		    <li class="bg_grass layer" data-depth="1.00">
		      <img src="../assets/images/bg_grass.png">
		    </li>
		    <li class="bg_bottom layer" data-depth="1.00">
		      <img src="../assets/images/bg_bottom.png">
		    </li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted(){
			var scene = document.getElementById('scene');
			var parallax = new Parallax(scene);
		}
	}
</script>