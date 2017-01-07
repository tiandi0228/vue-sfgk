<template lang="html">
  <div class="news-list">
    <ul v-if="id === '3'">
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        {{list.title}}
      </router-link>
    </ul>
    <ul v-else>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        <img src="" alt="">
        <span>{{list.title}}</span>
      </router-link>
    </ul>
    <div class="pager">
      <span class="perv" @click="perv()">上一页</span>
      <span class="next" @click="next()">下一页</span>
    </div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'news-list',
    data() {
      return {
        id: this.$route.params.id,
        page: 1,
        lists: []
      }
    },
    created() {
      this.getNewsList()
    },
    methods: {
      // 新闻动态/图片新闻
      getNewsList() {
        self = this
        api.fetchCourtDTList(self.id, self.page).then(function (res) {
          self.lists = res.ArticleList
        })
      },
      // 上一页
      perv() {
        this.isloading = true
        this.page -= 1
        setTimeout(() => {
          this.getNewsList()
          this.isloading = false
        }, 1000)
      },
      // 下一页
      next() {
        this.isloading = true
        this.page += 1
        setTimeout(() => {
          this.getNewsList()
          this.isloading = false
        }, 1000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .news-list {
    margin-bottom: 60px;
    padding: 10px;
    background: #fff;
  }
  
  .news-list li {
    line-height: 30px;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px #e3e3e3 solid;
    display: block;
    padding: 5px 0;
  }
  
  .news-list li img {
    float: left;
    width: 20%;
  }
  .news-list li span {
    float: left;
    width: 80%;
    display: inline-block;
  }
  .pager {
    width: 100%;
    background: #fff;
    height: 40px;
    margin-top: 10px;
  }
  
  .pager span {
    float: left;
    width: 50%;
    color: #333;
    text-align: center;
    line-height: 40px;
    display: inline-block;
  }

</style>
