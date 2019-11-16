<template>
    <div class="bean">
        <div class="bean_box">
            <div class="swiper-banner">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://img3.doubanio.com/img/files/file-1573110471-0.jpg">
                        </div>
                    
                    </div>
                </div>
            </div>

            <div class="nav">
                <div class="nav_category">
                    <router-link 
                        class="category"
                        tag="div"
                        to="/bean/beanrec"
                    >
                        <a href="#">
                            <!-- <i class="categoryIcon cateClassic"></i> -->
                            <span class="categoryText">豆瓣经典</span>
                        </a>
                    </router-link>
                    <router-link 
                    class="category"
                    tag="div"
                    to="/bean/homelife"
                    >
                        <a href="#">
                            <!-- <i class="categoryIcon cateFamily"></i> -->
                            <span class="categoryText">家居生活</span>
                        </a>
                    </router-link>
                    <div class="category">
                        <a href="#">
                            <!-- <i class="categoryIcon cateTravel"></i> -->
                            <span class="categoryText">外出旅行</span>
                        </a>
                    </div>
                    <div class="category">
                        <a href="#">
                            <!-- <i class="categoryIcon cateStationery"></i> -->
                            <span class="categoryText">文具小物</span>
                        </a>
                    </div>
                </div>
            
                </div>
        </div>
        <router-view></router-view>
        <!-- <Loading/> -->
    </div>
</template>
<script>

//引入封装好的js方法
import messageBox from "../../lib/messageBox/index";//./lib/messageBox/index
// import Loading from "@lib/loading"
export default {
    name:"bean",
    //局部注册
    // components:{
    //     Loading
    // }
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
.bean{
   position:relative;
}
.bean_box{
   position: fixed;
    top:0;
    z-index:10;
}
.swiper{
    /* padding-top:3rem; */
}
.swiper-banner{
    display: flex;
}
.swiper-container{
    margin:0 auto;
    position: relative;
    overflow:hidden;
    z-index:1;
    box-sizing:border-box;
    background-color: #fff;
}
.swiper-wrapper{
    display:flex;
    /* flex-flow: column; */
    position: relative;
    box-sizing: border-box;
    z-index:1;
}
.swiper-slide{
    height:1.88rem;
}
.swiper-slide img{
    width:100%;
    height:100%;
}

/*  */
/* .nav {
    
} */
.nav_category{
    padding: 0 0.15rem;
    display: flex;
    margin-bottom: 0.1rem;
    background-color: #fff;
}
.nav .category{
    padding:0.15rem 0;
    -webkit-box-flex: 1;
    flex: 1;
    font-size:0.14rem;
    text-align: center;
    background-color: #fff;
}
.nav .category a{
   display: flex;
   flex-direction: column;
    color:#818181;
}
.categoryIcon{
    display:inline-block;
    height:0.5rem;
    width:0.5rem;
    border-radius: 50%;
    margin-bottom:0.05rem;
    vertical-align: middle;
    background-color:#f2f5f1;
    background-repeat:no-repeat;
    background-position: 50%;
    margin-left: 0.18rem;
}



</style>