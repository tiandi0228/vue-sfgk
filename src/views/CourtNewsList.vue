<template lang="html">
  <div class="news-list">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/newsList/' + list.cataid}" tag="li">
        {{list.catalog}}
      </router-link>
    </ul>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'news-list',
    data() {
      return {
        lists: []
      }
    },
    created() {
      self = this
      // 新闻发布会
      api.fetchCourtNewsList(5).then(function (res) {
        self.lists = res.CatalogList
      })
    }
  }

</script>
<style lang="less" scoped>
  .news-list {
    margin-bottom: 60px;
    padding: 10px 10px 0 10px;
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
