<template lang="html">
  <div class="list" :style="{height:Height + 'px'}">
    <ul v-if="TypicalCaseList">
      <router-link v-for="list in TypicalCaseList" :to="{path: '/detail/' + list.NoticeId + '/case'}" tag="li">
        <span>{{list.NoticeTitle}}</span>
        <em>{{list.NoticeDate}}</em>
      </router-link>
    </ul>
    <ul v-if="NoticeTZList">
      <router-link v-for="list in NoticeTZList" :to="{path: '/detail/' + list.NoticeTZId + '/tzgg'}" tag="li">
        <span>{{list.Title}}</span>
        <em>{{list.Time}}</em>
      </router-link>
    </ul>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" :loadingText="loadingText" />
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'

  export default {
    name: 'list',
    data() {
      return {
        TypicalCaseList: [],
        limit: 30,
        loading: false,
        scroller: null,
        loadingText: '加载中……',
        Height: '',
        tab: this.$route.params.tab,
        NoticeTZList: []
      }
    },
    created() {
      self = this
      switch (self.tab) {
        case 'dxal': // 典型案例
          this.getTypicalCaseList()
          break;
        case 'tzgg': // 听证公告
          this.getNoticeTZList()
          break;
      }
      self.Height = document.body.scrollHeight - 60
    },
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      // 典型案例列表
      getTypicalCaseList() {
        self = this
        api.fetchTypicalCaseList(self.limit).then(function (res) {
          self.TypicalCaseList = res.objectdata
        })
      },
      // 听证公告列表
      getNoticeTZList() {
        api.fetchNoticeTZList(self.limit).then(function (res) {
          self.NoticeTZList = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.loading = true
        setTimeout(() => {
          switch (self.tab) {
            case 'dxal': // 典型案例
              this.getTypicalCaseList()
              break;
            case 'tzgg': // 听证公告
              this.getNoticeTZList()
              break;
          }
          this.limit += 10
          this.loading = false
        }, 2000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .list {
    margin-bottom: 60px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .list li {
    line-height: 30px;
    overflow: hidden;
  }
  
  .list span {
    float: left;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  
  .list em {
    float: right;
    max-width: 30%;
  }

</style>
