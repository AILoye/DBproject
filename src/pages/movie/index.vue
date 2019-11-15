<template>
  <div class="page">
    <Header />
    <div class="content">
      <div class="main">
        <!-- 影院热映 start -->
        <section class="hotFilm">
          <h2>
            <div>
              <router-link
              tag="span"
              to="/movie/movienow"
              >影院热映</router-link>
              <router-link
              tag="span"
              to="/movie/moviecomming"
              >即将上映</router-link>
            </div>
          </h2>
          <router-view></router-view>
        </section>

        <!-- 影院热映 end -->
        
        <!-- 豆瓣热门 start -->
        <section class="hotFilm popular">
          <h2>
            <div>
              <span>豆瓣热门</span>
            </div>
          </h2>
           <MovieHot/>
        </section>

        <!-- 豆瓣热门 end -->

        <!-- 豆瓣榜单 start -->
        <section class="listTop">
          <h2>豆瓣榜单</h2>
          <div>
            <a href="#" class="list-box">
              <div class="listTop-left">
                <div class="listTop-title-box">
                  <div class="title-bg">
                    <div class="box-bg">WEEK</div>豆瓣周榜
                  </div>
                  <div class="title-1">口碑电影</div>
                </div>
              </div>
              <ul
                class="listTop-right"
                style="background-image: url(https://img1.doubanio.com/view/photo/photo/public/p2556467478.jpg);"
              >
                <div class="list-right-bg"></div>
                <li>
                  <span class="top-num">1.</span>
                  <span class="top-name">少年的你</span>
                  <span class="top-score">8.4</span>
                </li>
                <li>
                  <span class="top-num">2.</span>
                  <span class="top-name">续命之徒：绝命毒师电影</span>
                  <span class="top-score">8.1</span>
                </li>
                <li>
                  <span class="top-num">3.</span>
                  <span class="top-name">我在雨中等你</span>
                  <span class="top-score">8.1</span>
                </li>
              </ul>
            </a>
            <a href="#" class="list-box">
              <div class="listTop-left" style="background-color: rgb(50, 50, 59)">
                <div class="listTop-title-box">
                  <div
                    class="boxbg"
                    style="background-image: url(https://img1.doubanio.com/img/files/file-1543460329.png);"
                  ></div>
                </div>
              </div>
              <ul
                class="listTop-right"
                style="background-image: url(https://img3.doubanio.com/view/photo/photo/public/p2309770674.jpg);"
              >
                <div class="list-right-bg listTop-right-bg2"></div>
                <li>
                  <span class="top-num">1.</span>
                  <span class="top-name">少年的你</span>
                  <span class="top-score">8.4</span>
                </li>
                <li>
                  <span class="top-num">2.</span>
                  <span class="top-name">续命之徒：绝命毒师电影</span>
                  <span class="top-score">8.1</span>
                </li>
                <li>
                  <span class="top-num">3.</span>
                  <span class="top-name">我在雨中等你</span>
                  <span class="top-score">8.1</span>
                </li>
              </ul>
            </a>
            <a href="#" class="list-box">
              <div class="listTop-left">
                <div class="listTop-title-box">
                  <div class="title-bg">
                    <div class="box-bg">WEEK</div>豆瓣周榜
                  </div>
                  <div class="title-1">热门电影</div>
                </div>
              </div>
              <ul
                class="listTop-right"
                style="background-image: url(https://img1.doubanio.com/view/photo/photo/public/p2556467478.jpg);"
              >
                <div class="list-right-bg"></div>
                <li>
                  <span class="top-num">1.</span>
                  <span class="top-name">少年的你</span>
                  <span class="top-score">8.4</span>
                </li>
                <li>
                  <span class="top-num">2.</span>
                  <span class="top-name">续命之徒：绝命毒师电影</span>
                  <span class="top-score">8.1</span>
                </li>
                <li>
                  <span class="top-num">3.</span>
                  <span class="top-name">我在雨中等你</span>
                  <span class="top-score">8.1</span>
                </li>
              </ul>
            </a>
          </div>
        </section>
        <!-- 豆瓣榜单 end -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@common/components/header";
import MovieHot from "@components/moviehot"
export default {
  name: "movie",
  components: {
    Header,
    MovieHot,
  }
};
</script>

