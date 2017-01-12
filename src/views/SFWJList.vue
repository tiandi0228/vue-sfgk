<template lang="html">
  <div class="credit-list">
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
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'credit-list',
    data() {
      return {
        limit: 8,
        ZGFYZDWJLists: [],
        ZJSFYZDWJLists: [],
        activeTab: 'tab1',
        isloading: false
      }
    },
    created() {
      this.ZGFYZDWJList()
      this.ZJSFYZDWJList()
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
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          this.ZGFYZDWJList()
          this.ZJSFYZDWJList()
          this.isloading = false
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
    background: #fff;
    padding-bottom: 10px;
    ul {
      padding: 60px 10px 10px 10px;
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
