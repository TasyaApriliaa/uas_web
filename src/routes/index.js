import Vue from 'vue'
import Router from 'vue-router'
// import user from './user'
import Admin from './admin'



Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // user,
    {
      path: '/admin/login',
      name: 'adminlogin',
      component: () => import('@/views/admin/Login.vue'),
      meta: {
        forVisitors: true
      }
    },
    Admin,
    
    {
      path: '/tes',
      name: 'tes',
      component: () => import('@/views/tes.vue')
    }
  ]
})

router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/admin/'
        })
      }else next()
    }else if(to.matched.some(record => record.meta.forAuth)){
      if(! Vue.auth.isAuthenticated()){
        next({
          path: '/admin/login'
        })
      }else next()
    }
    else next()
  }
)

export default router