<template lang="html">
  <div class="news-list">
    <vSlider v-if="id === '4'" :pagination-visible="true" :slides="slides" :repeating="true" :auto="5000">
      <div class="slider" v-for="(slide,index) in slides" :key="index">
        <router-link :to="{path: '/detail/' + slide.artid + '/news'}" tag="a">
          <img :src="slide.img" />
        </router-link>
      </div>
    </vSlider>
    <ul v-if="id === '4'">
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        <img :src="list.img">
        <span>{{list.title}}</span>
      </router-link>
    </ul>
    <ul v-else>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.artid + '/news'}" tag="li">
        {{list.title}} <em v-if="Math.floor((Date.parse(new Date()) - Date.parse(new Date(list.publishtime.substring(0,10)))) / 86400/3600) <= 1">New</em>
      </router-link>
    </ul>
    <div class="pager" v-if="id === '3' || id === '4'">
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
        page: 2,
        pages: 1,
        lists: [],
        slides: []
      }
    },
    created() {
      if (this.id === '4') {
        this.getGuide()
        this.getCourtPICList()
      } else {
        this.getNewsList()
      }
    },
    methods: {
      // 导读图片
      getGuide() {
        self = this
        api.fetchGetCourtPICList(self.id, 1).then(function (res) {
          self.slides = res
        })
      },
      // 法院动态
      getNewsList() {
        self = this
        api.fetchCourtDTList(self.id, self.pages).then(function (res) {
          self.lists = res.ArticleList
          console.log(res)
        })
      },
      // 图片新闻
      getCourtPICList() {
        self = this
        api.fetchGetCourtPICList(self.id, self.page).then(function (res) {
          self.lists = res
        })
      },
      // 上一页
      perv() {
        this.isloading = true
        this.page -= 1
        setTimeout(() => {
          if (this.id === '3') {
            this.getNewsList()
          } else {
            this.getCourtPICList()
          }
          this.isloading = false
        }, 1000)
      },
      // 下一页
      next() {
        this.isloading = true
        this.page += 1
        setTimeout(() => {
          if (this.id === '4') {
            this.getCourtPICList()
          } else {
            this.getNewsList()
          }
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
    .slider img {
      width: 100%;
    }
    li {
      line-height: 30px;
      width: 100%;
      overflow: hidden;
      border-bottom: 1px #e3e3e3 solid;
      display: block;
      padding: 5px 0;
      img {
        float: left;
        width: 80px;
        height: 80px;
      }
      span {
        float: left;
        width: 70%;
        display: inline-block;
        padding-left: 2%;
      }
      em {
        color: #ff0000;
      }
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
  }

</style>
