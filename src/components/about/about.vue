<template>
	<div class="about-container">
		<div class="motto">
			<div class="about-img">
				<img src="../../assets/about.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				motto:"使用文字交流工具不是解决问题的好办法。 ——Shallow"
			}
		}
	}
</script>

<style lang="less" scoped>
	.about-container{
		width: 100%;
	}
	.motto{
		width: 600px;
		text-align: center;
		font-size: 15px;
		margin: auto auto;
		color:#B2B0B0;
	}
	.about-img{
		width: 300px;
		margin-left: 100px;
	}
</style>
