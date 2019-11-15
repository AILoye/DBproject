<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"aloye-scroll",
    mounted() {
      new BScroll(this.$refs.wrapper)
     
    },
}
</script>

<style>
    
</style>