<template lang="html">
  <div class="judgment-book-list">
    <div class="search">
      <form v-on:submit.prevent="searchList">
        <vCourt @childevent="childEventHandler" :state="true"></vCourt>
        <button>搜索</button>
      </form>
    </div>
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.NoticeSDId + '/sdgg'}" tag="li">
        {{list.CaseNo}}
      </router-link>
    </ul>
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'judgment-book-list',
    data() {
      return {
        cbfy: '',
        limit: 20,
        lists: [],
        isloading: false
      }
    },
    created() {
      this.searchList()
    },
    methods: {
      // 获取select法院值
      childEventHandler (fy) {
        this.cbfy = fy
      },
      // 搜索列表
      searchList() {
        self = this
        api.postNoticeSDList({
          'cbfy': self.cbfy,
          'startIndex': 0,
          'endIndex': self.limit
        }).then(function (res) {
          self.lists = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          this.searchList()
          this.isloading = false
        }, 1000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .judgment-book-list {
    margin-bottom: 60px;
    background: #fff;
    padding-bottom: 10px;
    .search {
      color: #000;
      background: #fff;
      padding: 10px;
      select {
        width: 100%;
        clear: both;
        border: 1px #ccc solid;
        height: 40px;
        margin-bottom: 10px;
      }
      button {
        width: 100%;
        clear: both;
        height: 40px;
        background: #20afc5;
        color: #fff;
      }
    }
    ul {
      padding-bottom: 10px;
      li {
        line-height: 30px;
        width: 100%;
        overflow: hidden;
        border-bottom: 1px #e3e3e3 solid;
        display: block;
        padding: 5px 0;
      }
    }
  }

</style>
