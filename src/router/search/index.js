export default {
    name:"search",
    path:"/search",
    component:_=>import("@pages/search"),
    meta:{
        flag:true,
        requiredAuth:false
    },
}