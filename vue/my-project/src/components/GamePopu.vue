<template>
  <div class="popularityApp">
    <h2 class="tit">
      推荐
      <van-icon name="arrow" />
    </h2>
    <div class="Popularity-item">
      <ul class="popu-ul">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <li v-for="(r,index) in games" :key="index" @click="toDetal(index)">
            <div class="popularity-img">
              <img :src="r.imgurl" alt />
            </div>
            <div class="introduce">
              <h4 class="tit-h" v-text="r.title"></h4>
              <p class="size">
                <span v-text="r.num"></span>
                <span v-text="r.size"></span>
              </p>
            </div>
            <div class="download">
              <span class="down">下载</span>
            </div>
          </li>
        </van-list>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { List } from "vant";

Vue.use(List);
Vue.use(Icon);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      games: []
    };
  },
  created() {
    this.$parent.$data.test = "abc";
    // window.console.log(this);
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/games").then(({ data }) => {
        this.games = this.games.concat(data);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.games.length >= 7) {
          this.finished = true;
        }
      });
      // window.console.log("到底部了");
    },
    // 跳转详情页
    // toDetal(index) {
    //   this.$router.push({
    //     name: "detail",
    //     params: {
    //       id: index
    //     }
    //   });
    // }
  }

};
</script>