// 默认组件
import Main from '@/views/Main.vue';
// 不在主页面显示的路由
export const loginRouter = {
    path: '/login',
    name: 'login',
    title: 'login',
    meta: {
        title: 'Login - 登陆'
    },
    component: () => import('@/views/login.vue')
}
export const error403 = {
    path: '/error403',
    name: 'error-403',
    title: '没有权限',
    meta: {
        title: 'error - 403'
    },
    component: () => import('@/views/error/error-403.vue')
}
// 在主页显示但不在左侧显示的路由
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {
            path: 'home',
            title: {i18n: 'home'}, 
            name: 'home-index',
            component: () => import('@/views/home/home.vue')
        }
    ]
}
// 在主页显示也在左侧显示的路由
export const appRouter = [
    {
        path: '/echarts',
        icon: 'playstation',
        name: '图表',
        component: Main,
        children: [
            {
                path: 'pie',
                icon: 'pie-graph',
                name: '饼图',
                component: () => import('@/views/echarts/pie.vue')
            },
            {
                path: 'stack',
                icon: 'connection-bars',
                name: '柱状图',
                component: () => import('@/views/echarts/stack.vue')
            },
            {
                path: 'map',
                icon: 'map',
                name: '地图',
                component: () => import('@/views/echarts/map.vue')
            },
            {
                path: 'line',
                icon: 'ios-pulse',
                name: '折线图',
                component: () => import('@/views/echarts/line.vue')
            },
            {
                path: 'candlestick',
                icon: 'ios-pulse-strong',
                name: '蜡杆图表',
                component: () => import('@/views/echarts/candlestick.vue')
            },
            {
                path: 'scatter',
                icon: 'record',
                access: 1,
                name: '散点图',
                component: () => import('@/views/echarts/scatter.vue')
            }
        ]
    },{
        path: '/data',
        icon: 'record',
        name: '数据',
        component: Main,
        children: [{
            path: 'index',
            icon: 'settings',
            name: '数据管理',
            component: () => import('@/views/data/index.vue')
        }]
    },{
        path: '/grid',
        icon: 'text',
        name: '表格列表',
        component: Main,
        children: [{
            path: 'index',
            icon: 'ios-grid-view',
            name: '表格',
            component: () => import('@/views/grid/index.vue')
        }]
    },{
        path: '/userList',
        icon: 'text',
        name: '用户列表',
        component: Main,
        children: [{
            path: 'index',
            icon: 'android-person',
            name: '用户',
            component: () => import('@/views/user/index.vue')
        }]
    },{
        path: '/setAccess',
        icon: 'record',
        name: '更改权限',
        component: Main,
        children: [{
                path: 'index',
                icon: 'gear-b',
                name: '权限设置',
                component: () => import('@/views/access/setAccess.vue')
        }]
    },{
        path: '/access',
        icon: 'record',
        name: '权限',
        access: 1,
        component: Main,
        children: [{
                path: 'index',
                icon: 'lock-combination',
                access: 1,
                name: '权限测试',
                component: () => import('@/views/access/index.vue')
        }]
    }
]
// 导出路由文件
export const routers = [
    loginRouter,
    error403,
    otherRouter,
    ...appRouter
]