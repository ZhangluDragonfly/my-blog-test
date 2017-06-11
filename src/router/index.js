import Vue from 'vue'
import Router from 'vue-router'
import blogPage from '@/components/blogPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogPage',
      component: blogPage
    }
  ]
})
