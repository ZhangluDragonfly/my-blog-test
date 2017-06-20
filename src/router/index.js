import Vue from 'vue'
import Router from 'vue-router'
import blogPage from '@/components/blogPage'
import pageArticle from '@/components/pageArticle'
import pageWuhan from '@/components/pageWuhan'
import pageXigua from '@/components/pageXigua'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogPage',
      component: blogPage
    },{
        path: '/pageArticle/:name',
        name: 'pageArticle',
        component: pageArticle,
    },{
        path: '/pageWuhan',
        name: 'pageWuhan',
        component: pageWuhan,
    },{
        path: '/pageXigua',
        name: 'pageXigua',
        component: pageXigua,
    }
  ]
})
