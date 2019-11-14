<template>
    <div class="page">
        <Header/>
        <div class="subject_container">
            <div class="subject-section_header subject-header-wrap" id="subject-header-container"
                style="background-color: rgb(106, 124, 127);">
                <div class="sub-info">
                    <div class="sub-cover">
                        <img :src="detail.pic.large">
                    </div>
                    <div class="sub-detail">
                        <div class="sub-title">{{detail.title}}</div>

                        <div class="sub-original-title">{{detail.original_title}}（{{detail.year}}）</div>

                        <div class="sub-meta">{{detail.card_subtitle}}</div>



                        <section class="subject-mark mark-book" data-type="book" data-id="34430051">


                            <div class="mark-item" data="">
                                <a href="javascript:;" rel="nofollow" name="pbtn-26786669-wish" class="">
                                    <i class="wish icon"></i>
                                    <span>想看</span>
                                </a>
                                <a href="javascript:;" rel="nofollow" name="pbtn-26786669-wish" class="">
                                    <i class="wish icon"></i>
                                    <span>看过</span>
                                </a>
                            </div>

                        </section>

                    </div>
                </div>

                <div id="subject-rating-root">
                    <div data-reactroot="" class="sub-score">
                        <div class="sub-trademark"><span>
                               豆瓣评分
                                <em>TM</em></span><a
                                href="/to_app?copy_open=1&amp;url=/book/subject/34430051&amp;source=subject_detail_write_score_book"
                                class="score-write"><span>打开App评分</span></a></div>
                        <div class="sub-content">
                            <div class="sub-rating">
                                <div class="score-num">{{detail.rating.value}}</div>
                                <div class="star-display">
                                    <div class="rating">
                                        <div class="rating-stars"><span class="rating-star rating-star-medium-full"
                                                data-star-count="1"></span><span
                                                class="rating-star rating-star-medium-full"
                                                data-star-count="2"></span><span
                                                class="rating-star rating-star-medium-full"
                                                data-star-count="3"></span><span
                                                class="rating-star rating-star-medium-full"
                                                data-star-count="4"></span><span
                                                class="rating-star rating-star-medium-empty" data-star-count="5"></span>
                                        </div>
                                    </div>
                                    <p class="done-count">
                                        <em>{{detail.rating.count}}人评分</em>
                                    </p>
                                </div>
                            </div>
                            <div class="sub-chart">
                                <div class="star-stats">
                                    <div class="stars-wrap"><span class="rating-star-icon"></span><span
                                            class="rating-star-icon"></span><span class="rating-star-icon"></span><span
                                            class="rating-star-icon"></span><span class="rating-star-icon"></span></div>
                                    <div class="chart-wrap"><span class="rating-progress" style="width: 27.2%;"></span>
                                    </div>
                                </div>
                                <div class="star-stats">
                                    <div class="stars-wrap"><span class="rating-star-icon"></span><span
                                            class="rating-star-icon"></span><span class="rating-star-icon"></span><span
                                            class="rating-star-icon"></span></div>
                                    <div class="chart-wrap"><span class="rating-progress" style="width: 52.8%;"></span>
                                    </div>
                                </div>
                                <div class="star-stats">
                                    <div class="stars-wrap"><span class="rating-star-icon"></span><span
                                            class="rating-star-icon"></span><span class="rating-star-icon"></span></div>
                                    <div class="chart-wrap"><span class="rating-progress" style="width: 17.1%;"></span>
                                    </div>
                                </div>
                                <div class="star-stats">
                                    <div class="stars-wrap"><span class="rating-star-icon"></span><span
                                            class="rating-star-icon"></span></div>
                                    <div class="chart-wrap"><span class="rating-progress" style="width: 1.6%;"></span>
                                    </div>
                                </div>
                                <div class="star-stats">
                                    <div class="stars-wrap"><span class="rating-star-icon"></span></div>
                                    <div class="chart-wrap"><span class="rating-progress" style="width: 1.3%;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 简介 -->
            <section class="subject-section_intro" style="position: static;">
                <div class="subject-section_title">简介</div>
                <p class="section-intro_desc" data-clamp="3">
                    {{detail.intro}}
                    <a class="expand" href="javascript:;" style="float:right;">展开</a></p>
            </section>

            <!-- 短评 -->
            <section class="subject-section_comments">
                <div class="subject-section_title">
                    <span>短评</span>
                    <a class="write-comment"
                        href="/to_app?copy_open=1&amp;url=/book/subject/34430051&amp;source=subject_detail_write_interest">
                        <i class="icon grey-pen"></i>
                    </a>
                </div>
                <div id="comment-list">
                    <div data-reactroot="">
                        <ul class="list comment-list">
                            <li class="">
                                <div class="desc">
                                    <a href="/people/1103455/" class="desc_pic">
                                        <img src="https://img3.doubanio.com/icon/up1103455-23.jpg" alt="Ateh"></a>
                                    <div class="user-info">
                                        <div class="user-name">Ateh</div><span class="rating-stars"
                                            data-rating="5"><span
                                                class="rating-star rating-star-medium-full"></span><span
                                                class="rating-star rating-star-medium-full"></span><span
                                                class="rating-star rating-star-medium-full"></span><span
                                                class="rating-star rating-star-medium-full"></span><span
                                                class="rating-star rating-star-medium-full"></span></span><span
                                            class="date">4个月前</span>
                                    </div>
                                </div>
                                <div class="comment-content">
                                    <p class="LinesEllipsis clamped ">
                                        <!-- react-text: 18 -->看完这本书，立刻翻出运动衣，出门跑步，是时候要展开一场保卫海马体，控制杏仁核的运动了！
                                        作为一个常年被皮质醇祸害的焦虑
                                        <!-- /react-text --><wbr><span class="LinesEllipsis-ellipsis">...
                                        </span><span class="LinesEllipsis-readmore"
                                            style="color: rgb(66, 189, 86);">展开</span></p>
                                </div>
                                <div class="btn-info">
                                    <div class="ic-btn ic-btn-like  left "><span class="text">55</span></div>
                                    <div class="ic-btn ic-btn-more   right"></div>
                                </div>
                            </li>
                        </ul><a class="show-all"
                            href="/to_app?url=/book/subject/34430051/p/interests&amp;copy_open=1&amp;source=subject_book_detail"
                            style="display: block; font-size: 15px; text-align: center;">打开App，看更多热门短评</a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Header from "@common/components/header";
