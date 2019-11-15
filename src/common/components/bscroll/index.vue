<!--封装 
    下拉加载更多
    上拉刷新
--->
<template>
    <div class="scoll_container">
        <div class="scoll-loading" v-if="loadingFlag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
       
        <div class="wrapper" ref="wrapper">
            <slot></slot>
        </div>
    </div>
   
</template>

<script>

import BScroll from "better-scroll";
export default {
    name:"scroll",
    data(){
        return{
            loadingFlag:false 
        }
    }, 
   
    mounted(){
        //实例化
        this.scroll=new BScroll(this.$refs.wrapper,{
             
             //开启下拉刷新
            pullDownRefresh:true,

            //开启上拉加载更多
            pullUpLoad:true,

            //滚动的事件的配置项  1非实时监听   2 实时监听  3不仅实时而且拉动的时候监听
            probeType:1
        }); 
        
    },
    
    methods:{
    //下拉刷新
        handlepullingDown(){
            this.scroll.on("pullingDown",()=>{
                console.log(111)
            })
        },
        //加载完毕通知的方法
        hadlefinishPullDown(){
            //通知better-scroll 进行下一次刷新
            this.scroll.finishPullDown();

            //重新计算better-scroll；
            this.scroll.refresh();
            setTimeout(()=>{
                //更新好
                this.loadingFlag=false;
            },500)
            
        },
         //方法1.刚开始没有，之后 
        // hadleScroll(){//一滚动就触发它
        //     this.scroll.on("scroll",({y})=>{
            
        //     // console.log(y)
        //        if(y>50){
        //         //    alert(1)
        //         this.loadingFlag=true;
        //     }
        //     })
        // },

        //方法2.
        hadleScroll(){//一滚动就触发它
            this.scroll.on("scroll",this.hadleScrollCb)
        },
        hadleScrollCb({y}){//一滚动就触发它
            if(y>50){
                this.loadingFlag=true;
            }
        },
    //上拉加载更多
        handlepullingUp(callback){
            this.scroll.on('pullingUp',()=>{
                callback();
            })
        },
        //加载完毕通知的方法
        handlefinishPullUp(){
            //通知better-scroll可以进行下一次的加载
            this.scroll.finishPullUp();
            //重新计算better-scroll
            this.scrollrefresh();
        }

    }
    
}
</script>

<style>
     .wapper{
         height:100%;
         overflow:hidden;
         
     }
     .fa-pulse{
         position:relative;
         top:2.5rem;
         left:1.9rem;
     }
     .scroll_loading{
         display:flex;
         justify-content: center;
         align-items:center;
         font-size:.4rem;

         background:chartreuse;
     }
</style>