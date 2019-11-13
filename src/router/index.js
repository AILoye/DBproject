import Vue from 'vue'
import VueRouter from 'vue-router'
import dbindex from "./dbindex"
import movie from "./movie"
import book from "./book"
import group from "./group"
import bean from "./bean"
import goods from "./goods"
import cart from "./cart"
import address from "./address"
import order from "./order"
import commiate from "./commiate"
Vue.use(VueRouter)



const router = new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      redirect:"/dbindex"
    },
    dbindex,
    movie,
    book,
    group,
    bean,
    goods,
    cart,
    address,
    order,
    commiate
  ]
})
// 全局守卫
// router . beforeEach( (to, from, next)=>{
//   if(to.path !="/login" && to.meta . requiredAuth){
//     if( localStorage . getItem("token")){
//       next();
//     }else{
//       next( {name:"login" , params: {to:to.path}})
//     }
//   }else{
//     next();
//   }
// })

export default router
