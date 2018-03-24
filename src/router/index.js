import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import Util from '../libs/util.js'
import {routers, otherRouter, appRouter} from './router'

Vue.use(Router)

// 路由配置文件
const RouterConfig = {
  routes: routers
}

// 注册路由配置文件
export const router = new Router(RouterConfig)

// 路由守卫
router.beforeEach((to, from, next) => {
  // 开启页面加载进度条
  iView.LoadingBar.start();
  // 判断是否登陆，并且下一个是登陆页
    if(!Cookies.get('userName') && to.name === 'login'){
        next()
  // 判断是否登陆，并且下一个不是登陆页
    }else if(!Cookies.get('userName') && to.name !== 'login'){
        next({
          name: 'login'
        })
  // 以登陆，直接通过
    }else{
      // 根据name获取用户权限
      const curRouterObj = Util.getRouterObjByName([otherRouter, ...appRouter], to.name)
      // 判断下一个路由是否需要权限
      if(curRouterObj && curRouterObj.access !== undefined) {
        // 判断用户权限
        if(curRouterObj.access <= parseInt(Cookies.get('access'))){
          // 直接通过
          next()
        }else{
          // 权限不够跳到error页
          next({
            name: 'error-403'
          })
        }
      }else{
        // 下一个路由不需要权限直接通过
        next()
      }
    }
})

router.afterEach((to) => {
  // 关闭页面加载进度条
  iView.LoadingBar.finish();
  // 页面滚动条置顶
  window.scrollTo(0, 0);
})