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
				<li v-for="item in articles">
					<h1>{{item.title}}</h1>
					<div class="blogs-mes">发表于 {{item.time}} | 分类于 {{item.category}}</div>
					<div class="blogs-intro">{{item.intro}}</div>
					<button class="blogs-button">阅读全文 >></button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				motto:'笨蛋自以为聪明，聪明人才知道自己是笨蛋。  ——莎士比亚',
				articles:[
						{ "title":"Vue生命周期","time":"2017-7-5","category":"框架","intro":"在Vue的学习过程中，遇到了很多由于不理解生命周期而引起的问题。这次对生命周期做了一个比较系统的学习。"	},
						{ "title":"JS的多态和继承","time":"2017-7-10","category":"JS","intro":"多态和继承是面向对象语言的重要的特征。"	},
						{ "title":"Express学习","time":"2017-7-12","category":"框架","intro":"学习nodejs的框架express，加深对node的理解。"	},
						{ "title":"面向过程和面向对象","time":"2017-7-14","category":"其他","intro":"复习面向过程和面向对象，加深对它们的理解，测试在Vue的学习过程中，遇到了很多由于不理解生命周期而引起的问题。多态和继承是面向对象语言的重要的特征。"	},
					]
			}
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
	.blogs-intro{
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
</style>