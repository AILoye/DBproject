<template>
    <div class="page">
        <div class="deal-containers">
        <!-- 添加新的收货地址 -->
        <div class="_1DTBWCEg">
            <div class="_3pWMWuQ9">
                <i calss="iconfont" icon>&#xe646;</i>
                <span>收货地址</span>
                <!-- <i class="newadd">+</i> -->
                <router-link to="address" tag="i">
                    <span>{{this.$store.state.address.nm}}</span>
                    </router-link>
            </div>
            <div class="j8ur1p_v with_icon selected">
                <div class="E73Ba7Gg">
                    <p class="_1dVryUYG">收货人：1111</p>
                    <p>13339992221</p>
                </div>
                <p class="_2gh7fW1V">北京市/东城区</p><i class="mui-icon arrow-right"></i>
            </div>
        </div>
        <!-- 内容 -->
        <div>
            <div class="_2C9qYz-k">
                <div class="_2-UYjuW9"><a href="/shop/shiji/" class="j6_10IqF">豆瓣豆品</a></div>
                <div>
                    <div class="_1nyanmaM">
                        <div class="_1ZWn38d8"><a class="_1xrD6wJO"
                                href="https://market.douban.com/campaign/calendar2020" target="_blank"><img
                                    src="https://img3.doubanio.com/view/dianpu_product_item/small/public/p2052320.jpg"></a>
                            <div class="seQwV13O">
                                <p class="_3-AeRY6R"><a href="https://market.douban.com/campaign/calendar2020"
                                        target="_blank">豆瓣电影日历2020</a></p>
                                <div class="_35SAygLy"><span>朱砂红</span><span>套装版</span></div>
                                <div class="_35SAygLy"><span>数量: 1</span></div>
                            </div><span class="_3NFjVgCK">￥153.00</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="_1pohPAPu"><span class="_3WtqowM8">活动<em>: 满100元减10元</em></span><span
                            class="WbAiA1oM"><em> - ￥10</em><i class="mui-icon arrow-right"></i></span></div>
                    <div class="_2mVCVeRV"><span class="_3WtqowM8">优惠券</span><span class="WbAiA1oM"><em
                                class="_3PFLk0hW">暂无可用优惠券</em></span></div>
                    <div class="_3O6eYM4M"><span class="_3WtqowM8">小计</span><span
                            class="WbAiA1oM cZCPrXRa">￥143.00</span></div>
                    <div class="_131a2tSL"><span class="_3WtqowM8">运费</span><span class="WbAiA1oM">￥0.00</span></div>
                </div>
                <div class="_1W5i7H_b">
                    <div class="_1OkuB2f-"><span class="_3WtqowM8"><span class="_2Cbc21KH _2KUB5YLi"><i
                                    class="mui-icon right"></i></span>我要开发票</span><span class="WbAiA1oM"><i
                                class="mui-icon arrow-right"></i></span></div>
                    <p class="_2ys06DIz">* 请在下单后30分钟之内完成付款，否则订单将被取消</p>
                </div>
            </div>
        </div>
        <div class="_1YbRGdnl">
            <div class="_1Ozh6oaM">
                <h2 class="_2nSItjfK">选择支付方式</h2>
                <ul class="_1b7ouKV3">
                    <li class="_2upn4mwl wx_html5 selected"><i class="_1D_N9J1g wx_html5 iconfont icon-weixin1"></i><span
                            class="_3Ncb3wDz">使用微信支付</span></li>
                    <li class="_2upn4mwl alipay"><i class="_1D_N9J1g alipay  iconfont icon-zhifubao"></i><span
                            class="_3Ncb3wDz">使用支付宝支付</span></li>
                </ul>
            </div>
        </div>
        <div class="_1_SLvixU _2cHPH2Bf bottom">
            <div class="_332yjU36"><span>应付: <em class="_1Kq7GPVO">￥143.00</em></span></div><a
                class="_2Hsu60vK default">提交订单</a>
        </div>
    </div>


    </div>
</template>
<script>
export default {
    name:"commiate"
}
</script>

