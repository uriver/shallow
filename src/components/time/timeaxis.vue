<template>
	<div class="timeaxis-container">
		<div class="motto">
			<div class="category-img">
				<img src="../../assets/timeaxis.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
		<div class="getPosition">
			<div class="building">开发中</div>
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
	.timeaxis-container{
		width: 100%;
	}
	.motto{
		width: 600px;
		text-align: center;
		font-size: 15px;
		margin: auto auto;
		color:#B2B0B0;
	}
	.timeaxis-img{
		width: 300px;
		margin-left: 100px;
	}
	.getPosition{
		width: 1000px;
		margin: 50px auto;
		overflow: hidden;
		text-align: center
	}
	.building{
		margin: 100px auto;
		width: 300px;
		height: 40px;
		font-size:24px;
		border: 1px solid #e6e6e6;
		padding: 20px;
	}
</style>
