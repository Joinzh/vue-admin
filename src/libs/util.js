let util = {

}
util.getRouterObjByName = function(routers, name){
    // 根据name找到对应的路由信息
    if(!name || !routers || !routers.length) {
        return null;
    }
    let routerObj = null;
    for(let item of routers){
        if (item.name === name) {
            return item;
        }
        // 递归
        routerObj = util.getRouterObjByName(item.children, name);
        if(routerObj){
            return routerObj
        }
    }
    return null;
}
export default util
