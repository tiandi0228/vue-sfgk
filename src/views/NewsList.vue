<template lang="html">
  <div class="news-list" :style="{height:Height + 'px'}">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        {{list.title}}
      </router-link>
    </ul>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" :loadingText="loadingText" />
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
        loading: false,
        scroller: null,
        loadingText: '加载中……',
        lists: []
      }
    },
    created() {

      this.getNewsList()
      this.Height = document.body.scrollHeight - 60
    },
    mounted() {
      this.scroller = this.$el
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
        this.loading = true
        setTimeout(() => {
          this.getNewsList()
          this.limit += 10
          this.loading = false
        }, 2000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .news-list {
    margin-bottom: 60px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
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
