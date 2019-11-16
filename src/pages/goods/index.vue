<template>
  <div>
    <div class="content">
      <div style="height: 100%">
        <div class="scroll-area">
          <!-- header-wrap start -->
          <div class="header-wrap">
            <div class="header-img">
              <img :src="goodsInfo.image"/>
            </div>
            <div class="head-product-info">
              <div class="product-title">{{goodsInfo.title}}</div>
              <div class="product-price">
                <span class="price-item">
                  <em>¥</em>
                  <em class="price-num">{{goodsInfo.price}}</em>
                  <em>/本</em>
                  <del class="act-price">¥{{goodsInfo.promote_price}}</del>
                </span>
              </div>
              <div class="product-tag">
                <div class="sale-text">
                  <em class="sale-text-tag">限时特惠</em>
                  <em class="sale-text-desc">11.8-11.12 立减10元</em>
                </div>
                <div class="sale-text">
                  <em class="sale-text-tag">满额减</em>
                  <em class="sale-text-desc">11.8-11.12 满100减10, 满200减20, 满300减40</em>
                </div>
              </div>
            </div>
          </div>
          <!-- header-wrap end -->

          <!-- top-bar-wrap start -->
          <div class="widget-wrap top-bar-wrap">
            <div class="top-bar-item">
              <span>详情</span>
            </div>
            <div class="top-bar-item">
              <span>参数</span>
            </div>
            <div class="top-bar-item">
              <span>测评</span>
            </div>
          </div>
          <!-- top-bar-wrap end -->

          <!-- content-img start -->
          <div class="content-img-wrap widget-wrap">
            <img src="https://img3.doubanio.com/view/market_okra/raw/public/7e0939252951295.jpg" />
          </div>
          <div class="widget-wrap content-review-wrap">
            <div class="review-user-info">
              <a href="https://m.douban.com/people/3204298">
                <div
                  class="user-avatar"
                  style="background-image: url(&quot;https://img3.doubanio.com/view/market_okra/raw/public/9dfe2158b26b0e4.jpg&quot;);"
                ></div>
              </a>
              <a href="https://m.douban.com/people/3204298" class="user-name">迷特波鲁</a>
            </div>
            <div class="review-content-info">
              <div class="content-title">值得收藏的电影日历</div>
              <div class="content-inner">
                <div class="content-abstract">
                  <div class="content-images">
                    <div
                      class="content-img"
                      style="background-image: url(&quot;https://img3.doubanio.com/view/market_okra/raw/public/5b7fb4b68919630.jpg&quot;);"
                    ></div>
                    <div
                      class="content-img"
                      style="background-image: url(&quot;https://img1.doubanio.com/view/market_okra/raw/public/1750690b03bb987.jpg&quot;);"
                    ></div>
                    <div
                      class="content-img"
                      style="background-image: url(&quot;https://img1.doubanio.com/view/market_okra/raw/public/8b3d058ad57e08b.jpg&quot;);"
                    ></div>
                  </div>
                  <div class="content-desc">
                    <span class="desc-text">去年的典藏版已经惊艳到了我！今年的则是从细节体现了豆瓣团队的细腻(⊃･ᴥ･)つ...</span>
                    <span class="expand-btn">（全文）</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="widget-wrap content-img-wrap last-content-wrap">
            <img src="https://img3.doubanio.com/img/files/file-1564548575-0.png" />
          </div>
          <!-- content-img end -->
        </div>
        <!-- tab-bar-bottom start -->
        <div class="bottom-bar-wrap show">
          <div class="bottom-bar-inner">
            <div class="icons">
              <a href="#" class="icon-el home">
                <i class="iconfont icon-home home"></i>
              </a>
              <div class="icon-el service">
                <a class="iconfont icon-fuwuerji service"></a>
              </div>
              <a href="#" class="icon-el cart">
                <i class="iconfont icon-gouwuche cart"></i>
              </a>
            </div>
            <div class="product-selector-btn">
              <div class="buttons">
                <button class="btn-el cart-btn">加入购物车</button>
                <router-link to="/commiate" tag="button" class="btn-el buy-btn">立即购买</router-link >
              </div>
            </div>
          </div>
        </div>
        <!-- tab-bar-bottom end -->
      </div>
    </div>
  </div>
</template>
<script>
import { goodsApi } from "@api/beanrec"
export default {
  name: "Goods",
  props: ["id"],
  data(){
      return{
          goodsInfo:[]
      }
  },
  async created(){
        this.handleGetGoodsList("product",0,10,this.id)
    },
    methods:{
        async handleGetGoodsList (source,start,count,id){   
            let index = Math.round(Math.random()*9);      
            let data = await goodsApi(source,start,count,id)
            this.goodsInfo = data.data.products[index];
            console.log(this.goodsInfo)
        }
    }
};
</script>

<style>
.content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.scroll-area {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  text-align: center;
  padding-bottom: 50px;
  background-color: #fff;
}
/*header start*/
.header-wrap {
  background: #fff;
}
.header-img {
  width: 100%;
  background-color: #e6e6e6;
}
.header-img img{
  width: 100%;
  background-size: cover;
  background-position: 50%;
}
.header-wrap .head-product-info {
  text-align: left;
  padding: 8% 0.35rem 0.3rem;
}
.header-wrap .head-product-info .product-title {
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.9);
}
.header-wrap .head-product-info .product-price {
  margin-top: 0.03rem;
  margin-bottom: 0.04rem;
  color: #dd1944;
}
.header-wrap .head-product-info .product-price .price-item {
  margin-right: 0.1rem;
}
.header-wrap .head-product-info .product-price em {
  font-size: 0.14rem;
  padding-right: 2px;
}
.header-wrap .head-product-info .product-tag {
  font-size: 0.14rem;
  color: rgba(0, 0, 0, 0.9);
}
.header-wrap .head-product-info .product-tag .sale-text {
  margin-top: 0.06rem;
  position: relative;
  z-index: 1;
}
.header-wrap .head-product-info .product-tag .sale-text-desc,
.header-wrap .head-product-info .product-tag .sale-text-tag {
  display: inline-block;
  vertical-align: middle;
}
.header-wrap .head-product-info .product-tag .sale-text-tag {
  font-size: 12px;
  line-height: 20px;
  color: #dd1944;
  background-color: rgba(225, 25, 68, 0.1);
  margin-right: 7px;
  padding: 1px 4px;
}
.header-wrap .head-product-info .product-tag .sale-text-desc {
  position: absolute;
  z-index: 1;
  word-break: keep-all;
}
/*header start*/

