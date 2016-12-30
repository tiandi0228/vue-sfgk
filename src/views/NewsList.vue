<template lang="html">
  <div class="news-list">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        {{list.title}}
      </router-link>
    </ul>
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
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
        limit: 30,
        lists: [],
        isloading: false
      }
    },
    created() {
      this.getNewsList()
    },
    methods: {
      // 新闻动态/图片新闻
      getNewsList() {
        self = this
        api.fetchCourtDTList(self.id, self.limit).then(function (res) {
          self.lists = res.ArticleList
        })
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
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
  }
  
  .news-list li {
    line-height: 30px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

</style>
