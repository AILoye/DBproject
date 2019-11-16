<template>
  <div class="header">
        <div class="left-box">
            <a href="/dbindex">
                <h1 class="logo">豆瓣</h1>
            </a>
            <router-link class="search" 
                tag="form"
                to="/search"
            >
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜索" />
            </router-link>
        </div>
        <v-touch class="icon_left" tag="div" @tap="handleBack()">
            <i calss="iconfont" v-if="icon">&#xe646;</i>
        </v-touch>
        <div class="header-right">
            <router-link 
             class="exit-btn"
             tag="a"
             to="/login"
             >{{status}}</router-link >
            <a href="javascript:0" class="iconfont icon-diannao"></a>
        </div>
  </div>
</template>

<script>
import Cookie from "vue-cookies"
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"豆瓣"
        },
        icon:{
            type:Boolean
        }

    },
    methods:{
        handleBack(){
            this.$router.back();
        },
    },
    data(){
        return{
            status:"未登录"
        }
    },
    mounted(){
        if(Cookie.get("userInfo")){//初始状态值为“登录” 如果cookie中存在用户
            // 状态就改为已登录，把用户名设置为状态值
            this.status = (JSON.parse(Cookie.get("userInfo"))[0].phone)
        }
    }
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
.header .icon_left{
    position: absolute;
    left:.2rem;
}

.header .icon_left i{
    font-size: .4rem;
}
</style>