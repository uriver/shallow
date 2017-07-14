<template>
	<div class="categroy-container">
		<div class="motto">
			<div class="category-img">
				<img src="../../assets/category.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				motto:"永远不要试图和生气中的女人讲道理。 ——Shallow"
			}
		}
	}
</script>

<style lang="less" scoped>
	.categroy-container{
		width: 100%;
	}
	.motto{
		width: 600px;
		text-align: center;
		font-size: 15px;
		margin: auto auto;
		color:#B2B0B0;
	}
	.category-img{
		width: 300px;
		margin-left: 100px;
	}
</style>
