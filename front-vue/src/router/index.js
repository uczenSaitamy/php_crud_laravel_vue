import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import addArticle from '@/components/addArticle'
import editArticle from '@/components/editArticle'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/articles/add',
      name: 'addArticle',
      component: addArticle
    },
    {
      path: '/articles/:id/edit',
      name: 'editArticle',
      component: editArticle
    }
  ]
})
