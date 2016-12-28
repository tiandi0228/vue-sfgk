<template lang="html">
  <div class="credit-list" :style="{height:Height + 'px'}">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="最高法院指导文件" />
      <mu-tab value="tab2" title="浙江省法院指导文件" />
    </mu-tabs>
    <ul v-if="activeTab === 'tab1'">
      <router-link v-for="list in ZGFYZDWJLists" :to="{path: '/detail/' + list.NoticeId + '/zgfy'}" tag="li">
        {{list.NoticeTitle}}
      </router-link>
    </ul>
    <ul v-if="activeTab === 'tab2'">
      <router-link v-for="list in ZJSFYZDWJLists" :to="{path: '/detail/' + list.NoticeId + '/zjsf'}" tag="li">
        {{list.NoticeTitle}}
      </router-link>
    </ul>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" :loadingText="loadingText" />
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'credit-list',
    data() {
      return {
        limit: 30,
        loading: false,
        scroller: null,
        loadingText: '加载中……',
        Height: '',
        ZGFYZDWJLists: [],
        ZJSFYZDWJLists: [],
        activeTab: 'tab1'
      }
    },
    created() {
      this.ZGFYZDWJList()
      this.ZJSFYZDWJList()
      this.Height = document.body.scrollHeight - 60
    },
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      // 获取司法文件中的最高法院指导文件列表
      ZGFYZDWJList() {
        self = this
        api.fetchCourtHighestGuideFileList(self.limit).then(function (res) {
          self.ZGFYZDWJLists = res.objectdata
        })
      },
      // 获取司法文件中的浙江省法院指导文件列表
      ZJSFYZDWJList() {
        self = this
        api.fetchCourtGuideFileList(self.limit).then(function (res) {
          self.ZJSFYZDWJLists = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.ZGFYZDWJList()
          this.ZJSFYZDWJList()
          this.limit += 10
          this.loading = false
        }, 1000)
      },
      //切换tab
      handleTabChange(val) {
        this.activeTab = val
      }
    }
  }

</script>
<style lang="less" scoped>
  .credit-list {
    margin-bottom: 60px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .credit-list ul {
    padding-top: 20px;
  }
  
  .credit-list li {
    line-height: 30px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    padding: 0 15px;
  }

</style>