import { movieDetailApi } from "@api/movie"
export default {
    name:"Detail",
    components:{
        Header,
    },
    data(){
        return{
            detail:{}
        }
    },
    props:["id"],
    async created(){
        this.handleGetMovieList(this.id,"HZ1f",1)
    },
    methods:{
        async handleGetMovieList (id,ck,for_mobile){         
            let data = await movieDetailApi(id,ck,for_mobile)
            this.detail = data;
            //console.log(this.detail)
        }
    }
}
</script>

<style>
.page{
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.subject_container{
    height:100%;
    margin-top: .5rem;
}

.subject-section_header {
    padding: 0.2rem 0.15rem 0.15rem;
}
.subject-section_header .sub-info {
    display: flex;
    min-height: 1.65rem;
}
.sub-info .sub-cover {
    width:1.02rem;
    height:1.45rem;
}
.sub-info .sub-cover img {
    width:100%;
    height:100%;
}
.sub-info  .sub-detail {
    margin-left:0.15rem;
    line-height: 1.4;
    min-height: 1.4rem;
    position: relative;
}
.sub-info .sub-detail .sub-title {
    font-size: 0.23rem;
    color: #fff;
}
.sub-original-title {
    font-size: 15px;
    color: #fff;
}
.mark-item a {
    height: 30px;
    line-height: 1;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    margin-right: 10px;
    color: #191919;
    font-size: 13px;
    text-align: center;
    justify-content: center;
    max-width: 50%;
    flex: 1;
}
.subject-section_header .sub-meta {
    font-size: 0.11rem;
    color: rgba(255,255,255,0.7);
    margin: 0.1rem 0 0.05rem;
}
.subject-mark {
    margin-top: 10px;
}
.subject-mark .mark-item{
    margin-bottom:0.3rem;
    display:flex;
    align-items: center;
}
.subject-mark .mark-item a{
    height:0.3rem;
    line-height:1;
    display:flex;
    align-items: center;
    background-color:#fff;
    border-radius: 4px;
    margin-right:.1rem;
    color:#191919;
    font-size:.13rem;
    text-align: center;
    justify-content: center;
    min-width:33%;
    flex:1;
}
/* .subject-mark .mark-item .wish{
    background-image:url(/f/talion/cf2ab22…/pics/card/ic_mark_todo_s.png);

}
.subject-mark .mark-item .icon{
    display:inline-block;
    vertical-align: middle;
    垂直居中
    line-height:1;
    width:0.14rem;
    height: 0.14rem;
    /* margin-right: 5px; */
    /* background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
} */ 
.sub-score {
    background-color: rgba(0,0,0,0.1);
    border-radius: 0.06rem;
    padding: 0.1rem 0.15rem 0.13rem;
    margin-top: -0.1rem;
}
.subject-section_header .sub-trademark {
    font-size: 0.11rem;
    line-height: 0.22rem;
    color: #fff;
    position: relative;
    margin-bottom: 0.04rem;
}
.sub-score .sub-trademark{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.sub-score .score-write{
    font-size:0.11rem;
    color:#fff;
    border:1px solid #fff;
    border-radius:0.04rem;
    line-height: 1;
    padding:0.06rem 0.05rem;
    box-sizing:border-box;
}
.sub-score .sub-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sub-score .sub-rating{
    display: inline-flex;
    width:50%;
    position:relative;
    vertical-align: bottom;
    justify-content: flex-start;
    align-items:center;
}
.sub-score .score-num {
    display: inline-block;
    font-size: 0.36rem;
    line-height: 0.5rem;
    margin-right: 5px;
    color: #fff;
}
.sub-score .done-count em {
    display: inline-block;
    font-size: 0.12rem;
    transform: scale(0.9);
    font-style: normal;
}

/* 简介 */
.subject-section_intro{
    padding:0.15rem;
    font-size:0.15rem;
    margin-bottom:0.1rem;
}
.subject-section_title{
    font-size:0.15rem;
    color:#818181;
    margin-bottom:0.15rem;
}
.subject-section_intro .section-intro_desc {
    color: #191919;
    font-size:0.15rem;
    line-height: 0.22rem;
    word-wrap:break-word;
    margin:0;
    padding:0;
}
.subject-section_intro .section-intro_desc a{
  color:#42bd56;
}
.subject-section_header .vendors-link-group {
    margin-bottom: 0.1rem;
}
.vendors-link-group {
    margin: 15px 0;
}
/* 短评 */
.subject-section_comments{
    border-top: 0.15rem solid #EFEFEF;
    padding:0.15rem 0.15rem 0;
}
.subject-section_comments  .subject-section_title{
    font-size:0.15rem;
    color:#818181;
    margin-bottom:0.15rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.write-comment {
    float: right;
    color: #C0C0C0;
    font-size: 0.13rem;
    line-height: 0.21rem;
    display: flex;
    align-items: center;
}
.comment-list{
    margin-left:-0.15rem;
    margin-right:-0.15rem;
    border-bottom:0.01rem solid #EFEFEF;
}
.comment-list li{
    padding:0.15rem 0 0 0.15rem;
    position: relative;
    word-wrap:break-word;
    overflow: hidden;
}
.desc{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.desc_pic{
    display: inline-block;
    width:0.2rem;
    height:0.2rem;
    
}
.desc_pic img{
    width:100%;
    height:100%;
    border-radius: 50%;
}
.user-info{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.user-info .user-name{
   padding:0.1rem;
}
.list li .rating-stars{
    vertical-align: middle;
    line-height: 1;
}
.rating-stars{
    display:inline-block;
}
/* 星星评分 */
.rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
}

.rating-star-medium-full {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR…xA5gt4yqs0lx/gTPFj5FFD4NGlPGf8MZx6acRQfq91Lv8AZLTfj0RLVbcAAAAASUVORK5CYII=);
}
.rating-star-medium-full, .rating-star-medium-half, .rating-star-medium-gray {
    width: 13px;
    height: 13px;
    background-size: 13px 13px;
}
.comment-content{
    margin-left: 0.3rem;
}
.comment-list li p {
    line-height: 0.21rem;
    color: #494949;
    /* white-space: pre-wrap; */
    padding-right: 0.15rem;
}
section p {
    font-size:0.15rem;
}
section p {
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}
.comment-list li .btn-info{
    height:0.22rem;
    margin-top:0.1rem;
    margin-left:0.3rem;
    padding-bottom:0.15rem;
    border-bottom:0.01rem solid #efefef;
}
/* 矢量图 */
.ic-btn-link::before{
content: '';

width:0.2rem;
height:0.2rem;
background-position:center center;
background-repeat: no-repeat;
display:inline-block;
margin-bottom: -2px;
}
element.style {
    display: block;
    font-size: 15px;
    text-align: center;
}
.show-all {
    margin: 15px auto;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    color: #42bd56;
}
</style>