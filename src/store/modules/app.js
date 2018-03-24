import {otherRouter, appRouter} from '@/router/router'
import Cookies from 'js-cookie'

const app = {
    state: {
        menuList: [],
        access: true, //当前用户权限
        routers: [
            otherRouter,
            ...appRouter
        ]
    },
    mutations: {
        filterRouter(state){
            let newMenuList = []
            let app = JSON.parse(JSON.stringify(appRouter)); 
            let access = Cookies.get('access')
            // 遍历路由数组
            app.forEach((item) => {
                // 判断当前路由是否有权限
                if(item.access == undefined){
                    // 不需要权限的路由
                    // 判断当前子路由的权限
                    if(item.children.length == 1){
                        newMenuList.push(item)
                    }else{
                        let len = Object.create(item)
                        let child = []
                        child = len.children.filter((item) => {
                            if(item.access !== undefined){
                                if(item.access <= access){
                                    return item;
                                }
                            }else{
                                return item
                            }
                        })
                        len.children = child
                        newMenuList.push(len)
                    }
                }else{
                    // 需要权限的路由
                    // 判断当前路由的子路由的权限
                    
                    if(item.access <= access){
                        // 当前路由的权限大于用户的权限值,不显示该路由
                        newMenuList.push(item)
                    }else{
                        // 当前路由的权限小于用户的权限值,显示该路由
                        if(item.children.length == 1){
                            // 子路由数量为一时直接放到菜单里
                            if(item.access <= access){
                                newMenuList.push(item)
                            }
                        }else{
                            // 当前路由
                            let len = Object.create(item)
                            // 创建一个数组用以存放子路由
                            let child = []
                            // 对子路由进行过滤
                            child = len.children.filter(child => {
                                // 判断权限
                                if(child.access !== undefined){
                                    // 但子路由的权限小于等于用户权限时不过滤
                                    if(child.access <= access){
                                        return child;
                                    }
                                }else{
                                    // 当前子路由没有权限，不过滤
                                    return child
                                }
                            })
                            len.children = child
                            newMenuList.push(len)
                        }
                    }
                }
            })
            state.menuList = newMenuList 
        }
    }
}
export default app