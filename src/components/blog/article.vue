<template>
	<div class="article-container">
		<div class="markdown-body" v-html="content"></div>
		<div style="height: 200px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id:0,
				content:''
			}
		},
		mounted(){
			this.getUrl();
		},
		methods:{
			getUrl:function(){
				let aUrl = document.URL;
				let str = ["0"];
				if(aUrl.indexOf("id=")!=-1){
					str = aUrl.split("id=");
				}
				this.id = str[1];
				console.log(this.id);
				this.getData();
			},
			getData:function(){
				let that = this;
				this.axios({
					url:'http://127.0.0.1:3000/users/get-content',
					method:'get',
					params:{"inquire":that.id},
				}).then(res=>{
					that.content = res.data[0].content;
				})
			}
		}
	}
</script>

<style scoped>
	.article-container{
		width: 1000px;
		margin: auto auto;
	}
</style>