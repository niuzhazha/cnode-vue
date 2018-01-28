import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import List from '@/components/List'
import ListDetails from '@/components/ListDetails'
import AuthorDetails from '@/components/AuthorDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/listdetails/:id',
      name: 'ListDetails',
      component: ListDetails
    },
    {
      path: '/authordetails/:loginname',
      name: 'AuthorDetails',
      component: AuthorDetails
    }
  ]
})
