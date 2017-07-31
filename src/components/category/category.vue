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
				<li v-for="item in allCate"><span @click="showTitle(item)">{{item.cateName}}</span> ({{item.articleNum}})</li>
			</ul>
		</div>
		<transition name="fade">
		<div class="showCate2" v-if="!chosed">
			<span class="nowCate">当前分类：</span><span class="chosedClass">{{myCate}}</span>
		</div>
		</transition>
		<div class="showTitle">
			<ul>
				<li v-for="item in showItems"><span class="timeSet">{{item.time}}</span><router-link :to="{path:'/article',query:{id:item.inquire}}">{{item.title}}</router-link></li>
			</ul>
		</div>

		<div class="change-container">
			<div class="changePage">
				<div class="inline" @click="lastPage"><img src="../../assets/back.svg" width="60px" height="30px;"></div>
				<div class="getPosition"></div>
				<div class="showPage">{{nowPage}} / {{pages}}</div>
				<div class="inline" @click="nextPage"><img src="../../assets/next.svg" width="60px" height="30px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				motto:"永远不要试图和生气中的女人讲道理。 ——Shallow",
				chosed:true,
				myCate:'',
				nowPage:1,
				pages:1,
				articleNum:0,
				allCate:[{"cateName":"JavaScript","articleNum":15},{"cateName":"Node","articleNum":5}],
				titles:[{"title":"Vue生命周期简介","time":"2017-7-20"},{"title":"异步与回调","time":"2017-7-20"}],
				showItems:[],
			}
		},
		mounted(){
			this.getCategory();
			this.getTitleByCategory(0,1);
		},
		methods:{
			showTitle:function(item){
				this.myCate = item.cateName;
				this.chosed = !this.chosed;
				this.nowPage = 1;
				this.getTitleByCategory(item.cateID,1);
			},
			getCategory:function(){
				this.axios({
					url:'http://127.0.0.1:3000/users/get-categoryMes',
					method: 'get',
				}).then((res)=> {
					this.allCate = res.data;
				})
			},
			getTitleByCategory:function(id,page){
				this.axios({
					url:'http://127.0.0.1:3000/users/get-article-by-title',
					params:{"cateId":id},
					method: 'get',
				}).then((res)=> {
					this.titles = res.data;
					this.articleNum = res.data.length;
					this.pages = Math.ceil(res.data.length / 8 );
					this.showData();
				})
			},
			showData:function(){
				let page = this.nowPage;
				let startNum = page*8 - 8;
				let endNum = startNum + 8;
				if(endNum > this.articleNum){
					endNum = this.articleNum;
				}
				this.showItems = this.titles.slice(startNum,endNum);
			},
			lastPage:function(){
				if(this.nowPage == 1){
					return;
				}
				this.nowPage --;
				this.showData();
			},
			nextPage:function(){
				if(this.nowPage == this.pages){
					return;
				}
				this.nowPage ++;
				this.showData();
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
		height: 450px;
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
		letter-spacing: 1px;
		width: 220px;
		display: inline-block;
	}
	.change-container{
		width: 1200px;
		height: 40px;
	}
	.changePage{
		width: 230px;
		height: 40px;
		margin: 20px auto;
		position: relative;
	}
	.showPage{
		position: absolute;
		top:0;
		left: 70px;
	}
	.inline{
		display:inline-block;
		cursor: pointer;
	}
	.getPosition{
		width:50px;
		display:inline-block;
	}
</style>
