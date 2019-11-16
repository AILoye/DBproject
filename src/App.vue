<template>
  <div id="app">
    <keep-alive exclude="Detail,Search">
    <router-view></router-view>
    <keep-alive include="beanrec,homelife">

    </keep-alive>
    <!-- <MessageBox/> -->
    </keep-alive>
  </div>
  
</template>

<script>
// import TabBar from "@common/components/tabBar"
// import MessageBox from "./lib/messageBox"


export default {
  name:"App",
  components:{
    // MessageBox
  },
  
}
</script>
<style>
#app{
  height: 100%;
}
</style>