/* tab-bar-wrap start */
.top-bar-wrap {
  height: 0.46rem;
  line-height: 0.46rem;
  border-bottom: 0.5px solid #d8d8d8;
  font-size: 17px;
  color: #6e6e6e;
  background-color: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  right: 0;
  left: 0;
  z-index: 3;
  position: sticky;
  top: 0; /* 阈值 */
}
.top-bar-wrap .top-bar-item {
  flex: 1;
  text-align: center;
}
.top-bar-wrap .top-bar-item span {
  display: inline-block;
  position: relative;
  z-index: 1;
  line-height: 0.46rem;
}
/* tab-bar-wrap end */

/* content-img start */
.content-img-wrap {
  background: #fff;
}
.content-img-wrap img,
.content-video-wrap video {
  width: 100%;
  display: block;
  margin: 0 auto;
}
.content-module-wrap.content-img-wrap {
  border-top: 5px solid #f9f9f9;
  padding: 50px 0 20px;
  margin-top: 50px;
  background: #fff;
}
.content-img-wrap img {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
}
/* content-img end */
/* 评价 start */
.content-review-wrap {
  padding: 0.2rem 0.25rem;
  background: #f9f9f9;
  text-align: left;
  margin-bottom: 0.1rem;
  box-sizing: border-box;
}
.content-review-wrap .review-user-info {
  margin-bottom: 8px;
}
.content-review-wrap .review-user-info .user-avatar {
  display: inline-block;
  vertical-align: middle;
  width: 0.18rem;
  height: 0.18rem;
  background-size: cover;
  background-position: 50%;
  border-radius: 50%;
  margin-right: 0.05rem;
}
.content-review-wrap .review-user-info .user-name {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.9);
}
.content-review-wrap .review-user-info a.user-name {
  color: #44883e;
}
.content-review-wrap .review-content-info .content-title {
  font-size: 0.15rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
}
.content-review-wrap .review-content-info .content-inner {
  margin-top: 0.08rem;
}
.content-review-wrap .review-content-info .content-inner .content-images {
  display: flex;
  margin-bottom: 0.06rem;
}
.content-review-wrap .review-content-info .content-inner .content-img {
  display: inline-block;
  width: 100%;
  padding-top: 20%;
  background-size: cover;
  background-position: 50%;
  margin-left: 0.1rem;
}
.content-review-wrap .review-content-info .content-inner .content-desc {
  font-size: 0.15rem;
  font-weight: 300;
  line-height: 0.22rem;
  color: rgba(0, 0, 0, 0.9);
  position: relative;
  z-index: 1;
  min-height: 0.44rem;
}
.content-review-wrap
  .review-content-info
  .content-inner
  .content-desc
  .desc-text {
  display: block;
  word-break: break-all;
  white-space: pre-wrap;
}
.content-review-wrap .review-content-info .content-inner .expand-btn {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
}
/* 评价 end */
/*content end*/
/* tab-bar-bottom start*/
.bottom-bar-wrap {
  height: 0.56rem;
  line-height: 0.56rem;
  overflow: hidden;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background-color: #fff;
  transition: transform 0.3s, -webkit-transform 0.3s;
  -webkit-transform: translateY(0);
  transform: translateY(100%);
  box-shadow: 0 0 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.bottom-bar-wrap.show {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.bottom-bar-wrap .bottom-bar-inner {
  display: flex;
  align-items: center;
}
.bottom-bar-wrap .icons .icon-el {
  display: inline-block;
  vertical-align: middle;
  line-height: 0.3rem;
  border-right: 0.5px solid #d8d8d8;
  border-color: #d8d8d8;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  text-align: center;
}
.bottom-bar-wrap .icons .icon-el.home {
  width: 0.56rem;
}
.bottom-bar-wrap .icons .icon-el.service {
  width: 0.48rem;
}
.bottom-bar-wrap .icons .icon-el.cart {
  width: 0.54rem;
  border-right: 0;
}
.bottom-bar-wrap .icons .iconfont.cart,
.bottom-bar-wrap .icons .iconfont.service,
.iconfont.home {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.9);
}
.bottom-bar-wrap .product-selector-btn {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 0.56rem;
}
.bottom-bar-wrap .buttons {
  display: flex;
  align-items: center;
  height: 100%;
}
.bottom-bar-wrap .buttons .cart-btn {
  color: rgba(0, 0, 0, 0.9);
  background-color: #fff;
  border-left: 0.5px solid #d8d8d8;
  border-color: #d8d8d8;
}
.bottom-bar-wrap .buttons .buy-btn {
  color: #fff;
  background-color: #dd1944;
}
.bottom-bar-wrap .buttons .btn-el {
  flex: 1;
  font-size: 0.15rem;
  font-weight: 300;
  padding: 0;
  text-align: center;
  border: none;
  outline: none;
  height: 100%;
}
</style>