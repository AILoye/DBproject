<template>
    <div>
        <div class="cart">
            购物车
        </div>
        <div class="CZ1dSWwM">
            <div>
                <div class="_36lxrvBG">
                    <div class="QkPpI4kH">
                        <input type="checkbox">
                        <div class="A5ejElxT">豆瓣豆品</div>
                    </div>

                    <div class="content">
                        <input type="checkbox">

                        <div class="cpic" href="#">
                            <img src="https://img1.doubanio.com/view/dianpu_product_item/small/public/p2052838.jpg">
                        </div>

                        <div class="cmiddle">
                            <p class="name">豆猫卫衣</p>
                            <span>红色logo丝印男</span>
                            <span>S(男款170-175)</span>
                            <div class="num">
                                <button>-</button>
                                <input type="text" class="txt txt-num" />
                                <button>+</button>
                            </div>
                        </div>

                        <div class="cright">
                            <div class="_1nMn_VgU">删除</div>
                            <div class="_2kz-t9CN">￥198.00
                                <div class="price">￥178.00</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-box">
                
                    <input type="checkbox">
                    <label>全选</label>
          
                <p class="count">已选择 </p>
                <p class="total">总价:1234567890</p>
                <router-link to="/commiate" tag="div" >去结算</router-link>
            </div>

        </div>
        


    </div>
</template>
<script>
export default {
    name:"cart"
}
</script>

<style>
.cart{
    width:100%;
    height:0.5rem;
    background:#d33;
    font-size:0.3rem;
    text-align:center;
    line-height:0.5rem;
}
.CZ1dSWwM {
text-align: center;
margin: 0.10rem 0 1.00rem;
}
._36lxrvBG{
    padding-top:0.2rem;
    background-color: #fff;
}
._36lxrvBG .QkPpI4kH {
    background-color: #fff;
    position: relative;
    z-index: 1;
    text-align: left;
    padding: 0.10rem 0 0.10rem 0.25rem;
    margin-bottom: 0.02rem;
    display: flex;
    align-items: center;
    border-bottom:1px solid #efefef;
}
.A5ejElxT{
    margin-left:0.1rem;
}
.content{
    display:flex;
    position: relative;
    z-index: 1;
    background-color: #fff;
    padding: 0.2rem 0.05rem;
    margin-bottom:0.02rem;
    justify-content: center;
    align-items: center;
}
.cpic{
    width:0.8rem;
    height:0.8rem;
    padding:0.2rem;
}
.cpic img{
    width:100%;
    height:100%;
}
.cmiddle{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.cmiddle .name{
    padding: 0.05rem 0;
}
.cmiddle .num{
    display: flex;
    width:1rem;
     padding: 0.05rem 0;
}
.cmiddle span{
    padding: 0.05rem 0;
}
.txt{
    width:0.8rem;
    border:1px solid #efefef;
}
.cright{
    padding-left:.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cright div{
    padding: 0.05rem 0;
}

.footer{
    position:fixed;
    height:0.5rem;
    line-height:0.5rem;
    width:100%;
    background-color:#fff;
    padding-bottom:.72rem;
    justify-content: center;
    align-items:center;
    bottom: 0;
    left:0;
 
}
.footer-box{
    padding: 0 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.footer-box input{
    margin-top:0.05rem;
}
.footer-box div{
    color:#d33;
    font-size: 0.16rem;
    padding-right: 0;
}
</style>