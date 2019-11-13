<template>
    <div class="book">
        <Header/>
        
        <div class="page">
            <div class="card">
                <section id="book_fiction">
                    <div class="title">
                        <h2 class="fl">
                            最受欢迎图书|虚构类
                        </h2>
                        <a href="" class="more">更多</a>
                    </div>
                    <div class="section-content">
                        <ul class="items">
                            <li class="item item_book">
                                <div class="item_poster">
                                    <img src="https://img3.doubanio.com/view/subject/l/public/s33296332.jpg">
                                </div>
                                <span class="item_title">尸人庄迷案</span>
                                <div class="item_rating">
                                    <span class="rating_start"></span>
                                    <span class="rating_start"></span>
                                    <span class="rating_start"></span>
                                    <span class="rating_start"></span>
                                    <span class="rating_start"></span>
                                    <span>7.4</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="market_product_book_mobile_web">
                <div class="title">
                    <h2 class="fl">
                        豆瓣书店
                    </h2>
                    <a href="" class="more">更多</a>
                </div>
                <a class="promBook" href="#">
                    <span class="promBook_pic fl">
                        <img src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/4912.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg">
                    </span>
                    <div class="promBook_content ">
                        <div class="promBook_title">
                            <p class="promBook_name">中村佑介的插画世界Ⅰ：蓝</p>
                            <span class="promBook_price">¥138</span>
                        </div>
                        <p class="infoWithoutReviewer">营造梦幻与现实的交响，开创少女画新纪元</p>
                    </div>
                </a>
                <div class="section-content">
                    <ul class="items">
                        <li class="item item_book">
                            <div class="item_poster">
                                <img src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/4871.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg">
                            </div>
                            <span class="item_title">雅卡尔科学思维三部曲</span>
                            <div class="item_rating">
                                <span class="rating_start"></span>
                                <span class="rating_start"></span>
                                <span class="rating_start"></span>
                                <span class="rating_start"></span>
                                <span class="rating_start"></span>
                                <span>8.0</span>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </section>

            <section class="interests">
                <div class="title">
                  <h2>发现好图书</h2>
                </div>
                <div class="section-content">
                    <ul>
                        <li style="border-color: #4F9DED;">
                            <a href="https://m.douban.com/doulist/10372/" style="color: #4F9DED;">小波看书</a>
                        </li>
                       
                    </ul>
                </div>
            </section>
            <section class="types">
                <div class="title">
                  <h2>分类浏览</h2>
                </div>
              <div class="section-content">
                    <a name="cate"></a>
                    <ul class="type-list">
                        <li><a href="/book/fiction">虚构类图书</a><span></span></li>
                        <li><a href="/book/nofiction">非虚构类图书</a><span></span></li>
                        <li><a href="/book/classic">名著经典</a><span></span></li>
                        <li><a href="/book/film_original">影视原著</a><span></span></li>
                        <li><a href="/book/lastest">新书速递</a><span></span></li>
                        <li><a href="/book/score">高分图书</a><span></span></li>
                        <li><a href="/book/hot">热门图书</a><span></span></li>
                        <li><a href="/book/top250">top250</a><span></span></li>
                    </ul>
              </div>
            </section>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@common/components/header"
export default {
    name:"book",
    components:{
        Header
    }
}
</script>

<style>
/* page  start */
.page{
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding:0 0.1rem;
    padding-top:0.5rem;
    background-color: #fff;
}
.card{
   margin:0.07rem;
}

#book_fiction,#book_nonfiction,#market_product_book_mobile_web,.interests,.types{
    display:flex;
    flex-direction: column;
    padding-top:0.08rem;
}
#book_fiction .title,#book_nonfiction .title,#market_product_book_mobile_web .title,.interests .title,.types title{
    display: flex;
    padding:0.05rem 0;
    justify-content: space-between;
    align-items: center;
}
#book_fiction .title h2 ,#book_nonfiction .title h2 ,#market_product_book_mobile_web .title h2 ,.interests .title h2 ,.types title h2{
    display:inline-block;
    color:#111;
    font-size:0.2rem;
}
#book_fiction .title a ,#book_nonfiction .title a ,#market_product_book_mobile_web .title a{
    float:right;
    font-size:0.15rem;
    color:#42bd56;
}
.section-content{
    display: flex;
    flex-direction: column;
    overflow-x:auto;
    padding:0.1rem;
}
.section-content .items{
    display: flex;
    padding:.1rem 0  0.23rem 0;
    
}
.section-content .items .item_book{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right:0.08rem;
}
.section-content .items .item_book .item_poster{
    width:1rem;
    height:1.4rem;
}
.section-content .items .item_book .item_poster img{
    width:100%;
    height:100%;
}
.section-content .items .item_book .item_title{
    font-size:0.15rem;
    margin-top: 0.05rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
   
}
.section-content .items .item_book .item_rating {
    font-size:0.15rem;
}
.promBook{
    display:flex;
    overflow: hidden;
    margin:0.2rem 0 0;
}
.promBook .promBook_pic{
    display:inline-block;
    width:1.3rem;
    height:1.32rem;
    margin-right:0.15rem;
}
.promBook  .promBook_pic img{
  width:100%;
  height:100%；
}
.promBook_content{
    display:flex;
    flex-direction: column;
    overflow:hidden;
}
.promBook_content .promBook_title{
    display:flex;
    margin:0.1rem 0 0;
}
.promBook_content  .promBook_price{
    float:right;
    color:#E76648;
    font-size:0.14rem;
    /* line-height:22px; */
}
.promBook_content  .promBook_name{
    font-size:0.19rem;
    color:#494949;
    max-width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    word-wrap:normal;
}
.promBook_price{
    padding-left:0.1rem;
}
.promBook_content .infoWithoutReviewer{
    font-size:0.15rem;
    color:#333;
    padding-top:0.2rem;
}
/* .interests{
height:3rem;
} */
.interests .section-content ul{
    white-space: nowrap;
    overflow-x: auto;
    padding: 0.1rem;
}
.interests .section-content ul li {
    margin:0 0 0 .08rem;
    font-size:0.094rem;
    display:inline-block;
    border:1px solid;
    vertical-align:middle;
    margin:0.05rem;
}
.interests .section-content ul li a{
    height:0.4rem;
    line-height: 0.4rem;
    padding:0.05rem .2rem;
    letter-spacing: 0.1rem;
    overflow: auto;
    border-radius: 0.1rem;
    display:block;
    text-align: center;
}
/* .types{
    margin-top:-0.5rem;
} */
.type-list{
    padding:0.22rem  0  0;
}
.type-list li{
    width:46.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top:1px solid #eee;
    border-right:1px solid #eee;
    float:left;
    padding-right:0.1rem;
    height:0.4rem; 
} 
.type-list li a{
    display: inline-block;
    width:100%;
    padding:0.03rem;
    font-size:0.15rem;
    color:#42bd56;
} 
.type-list span {
    color: #ccc;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: .1rem;
    height: .1rem;
    transform: rotate(-45deg);
    margin-right: 0.01rem;
}

</style>