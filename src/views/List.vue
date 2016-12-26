<template lang="html">
  <div class="list">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.title + '/' + tab}" tag="li">
        <span>{{list.title}}</span>
      </router-link>
    </ul>
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
        tab: this.$route.params.tab
      }
    },
    created() {
      self = this
      switch (self.tab) {
        case 'sscs': // 诉讼常识
          api.fetchSscsList().then(function (res) {
            self.lists = res
          })
          break;
        case 'zxcs': // 执行常识
          api.fetchZxcsList().then(function (res) {
            self.lists = res
          })
          break;
        case 'zxgzxgflgd': // 执行工作相关法律规定
          api.fetchZxgzflgdList().then(function (res) {
            self.lists = res
          })
          break;
        case 'judgmentbook': // 裁判文书
          api.fetchZjgyzxgdList().then(function (res) {
            self.lists = res
          })
          break;
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

</style>
