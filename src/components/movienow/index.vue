<template>
  <div class="moviebody" ref="moviebody">
    <div class="movielist">
      <router-link
        href="#"
        class="movie-item"
        v-for="item in movieComList"
        :key="item.id"
        :to="'/detail/'+item.id+'/'+item.title"
      >
        <div class="items">
          <div class="item-img">
            <img class="item-bg" :src="item.cover.url" />
          </div>
          <span class="collect-icon iconfont icon-weishoucang-" style="font-size: .3rem;"></span>
          <div>
            <div class="movie-name">{{item.title}}</div>
            <div class="score">
              <span class="star">
                <span class="iconfont icon-pingfen"></span>
                <span class="iconfont icon-pingfen"></span>
                <span class="iconfont icon-pingfen"></span>
                <span class="iconfont icon-pingfen"></span>
                <span class="iconfont icon-pingfen"></span>
              </span>
              <!-- <span class="scorenum">{{item.rating.value}}</span> -->
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { movieNowApi } from "@api/movie";
import BScroll from "better-scroll";
export default {
  name: "MovieNow",
  data() {
    return {
      movieComList: [],
      arr:[]
    };
  },
  created() {
    this.handleGetMovieList(1, "HZ1f");
  },
  mounted() {
   this.moviebody = new BScroll(this.$refs.moviebody,{
     pullingDownRefresh:true,
     pullUpLoad:true,
     click:true,
     tap:true
   });

  },
  activated(){

  },
  methods: {
    async handleGetMovieList(for_mobile, ck) {
      let data = await movieNowApi(for_mobile, ck);
      sessionStorage.setItem("movieComList",JSON.stringify(data))
      this.movieComList = sessionStorage.getItem("movieComList") ? 
      JSON.parse(sessionStorage.getItem("movieComList")).modules[4].data.subject_collection_boards[0].items:data.modules[4].data.subject_collection_boards[0].items ;
        this.movieComList.splice(9,66)
      
    },
    handlepullingDown(){
      this.$refs.moviebody.on("pullingDown",()=>{
        console.log(123)
      })
    }
  },
 
};
</script>

<style>
.moviebody {
  height: 4.2rem;
  overflow: hidden;
}
</style>