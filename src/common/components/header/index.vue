<template>
  <div class="header">
        <div class="left-box">
            <a href="javascript:0">
                <h1 class="logo">豆瓣</h1>
            </a>
            <form class="search">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜索" />
            </form>
        </div>
        <div class="header-right">
            <a class="exit-btn">退出登录</a>
            <a href="javascript:0" class="iconfont icon-diannao"></a>
        </div>
  </div>
</template>

<script>
export default {
    name:"Header"
};
</script>


<style >
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.5rem;
    padding: 0 0.15rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.left-box{
    display: flex;
    align-items: center;
}
.left-box a{
    height: 0.32rem;
    width: 0.54rem;
}
.logo{
    color: #42bd56;
    font-size: 0.2rem;
    font-weight: bolder;
}
.search{
    width: 1rem;
    height: 0.3rem;
    position: relative;
}
.search input{
    border: 1px solid #dfdfdf;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    font-size: 0.14rem;
    padding-left: 0.3rem;
    background-color: #f7f7f7;
    color: rgba(0,0,0,0.25);
}
.search i{
    position: absolute;
    left: 0.08rem;
    top: 0.07rem;
    color: rgba(0,0,0,0.25);
}

.header-right a{
    font-size: .15rem;
    font-weight: normal;
    color: #42bd56;
}
.exit-btn{
    padding: 0 .15rem;
}
</style>