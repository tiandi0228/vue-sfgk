<template lang="html">
  <div class="list" :style="{height:Height + 'px'}">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.NoticeId + '/case'}" tag="li">
        <span>{{list.NoticeTitle}}</span>
        <em>{{list.NoticeDate}}</em>
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
        lists: [],
        limit: 30,
        loading: false,
        scroller: null,
        loadingText: '加载中……',
        Height: ''
      }
    },
    created() {
      this.getTypicalCaseList()
      this.Height = document.body.scrollHeight - 60
    },
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      // 列表
      getTypicalCaseList() {
        self = this
        api.fetchTypicalCaseList(self.limit).then(function (res) {
          self.lists = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.getTypicalCaseList()
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
