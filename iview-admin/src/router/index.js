import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { getToken, canTurnTo } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

const LOGIN_PAGE_NAME = 'login'

const LOGIN_PAGE_NAME1 = 'index'
router.beforeEach((to, from, next) => {

    iView.LoadingBar.start()
    const token = getToken()
  // if (to.name == "index"){
  //
  //   console.log("==")
  //   next({
  //     name: LOGIN_PAGE_NAME1 // 跳转到登录页
  //   })
  // }else {
  //   console.log("--")
  // }
   if (!token && to.name !== LOGIN_PAGE_NAME) {
     // 未登录且要跳转的页面不是登录页
     next({
       name: LOGIN_PAGE_NAME // 跳转到登录页
     })

   } else if (!token && to.name === LOGIN_PAGE_NAME) {
     // 未登陆且要跳转的页面是登录页
     next() // 跳转
   } else if (token && to.name === LOGIN_PAGE_NAME) {
     // 已登录且要跳转的页面是登录页
     next({
       name: 'home' // 跳转到home页
     })
   } else {

     next()

   }



  })

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
