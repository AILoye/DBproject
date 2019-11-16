<template>
  <div class="movielist">
    <router-link
          href="#" 
          class="movie-item" 
          v-for="item in movieHotList"
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
            <span class="star">
              <span class="iconfont icon-pingfen"></span>
              <span class="iconfont icon-pingfen"></span>
              <span class="iconfont icon-pingfen"></span>
              <span class="iconfont icon-pingfen"></span>
              <span class="iconfont icon-pingfen"></span>
            </span>
            <span class="scorenum">{{item.rating.value}}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { movieHotApi } from "@api/movie";
export default {
    name:"movieHot",
  data() {
    return {
      movieHotList: []
    };
  },
  async created() {
    this.handleGetMovieList(1, "HZ1f");
  },
  methods: {
    async handleGetMovieList(for_mobile, ck) {
        let data = await movieHotApi(for_mobile, ck);
        this.movieHotList = data.modules[6].data.subject_collection_boards[0].items;
        this.movieHotList.splice(6, 14);
        console.log(this.movieHotList)
    }
  }
};
</script>
<style>
</style>