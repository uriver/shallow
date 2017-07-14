import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog/blog'
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
        { path: '/category', component:Category ,name:'分类'},
        { path: '/about', component:About ,name:'关于'},
        { path: '/timeaxis', component:Timeaxis ,name:'时间轴'}
      ]
    }
  ]
})
