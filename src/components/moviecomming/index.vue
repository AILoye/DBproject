<template>
  <div>
      <div class="movielist">
        <router-link 
          href="#" 
          class="movie-item" 
          v-for="item in movieList" 
          :key="item.id"
          :to="'/detail/'+item.id+'/'+item.title"
        >
          <div class="items">
            <div class="item-img">
              <img
                class="item-bg"
                :src="item.cover.url"
              />
            </div>
            <span class="collect-icon iconfont icon-weishoucang-" style="font-size: .3rem;"></span>
            <div>
              <div class="movie-name">{{item.title}}</div>
              <div class="score">
                <span class="scorenum">{{item.wish_count}}人想看</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import { movieCommingApi } from "@api/movie"
export default {
   data(){
    return {
      movieList:[]
    }
  },
  async created(){
    this.handleGetMovieList(1,"HZ1f")
  },
  methods:{
    async handleGetMovieList (for_mobile,ck){
      let data = await movieCommingApi(for_mobile,ck)
      this.movieList = data.modules[5].data.subject_collection_boards[0].items;
      this.movieList.splice(6,4)
      // console.log(this.movieList)
    }
  }
};
</script>

<style>
</style>