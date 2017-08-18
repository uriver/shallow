<template>
	<div class="timeaxis-container">
		<div class="motto">
			<div class="category-img">
				<img src="../../assets/timeaxis.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
		<!-- 留言区域 -->

		<div class="words-container">
			<div class="words">
				<h1>Today</h1>
			</div>
		</div>
		<!-- 结束 -->

		<!-- 时间轴 -->
		<div class="timeaxis theLine">

			<section class="timeaxis-block"  v-for="item in showArticles">
				<div class="timeaxis-node"></div>
				<div class="timeaxis-content">
					<router-link :to="{path:'/article',query:{id:item.inquire}}">{{item.title}}</router-link>
					<br>
					<span class="discrip">{{item.description}}</span>
				</div>
				<span class="time">{{item.time}}</span>
			</section> 

		</div>
		<!-- 时间轴 -->

	</div>
</template>

<script>
	export default{
		data(){
			return {
				motto:"精诚所至，金石为开。 ——《庄子·渔父》",
				articles:[],
				showArticles:[],
			}
		},
		mounted(){
			this.getArticle();
			this.bindScroll();
		},
		methods:{
			getArticle:function(){
				let that = this;
				this.axios({
					url:'http://shallownight.com:3000/users/get-article',
					dataType:'json',
					method: 'get',
				}).then((res)=> {
					for(let item in res.data){
						res.data[item].time = res.data[item].time.slice(0,10);
					}
					that.articles = res.data;
					that.showArticles = that.articles.slice(0,7);
				})
			},
			bindScroll:function(){
				//伪瀑布流
				let that = this;
				window.addEventListener('scroll',function(){
					let SHeight = document.body.scrollHeight;
					let STop = document.documentElement.scrollTop || document.body.scrollTop;
					let CHeight = document.documentElement.clientHeight;
					let Slen = that.showArticles.length;
					let Alen = that.articles.length;
					if(SHeight - STop - CHeight == 0){
						if(Slen == Alen){
							return;
						}
						else{
							that.showArticles = (Slen + 4) > Alen ? that.articles.slice():that.articles.slice(0,Slen + 4);
						}
					}
				})
			},
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
	
	/*留言板*/
	.words-container{
		width: 800px;
		height: 65px;
		margin: 0 auto;
	}
	.words{
		box-sizing: border-box;
		text-align: center;
		width: 180px;
		height: 50px;
		box-shadow: 2px 3px 3px #e5e5e5;
		margin: 20px auto;
		cursor: pointer;
		border: 1px solid #e5e5e5;
	}
	.words h1{
		margin: 0;
		padding: 0;
		line-height: 50px;
		font-weight: 400;
		font-size: 22px;
	}
	
	/*轴起始*/
	.timeaxis{
		width: 90%;
		margin: 0 auto;
		position: relative;
		font-size: 18px;
	}
	.timeaxis-block{
		position: relative;
		overflow: hidden;
	}
	/*中间点*/
	.timeaxis-node{
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		height: 16px;
		margin-top: 25px;
		margin-left: -8px;
		background-color: #e5e5e5;
		left: 50%;
		border-radius: 50%;
	}
	.theLine{
		position: relative;
	}
	/*中间线段*/
	.theLine::before {
	    content: '';
	    position: absolute;
	    top: 0;
	    left: 50%;
	    height: 100%;
	    width: 1px;
	    background: #d7e4ed;
	}
	.timeaxis-content{
		width: 45%;
		margin-top: 10px;
	    position: relative;
	    background: white;
	    border: 1px solid #eeeeee;
	    border-radius: 4px;
	    padding: 1em;
	    box-shadow: 0 2px 2px #eeeeee;
	}
	/*三角形*/
	.timeaxis-content::before {
	    content: '';
	    position: absolute;
	    top: 16px;
	    left: 100%;
	    height: 0;
	    width: 0;
	    border: 7px solid transparent;
	    border-left: 7px solid #e5e5e5;
	}
	.timeaxis-block:nth-child(even) .timeaxis-content{
		float: right;
	}
	.timeaxis-block:nth-child(even) .timeaxis-content::after{
		content: '';
	    position: absolute;
	    top: 16px;
	    left: -14px;
	    height: 0;
	    width: 0;
	    border: 7px solid transparent;
	    border-right: 7px solid #e5e5e5;
	}
	.discrip{
		font-size: 16px;
		color: grey;
	}
	.time{
		display: inline-block;
		position: absolute;
		color: grey;
		left: 52.5%;
		top: 23px;
		font-size: 15px;
	}
	.timeaxis-block:nth-child(even) .time{
		left: 40%;
	}
</style>
