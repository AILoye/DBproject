<template>
    <div class="container">
      <!-- 热门城市-->
      <div class="hot_container">
          <div class="hot_city">热门城市</div> 
          <div class="hc_list" >
            <div class="hc_city_name" >
     
            </div>
          </div>
      </div>
      <!-- 城市列表 -->
      <van-index-bar>
          <div class="city_list">
              <van-index-anchor index="A" class="city_list_item">A</van-index-anchor>
              
              <div class="city_list_name">
                  <v-touch tag="div" class="city_list_name_item">
                        北京
                  </v-touch>
              </div>
          </div>

      </van-index-bar>
    </div>
    
</template>

<style>
</style>

<script>
import {mapState} from "vuex"
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar).use(IndexAnchor);

export default {
  name:"Address",
  create(){
    // if(!(sessionStorage.getItem("cityList")&& sessionStorage.getItem("hotCity"))){
    //    //address模块名称(namespace:true)
    //   this.$store.dispatch("address/handleAsyncGetAddress")
    // }
  },
  computed:{
    // ...mapState({
    //   cityList:state=>state.city.cityList,
    //   hotCity:state=>state.city.hotCity,
    // })
  }

}
</script>

<style>
  .city_container {
  height: 100%;
  overflow: auto;
    background: #ebebeb;

}
/*热门城市*/
.hot_city,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.2rem;
}

.hc_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.20rem;
  border: 2px solid #e6e6e6;
}
.city_list .city_list_item{
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.15rem;
}
</style>