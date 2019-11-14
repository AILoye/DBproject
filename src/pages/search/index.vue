<template>
  <div class="page">
    <Header />
    <div class="search_box">
      <div class="search_input">
        <input type="text" placeholder="搜索 书 / 影 / 音 / 标签" v-model="value"/>
        <a href="#">搜索</a>
      </div>
      <div class="input_box">
        <h3 class="title">影视</h3>
        <a href="/movie/subject/3318306/" class="search-results">
          <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1844164420.webp" />
          <div class="subject-info">
            <span class="subject-title">电影43</span>
            <p class="rating">
              <span class="rating-stars" data-rating="64.0">
                <span class="rating-star rating-star-small-full"></span>
                <span class="rating-star rating-star-small-full"></span>
                <span class="rating-star rating-star-small-full"></span>
                <span class="rating-star rating-star-small-half"></span>
                <span class="rating-star rating-star-small-gray"></span>
              </span>

              <span>6.4</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@common/components/header";
import {SearchlApi} from "@api/movie"
export default {
  name: "Search",
  components: {
    Header
  },
  data(){
      return{
          value:"",
          list:[]
      }
  },
  watch:{
    async value(newVal){
        let data = await SearchlApi(newVal)
        console.log(data);
      }
  }
};
</script>

<style>
.page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.search_box {
  margin-top: 0.5rem;
  width: 100%;
  background: #fff;
  height: 100%;
}
.search_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
}
.search_input input {
  width: 2.84rem;
  height: 0.3rem;
  background: #f5f5f5;
  color: #191919;
  padding: 0 0.1rem;
  border-radius: 3px;
}
.search_input a {
  width: 0.5rem;
  height: 0.3rem;
  color: #333;
  text-align: center;
  line-height: 0.3rem;
}
.input_box {
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
}
.input_box .title {
  font-size: 15px;
  line-height: 0.15rem;
  color: #818181;
}
.search-results{
    border-bottom: 1px solid #F2F2F2;
    overflow: hidden;
    display: block;
}
.search-results img {
    float: left;
    padding: 10px 0px;
    width: 40px;
}
.subject-info {
    display: block;
    padding: 10px 0;
    overflow: hidden;
}
.subject-title {
    display: block;
    padding-left: 10px;
    font-size: 17px;
    color: #494949;
}
.rating {
    padding-left: 10px;
    -webkit-margin-after: 0px;
    -webkit-margin-before: 3px;
}
.rating span {
    color: #818181;
    font-size: 12px;
    height: 14px;
    vertical-align: middle;
}
</style>