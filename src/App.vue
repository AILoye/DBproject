<template>
  <div id="app">
    <keep-alive exclude="Detail,Search">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:"App",
  components:{

  }
}
</script>
<style>
#app{
  height: 100%;
}
</style>
