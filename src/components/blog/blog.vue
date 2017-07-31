<template>
	<div class="blog-container">
		<div class="motto">
			<div class="blog-img">
				<img src="../../assets/blog.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
		<div class="show-blogs">
			<ul>
				<li v-for="item in showItems">
					<router-link :to="{path:'/article',query:{id:item.inquire}}"><h1>{{item.title}}</h1></router-link>
					<div class="blogs-mes">发表于 {{item.time}}</div>
					<div class="blogs-description">{{item.description}}</div>
					<router-link :to="{path:'/article',query:{id:item.inquire}}"><button class="blogs-button">阅读全文 >></button></router-link>
				</li>
			</ul>
		</div>

		<div class="page">
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
			return{
				motto:'笨蛋自以为聪明，聪明人才知道自己是笨蛋。  ——莎士比亚',
				articles:[
						{ "title":"Vue生命周期","time":"2017-7-5","category":"框架","description":"在Vue的学习过程中，遇到了很多由于不理解生命周期而引起的问题。这次对生命周期做了一个比较系统的学习。"	}
					],
				articleNum:0,
				nowPage:1,
				pages:1,
				showItems:[],
			}
		},
		mounted(){
			this.getArticle();
		},
		methods:{
			getArticle:function(){
				let that = this;
				this.axios({
					url:'http://127.0.0.1:3000/users/get-article',
					dataType:'json',
					method: 'get',
				}).then((res)=> {
					that.articles = res.data;
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
				this.showItems = this.articles.slice(startNum,endNum);
			},
			lastPage:function(){
				if(this.nowPage == 1){
					return;
				}
				this.nowPage --;
				this.showData();
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			nextPage:function(){
				if(this.nowPage == this.pages){
					return;
				}
				this.nowPage ++;
				this.showData();
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
		}
	}
</script>

<style lang="less" scoped>
	.blog-container{
		width: 100%;
	}
	.motto{
		width: 600px;
		text-align: center;
		font-size: 15px;
		margin: auto auto;
		color:#B2B0B0;
	}
	.blog-img{
		width: 300px;
		margin-left: 100px;
	}
	.show-blogs{
		width: 100%;
		margin-top: 50px;
	}
	.show-blogs ul{
		margin:0;
		padding: 0;
	}
	.show-blogs li{
		list-style: none;
		border-bottom: 1px solid #e5e5e5;
		padding-left: 140px;
		width: 900px;
		padding-right: 30px;
	}
	.show-blogs h1{
		font-size: 20px;
		color: #555555;
		font-weight: 500;
		margin: 0;
		margin-top: 10px;
		cursor: pointer;
	}
	.blogs-mes{
		font-size: 15px;
		color: #999;
	}
	.blogs-description{
		margin-top: 20px;
		font-size: 16px;
		color: #555;
		height: 50px;
	}
	.blogs-button{
		margin-top: 5px;
		border: none;
		background-color: black;
		color:white;
		width: 120px;
		height: 32px;
		margin-bottom: 20px;
		border: 2px solid black;
		cursor: pointer;
		transition: all 0.3s;
	}
	.blogs-button:hover{
		color:black;
		background-color: white;
	}
	.page{
		margin-top: 50px;
		width: 1200px;
		height: 150px;
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