<template>
<scroll ref="scroll">
        <div class="tab_box" >
            <!-- 豆瓣推荐 -->
                <div class="category-tabcon" id="tabcon">
                    <div class="tab-items current">
                        <ul>
                            <router-link
                                tag="li" 
                                :to="'/goods/'+item.id+'/'+item.title" 
                                class="category-item"
                                 v-for="item in beanlist" 
                                 :key="item.id">
                                <div class="product-card product-card-category">
                                    <a href="#">
                                        <div class="product-cover-wrapper-satine">
                                        <img :src="item.image" alt="豆猫卫衣" class="product-card-cover"></div>
                                        <div class="product-card-info">
                                            <p class="product-card-title">{{item.title}}</p>
                                            <div class="product-card-desc">{{item.desc}}</div>
                                            <div class="product-card-bottom"><span class="product-card-tag">{{item.tags[0]}}</span><span
                                                    class="product-card-tag">{{item.tags[1]}}</span></div>
                                            <div class="product-card-price"><span class="product-card-promote">￥{{item.promote_price}}</span><del
                                                    class="product-card-del">￥{{item.price}}</del></div>
                                        </div>
                                    </a>
                                </div>
                            </router-link>
                        </ul>
                    </div> 
                </div>
                <div id="loadingMore" class="endMore">更多豆品好物，敬请期待~</div>
    
        </div>
</scroll>
</template>

<script>
// 引入接口v-for="(item,index) in "
import {beanrec} from "@api/beanrec";
// import BScroll from "better-scroll";
export default {
    name:"beanrec",
    //数据遍历
    data(){
        return {
            beanlist:[]
        }
    },
    //检测(数据已经加载完)
    watch:{
        beanrec(){
            this.$refs.scroll.hadlefinishPullDown();

        }
    },

    //数据请求
    created() {
        this.handleGetbeanrec("classic",0,10)
    },
    mounted() {
  // new BScroll(this.$refs.beanrecBody)

        // console.log(this.$refs.scroll)
        this.$refs.scroll.handlepullingDown(()=>{
            console.log(111)
            //数据的更新（下拉加载更多数据）
            // var arr=[10,20,34,42,60];
            // var index=parseInt(0+Math.random()*6);
            // this.handleGetbeanrec(arr[index]);
        });
      
         
         //调用
        this.$refs.scroll.hadleScroll();

        //上拉加载更多
        this.$refs.scroll.handlepullingUp(()=>{
            console.log(222)
            /** 
             * limit10   page1
             *           page2
             *           page3
             * 数据要合并，
             * this.beanlist=[...this.beanlist,...data.data.products]
            */
        })
    },

    methods:{
        async handleGetbeanrec(name,start,count){
            let data =await beanrec(name,start,count);
            this.beanlist=data.data.products;
            // console.log(data.data.products);
            // console.log(this.beanlist)
        }

       
    },
    
}
</script>
<style>
   /* 推荐 */
   .tab_box{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding-top:1.8rem;

}
.product-cover-wrapper-satine{
    width:1.67rem;
    height:1.67rem;
}

.product-cover-wrapper-satine img{
    width:100%;
    height:100%;
}
.category-tabs {
    height: 0.55rem;
    border-bottom: .005px solid #dfdfdf;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: #fff;
}
.category-tabs a.current {
    border-bottom-width:0.02rem;
    border-bottom-style: solid;
    color: rgba(0,0,0,.9);
    border-color: rgba(0,0,0,.9);
    font-weight: 700;
}
.category-tabs a {
    display: inline-block;
    line-height: 0.38rem;
    margin: 0 0.13rem;
    font-size: 0.16rem;
    vertical-align: middle;
}
.category-tabcon .tab-items ul{
    position:relative;
    display: flex;
    flex-wrap: wrap;
    padding:0.15rem 0.2rem;
    background:#fff;

}
.category-tabcon ul .category-item {
    width: 50%;
    float: left;
    box-sizing: border-box;
    padding:0.2rem 0.1rem;
}
.product-card-category .product-card-info {
    height:1.1rem;
    overflow: hidden;
}
.product-card .product-card-info {
    padding-top: 0.1rem;
    position: relative;
    z-index: 1;
}
.product-card .product-card-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: rgba(0,0,0,.9);
}
.product-card .product-card-desc, .product-card .product-card-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.product-card .product-card-desc {
    font-size: 12px;
    line-height: 18px;
    color: #818181;
    min-height: 18px;
    margin-top: 3px;
}
.product-card .product-card-desc, .product-card .product-card-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.product-card-category .product-card-bottom, .product-card-category .product-card-price {
    margin-top: 3px;
}
.product-card-tag{
    line-height: 0.19rem;
    font-size:0.11rem;
    background-color:rgba(221,25,68,.1);
    color:#dd1944;
    padding:0.01rem 0.04rem;
    margin-right:0.06px;
    transform:scale(.8);
}
.product-card .product-card-promote {
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    color: #dd1944;
    margin-right: 6px;
}
.product-card .product-card-del {
    font-family: PingFang SC;
    font-size: 12px;
    line-height: 18px;
    color: #ababac;
    margin-right: 4px;
}
.category-tabcon .endMore {
    margin-top: 0;
    color: rgba(0,0,0,.5);
    font-size: 12px;
    text-align: center;
}
</style>