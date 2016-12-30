<template lang="html">
  <div class="list">
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
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
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
        tab: this.$route.params.tab,
        NoticeTZList: [],
        isloading: false
      }
    },
    created() {
      self = this
      switch (self.tab) {
        case 'dxal': // 典型案例
          self.getTypicalCaseList()
          break;
        case 'tzgg': // 听证公告
          self.getNoticeTZList()
          break;
      }
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
        api.postNoticeTZList({
          'startIndex': 0,
          'endIndex': self.limit
        }).then(function (res) {
          self.NoticeTZList = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          switch (this.tab) {
            case 'dxal': // 典型案例
              this.getTypicalCaseList()
              break;
            case 'tzgg': // 听证公告
              this.getNoticeTZList()
              break;
          }
          this.isloading = false
        }, 1000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .list {
    margin-bottom: 60px;
    padding: 10px 10px 0 10px;
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