<style>
/* header */
._1DTBWCEg {
    margin-bottom: 10px;
}
._3pWMWuQ9 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    background-color: #fff;
    color: rgba(0,0,0,.9);
    padding: 15px;
    border-bottom: 1px solid #f9f9f9;
    border-color: #f9f9f9;
}
.newadd{
font-size:0.22rem;
}
.j8ur1p_v.with_icon {
    position: relative;
    z-index: 1;
    padding-right: 40px;
}
.j8ur1p_v {
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 20px;
    padding-left: 20px;
    font-size: 12px;
    color: rgba(0,0,0,.9);
    background-color: #fff;
    margin-bottom: 5px;
}
.j8ur1p_v .E73Ba7Gg {
    border-bottom: 1px solid #f9f9f9;
    font-size: 14px;
    margin-bottom: 5px;
}
.j8ur1p_v ._1dVryUYG {
    float: left;
    color: rgba(0,0,0,.9);
    margin-bottom: 5px;
    margin-right: 20px;
}
.j8ur1p_v.with_icon i {
    color: rgba(0,0,0,.9);
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.mui-icon {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
}

/* 内容 */
._2C9qYz-k {
    margin-bottom: 10px;
}
._2C9qYz-k ._2-UYjuW9{
    padding: 0 15px;
    border-bottom: 1px solid #f9f9f9;
    border-color: #f9f9f9;
    background-color: #fff;
    padding: 15px;
}
._2C9qYz-k ._1nyanmaM {
    border-width: .5px; 
    padding-top: 15px;
    padding-bottom: 15px;
    border-color: #f9f9f9;
    padding: 0 15px;
    border-bottom: 1px solid #f9f9f9;
    background-color: #fff;
}
._1ZWn38d8 {
    display: flex;
    position: relative;
    z-index: 1;
}
._1ZWn38d8 ._1xrD6wJO {
    width: 80px;
    height: 80px;
    background-color: #f9f9f9;
    display: block;
}
._1ZWn38d8 ._1xrD6wJO img {
    width: 100%;
    height: 100%;
    display: block;
}
._1ZWn38d8 .seQwV13O {
    padding-left: 20px;
    flex: 1;
}
._1ZWn38d8 .seQwV13O ._3-AeRY6R {
    font-size: 14px;
    color: rgba(0,0,0,.9);
    margin-bottom: 6px;
}
._1ZWn38d8 .seQwV13O ._3-AeRY6R a {
    color: rgba(0,0,0,.9);
}
._1ZWn38d8 .seQwV13O ._35SAygLy {
    font-size: 12px;
    color: #6e6e6e;
    max-width: 70%;
}
._1ZWn38d8 .seQwV13O ._35SAygLy span {
    margin-right: 8px;
}
._1ZWn38d8 .seQwV13O ._35SAygLy {
    font-size: 12px;
    color: #6e6e6e;
    max-width: 70%;
}
._1ZWn38d8 .seQwV13O ._35SAygLy span {
    margin-right: 8px;
}
._3WtqowM8 {
    float: left;
}

._2C9qYz-k ._1pohPAPu i{
    margin-right: -5px;
}
._2C9qYz-k ._1pohPAPu,._2mVCVeRV,._2C9qYz-k ._3O6eYM4M,._131a2tSL,._2C9qYz-k ._1OkuB2f-{
    font-size: 14px;   
    line-height: 20px; 
    padding-top: 10px;   
    padding-bottom: 10px;
    color: rgba(0,0,0,.9);
    clear: both;
    overflow: hidden;
    padding: 0 15px;
    border-bottom: 1px solid #f9f9f9;
    border-color: #f9f9f9;
    background-color: #fff;
}
._3WtqowM8 {
    float: left;
}
._2C9qYz-k ._3O6eYM4M .cZCPrXRa {
    font-weight: 500;
    font-size: 14px;
}
.WbAiA1oM {
    float: right;
    white-space: nowrap;
}
._2C9qYz-k ._1W5i7H_b {
    margin-top: 10px;
}
._2C9qYz-k ._2ys06DIz {
    display: block;
    font-size: 12px;
    color: rgba(0,0,0,.9);
    background-color: #fff;
    padding: 10px 15px;
}
._1YbRGdnl {
    margin-top: 10px;
    overflow: hidden;
}
._1Ozh6oaM {
    margin-bottom: 60px;
}
._1Ozh6oaM ._1b7ouKV3 {
    list-style: none;
    padding-bottom: 10px;
}
._1Ozh6oaM ._1b7ouKV3 ._2upn4mwl {
    background-color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 15px;
    padding-right: 30px;
    position: relative;
    z-index: 1;
    font-size: 14px;
    color: rgba(0,0,0,.9);
    border-bottom: 1px solid #f9f9f9;
    border-color: #f9f9f9;
}
._1_SLvixU.bottom {
    bottom: 0;
}
._1_SLvixU {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    transition: all .8s ease-out;
    background-color: #fff;
}
._1Ozh6oaM ._2nSItjfK {
    padding: 15px;
    font-size: 15px;
    font-weight: 700;
    color: rgba(0,0,0,.9);
    background-color: #fff;
    border-bottom: 1px solid #f9f9f9;
    border-color: #f9f9f9;
}
._2cHPH2Bf {
    display: flex;
    height: 46px;
    line-height: 46px;
    color: rgba(0,0,0,.9);
    padding-left: 15px;
    box-sizing: border-box;
}
._2cHPH2Bf ._332yjU36 {
    font-weight: 700;
    font-size: 14px;
    color: rgba(0,0,0,.9);
    -webkit-box-flex: 1;
    flex: 1;
}
._2cHPH2Bf ._2Hsu60vK {
    display: block;
    line-height:45px;
    width: 120px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #dd1944;
}
/* 矢量图 */
._1Ozh6oaM ._1b7ouKV3 ._2upn4mwl ._1D_N9J1g {
    display: inline-block;
    vertical-align: middle;
    background-size: cover;
    background-position: 50%;
    /* background-repeat: no-repeat; */
    margin-right: 10px;
    width:0.3rem;
    height: 0.3rem;
    font-size:0.3rem;
    color:#42bd56;
}
._1D_N9J1g
._1Ozh6oaM ._1b7ouKV3 ._2upn4mwl ._3Ncb3wDz {
    display: inline-block;
    vertical-align: middle;
}
.inputradio{
    position: relative;
    right:0;
    bottom:0;
    margin-left:3.2rem;
    margin-top:-0.1rem;
}
</style>