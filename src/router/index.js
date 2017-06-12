import Vue from 'vue'
import Router from 'vue-router'
import blogPage from '@/components/blogPage'
import pageQingdao from '@/components/pageQingdao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogPage',
      component: blogPage
    },{
        path: '/pageQingdao',
        name: 'pageQingdao',
        component: pageQingdao,
    }
  ]
})
