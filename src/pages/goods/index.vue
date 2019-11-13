<template>
    <div>
        商品详情
        <router-link to="/cart" tag="div" class="goods"></router-link>
    </div>
</template>
<script>
export default {
    name:"goods"
}
</script>

<style>
    .goods{
        width:1rem;
        height:1rem;
        background:red;
    }
</style>