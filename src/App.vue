<template>
  <div id="app">
    <router-view></router-view>
    <keep-alive include="beanrec,homelife">

    </keep-alive>
    <!-- <MessageBox/> -->
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
