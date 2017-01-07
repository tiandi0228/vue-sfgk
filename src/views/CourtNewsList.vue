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
    padding: 10px 10px 0 10px;
    margin-bottom: 60px;
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

</style>
