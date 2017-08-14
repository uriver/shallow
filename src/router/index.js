import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog/blog'
import Article from '@/components/blog/article'
import Category from '@/components/category/category'
import About from '@/components/about/about'
import Timeaxis from '@/components/time/timeaxis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
      	{ path: '/blog', component:Blog ,name:'主页'},
        { path: '/article', component:Article ,name:'文章'},
        { path: '/category', component:Category ,name:'分类'},
        { path: '/about', component:About ,name:'关于'},
        { path: '/timeaxis', component:Timeaxis ,name:'时间轴'}
      ]
    }
  ]
})


//以下代码是路由懒加载代码，由于项目太小，不需要懒加载，所以注释掉了，另外，使用懒加载的时候要把最上面的Blog及以下import注释掉
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home,
//       children:[
//         { path: '/blog', component:resolve =>require(['@/components/blog/blog'],resolve) ,name:'主页'},
//         { path: '/article', component:resolve =>require(['@/components/blog/article'],resolve) ,name:'文章'},
//         { path: '/category', component:resolve =>require(['@/components/category/category'],resolve) ,name:'分类'},
//         { path: '/about', component:resolve =>require(['@/components/about/about'],resolve),name:'关于'},
//         { path: '/timeaxis', component:resolve =>require(['@/components/time/timeaxis'],resolve),name:'时间轴'}
//       ]
//     }
//   ]
// })
