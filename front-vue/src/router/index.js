import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    }
  ]
})
