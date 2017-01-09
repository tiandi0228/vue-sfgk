<template lang="html">
  <div class="news-list">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/newsList/' + list.cataid}" tag="li">
        {{list.catalog}}
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
        lists: [],
        page: 1
      }
    },
    created() {
      this.getCourtNewsList()
    },
    methods: {
      getCourtNewsList() {
        self = this
        // 新闻发布会
        api.fetchCourtNewsList(5, self.page).then(function (res) {
          self.lists = res.CatalogList
        })
      },
      // 上一页
      perv() {
        this.isloading = true
        this.page -= 1
        setTimeout(() => {
          this.getCourtNewsList()
          this.isloading = false
        }, 1000)
      },
      // 下一页
      next() {
        this.isloading = true
        this.page += 1
        setTimeout(() => {
          this.getCourtNewsList()
          this.isloading = false
        }, 1000)
      }
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
