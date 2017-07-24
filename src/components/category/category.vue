<template>
	<div class="categroy-container">
		<div class="motto">
			<div class="category-img">
				<img src="../../assets/category.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
		<div class="showCate" v-show="chosed">
			<ul>
				<li><span @click="showTitle">JavaScript</span> (5)</li>
				<li><span>Node.js</span> (3)</li>
				<li><span>HTML&CSS</span> (4)</li>
				<li><span>随笔</span> (2)</li>
				<li><span>前端工具</span> (1)</li>
				<li><span>JavaScript</span> (3)</li>
				<li><span>其他</span> (7)</li>
			</ul>
		</div>
		<transition name="fade">
		<div class="showCate2" v-if="!chosed">
			<span class="nowCate">当前分类：</span><span class="chosedClass">JavaScript</span>
		</div>
		</transition>
		<div class="showTitle">
			<ul>
				<li><span class="timeSet">2017-7-20 15:30:57</span> Vue生命周期简介</li>
				<li><span class="timeSet">2017-7-20 15:30:57</span> 异步与回调</li>
				<li><span class="timeSet">2017-7-20 15:30:57</span> 我的第一篇博客</li>
				<li><span class="timeSet">2017-7-20 15:30:57</span> 面向对象和面向过程</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				motto:"永远不要试图和生气中的女人讲道理。 ——Shallow",
				chosed:true,
			}
		},
		methods:{
			showTitle:function(){
				this.chosed = !this.chosed;
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
	.showCate{
		width: 1000px;
		margin: 50px auto;
		// border: 1px solid grey;
		overflow: hidden;
		text-align: center;
	}
	.showCate ul{
		margin: 0;
		padding: 0;
		text-align: center;
	}
	.showCate li{
		list-style-type: none;
		display: inline;
		line-height: 40px;
		margin-right: 40px;
		color: grey;
	}
	.showCate li span{
		text-decoration: underline;
		color: #666666;
		cursor: pointer;
	}
	.showCate2{
		width: 1000px;
		margin: 50px auto;
	}
	.nowCate{
		color: grey;
	}
	.chosedClass{
		color:#666666;
		text-decoration: underline;
	}
	.showTitle{
		margin: 50px auto;
		width: 1000px;
	}
	.showTitle ul{
		margin: 0;
		padding: 0;
	}
	.showTitle li{
		line-height: 40px;
		border-bottom: 1px dashed #e1e1e1;
		list-style: none;
		margin-top: 10px;
		padding-left: 30px;
		letter-spacing: 5px;
	}
	.timeSet{
		color:grey;
		font-size: 16px;
		margin-right: 40px;
		letter-spacing: 1px;
	}
</style>