<style>
.content {
  flex: 1;
  overflow-y: auto;
  margin-top: 0.5rem;
  background: #fff;
}
.main {
  display: flex;
  flex-direction: column;
  padding: 0 0.15rem;
}
/* 影院热映 start */
.hotFilm {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-bottom: 0.2rem;
  width: 100%;
}
.hotFilm h2 {
  display: flex;
  align-items: center;
  color: rgba(0,0,0,.5);
  font-size: 0.2rem;
  background-color: #fff;
  height: .5rem;
  position: sticky;
  top: 0;
}
.hotFilm h2 span {
  font-weight: 400;
  padding-bottom: 0.15rem;
  margin-right: 0.15rem;
}
.hotFilm h2 .router-link-active{
  color: rgba(0, 0, 0, 0.9);
  border-bottom:2px solid rgba(0, 0, 0, 0.9);;
}
.movielist {
  width: 100%;
  display: flex;
  padding-top: 0.2rem;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
}
.movie-item {
  display: flex;
  width: calc((100% - 20px) / 3);
  position: relative;
  vertical-align: text-top;
  margin-bottom: 0.15rem;
}
.movie-item .items {
  position: relative;
  overflow: hidden;
}
.movie-item .item-img {
  border-radius: 5px;
  position: relative;
}
.movie-item .item-img img {
  height: 1.52rem;
}
.collect-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.34rem;
  height: 0.34rem;
  color: #fff;
  background: #999;
}
.movie-name {
  font-size: 0.13rem;
  font-weight: 700;
  line-height: 0.23rem;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.score {
  display: flex;
  align-items: center;
}
.score .star {
  display: flex;
}
.star span {
  color: #666;
}
.scorenum {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.12rem;
  padding: 0.03rem 0;
  margin-left: 0.04rem;
}

/* 影院热映 end */

/* 豆瓣热门 start*/
/* 豆瓣热门 end*/

/* 豆瓣榜单 start*/
.listTop {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3rem;
  padding-bottom: 0.2rem;
}
.listTop h2 {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.2rem;
  margin-bottom: 0.2rem;
}
.list-box {
  width: 100%;
  height: 1rem;
  border-radius: 5px;
  margin-bottom: 0.12rem;
  display: flex;
}
.listTop-left {
  background: rgb(76, 70, 58);
  height: 100%;
  width: 1rem;
  border-radius: 5px 0 0 5px;
  position: relative;
}
.listTop-title-box {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-bg {
  font-size: 0.13rem;
  text-align: center;
  color: hsla(0, 0%, 100%, 0.6);
  margin-bottom: 0.04rem;
  position: relative;
  width: 100%;
}
.box-bg {
  font-weight: 500;
  opacity: 0.1;
  font-size: 0.3rem;
  text-align: center;
  color: hsla(0, 0%, 100%, 0.9);
  bottom: 0.1rem;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
}
.title-1 {
  font-size: 0.17rem;
  color: hsla(0, 0%, 100%, 0.9);
  padding: 0 0.1rem;
  text-align: center;
  margin-bottom: 0.02rem;
  line-height: 0.2rem;
}
.listTop-right {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  position: relative;
  padding: 0.2rem 0.2rem 0.2rem 0.16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 4px 4px 0;
  overflow: hidden;
}
.list-right-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0 4px 4px 0;
  opacity: 0.8;
  background-color: rgb(76, 70, 58);
}
.listTop-right-bg2 {
  background-color: rgb(50, 50, 59);
}
.listTop-right li {
  position: relative;
  padding-right: 0.2rem;
  background-repeat: no-repeat;
  background-size: 0.08rem;
  background-position: 100%;
}
.top-num {
  color: #fff;
  font-size: 12px;
  margin-right: 2px;
}
.top-name {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  max-width: 70%;
  white-space: nowrap;
  font-size: 0.13rem;
  color: #fff;
}
.top-score {
  margin-left: 0.06rem;
  color: #ffac2d;
  font-size: 0.11rem;
  font-weight: 400;
  opacity: 0.8;
  display: inline-block;
  vertical-align: middle;
}
.listTop-title-box .boxbg {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 4px 0 0 4px;
  background-position: 50%;
  background-size: contain;
}
/* 豆瓣榜单 end*/

</style>