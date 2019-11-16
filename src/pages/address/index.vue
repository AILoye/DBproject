<template>
    <div class="container">
      <!-- 热门城市-->
      <div class="hot_container">
          <div class="hot_city">热门城市</div> 
          <div class="hc_list" >
            <div class="hc_city_name" v-for="item in hotCity"  :key="item.id">
              {{item.nm}} 
            </div>
          </div>
      </div>
      <!-- 城市列表 -->
      <van-index-bar >
          <div class="city_list">
            <div v-for="(item,index) in cityList"
              :key="index">
              <van-index-anchor class="city_list_item" 
              :key="index"
              >
                <!-- <div class="city_list_item" 
              v-for="(item,index) in cityList" :key="index"> -->
                    <div>{{item.index}}</div>
                
                
                <div class="city_list_name">
                  <v-touch tag="div" class="city_list_name_item"
                  @tap="handleTo(child)"
                  v-for="child in item.list" :key="child.id"  
                 >
                        {{child.nm}}
                  </v-touch>
              </div>
              </van-index-anchor>
            </div>
            </div>
              
          <!-- </div> -->

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
  created(){
      // this.$store.dispatch("address/handleAsyncGetAddress")
    if(!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))){
       //address模块名称(namespace:true)
      this.$store.dispatch("address/handleAsyncGetAddress")
    }
  },
  computed:{
    ...mapState({
      cityList:state=>state.address.cityList,
      hotCity:state=>state.address.hotCity,
    })
  },
  methods:{
    handleTo(child){
      let path=this.$route.params.path||"/commiate";
      this.$router.push(path);
      //修改数据
      this.$store.commit("address/handleUpdateCity",child)
    }
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
.hc_city_name{
  /* margin-top: 0.3rem;
  margin-left: 0.26rem; */
  padding:0.1rem;
  width: 0.9rem;
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