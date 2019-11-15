<template>
  <div id="app">
    <router-view></router-view>
    <!-- <MessageBox/> -->
  </div>
  
</template>

<script>
// import TabBar from "@common/components/tabBar"
// import MessageBox from "./lib/messageBox"

//引入封装好的js方法
import messageBox from "./lib/messageBox/index";

export default {
  name:"App",
  components:{
    // MessageBox
  },
  created(){
    messageBox({
      title:"附近有甜品店吗",
      content:"不然怎么见到你，周围都是甜蜜的味道呢",
      ok:()=>{
        alert(11111111111)
      }
    })
  }
}
</script>
<style>
#app{
  height: 100%;
}
</style>
