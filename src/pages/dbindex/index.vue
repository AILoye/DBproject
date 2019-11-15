<template>
  <div class="page">
    <Header />
    <div class="content">
      <div class="app-content">
        <div class="app-items">
          <router-link href="#" tag="a" to="/movie">
            <h2 style="color: #2384E8;">找电影</h2>
            <span>影院热映</span>
          </router-link>
          <a href="#">
            <h2 style="color: #7A6ADB;">热播剧</h2>
            <span>剧集综艺</span>
          </a>
          <router-link href="#" tag="a" to="/book">
            <h2 style="color: #9F7860;">畅销书</h2>
            <span>畅销排行</span>
          </router-link>
          <router-link href="#" tag="a" to="/group">
            <h2 style="color: #2AB8CC;">找小组</h2>
            <span>志趣相投</span>
          </router-link>
          <a href="#">
            <h2 style="color: #F48F2E;">找音乐</h2>
            <span>新碟榜</span>
          </a>
          <router-link href="#" tag="a" to="/bean">
            <h2 style="color: #42BD56;">豆品</h2>
            <span>生活美学</span>
          </router-link>
        </div>
      </div>
      <div class="app-top">
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
export default {
  name: "Dbindex",
  components: {
    Header,
  }
};
</script>

<style>
.page {
  height: 100%;
}
.content {
  flex: 1;
  overflow-y: auto;
  margin-top: 0.5rem;
  background: #fff;
}
.app-content {
  padding: 0.15rem 0.18rem 0;
}
.app-items {
  border: 1px solid rgba(236, 236, 236, 0.5);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.app-items a {
  display: block;
  border-right: 1px solid rgba(236, 236, 236, 0.5);
  border-bottom: 1px solid rgba(236, 236, 236, 0.5);
  box-sizing: border-box;
  width: 33.3%;
  padding: 0.18rem 0 0.16rem;
  text-align: center;
}
.app-items h2 {
  font-weight: 500;
  font-size: 0.19rem;
  line-height: 0.26rem;
  margin-bottom: 0.02rem;
}
.app-items span {
  display: block;
  color: #818181;
  font-size: 0.13rem;
  line-height: 0.17rem;
  letter-spacing: 1px;
}
/* content end */
/*app start*/
.app-top {
  padding: 0.2rem 0.15rem;
}
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
</style>