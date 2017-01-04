<template lang="html">
  <div class="news-list">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        {{list.title}}
      </router-link>
    </ul>
    <div class="pager perv" @click="perv()">上一页</div>
    <div class="pager next" @click="next()">下一页</div>
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
          console.log(res.ArticleList)
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
    margin-bottom: 100px;
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

  .pager{
    float: left;
    width: 49%;
    background: #fff;
    height: 40px;
    color: #333;
    text-align: center;
    line-height: 40px;
    margin-top: 10px;
  }

  .pager.perv{
    margin-right: 2%;
  }
</style>
