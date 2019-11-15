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
import search from "./search"
Vue.use(VueRouter)



const router = new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      redirect:"/dbindex"
    },
    {
      name:"login",
      path:"/login",
      component:_=>import("@pages/login")
    },
    {
      name:"detail",
      path:"/detail/:id/:title",
      component:_=>import("@pages/moviedetail"),
      props:true
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
    commiate,
    search
  ]
})
//全局守卫
router.beforeEach( (to, from, next)=>{
  if(to.path !="/login" && to.meta.requiredAuth){
    if( localStorage . getItem("token")){
      next();
    }else{
      next( {name:"login" , params: {to:to.path}})
    }
  }else{
    next();
  }
})

export default router
