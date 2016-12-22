<template lang="html">
  <div class="detail">
      <h2>{{title}}</h2>
      <div class="content" v-html="content"></div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'detail',
    data() {
      return {
        title: '',
        content: '',
        tab: this.$route.params.tab
      }
    },
    created() {
      self = this
      switch (self.tab) {
        case 'sscs': // 诉讼常识
          api.fetchSscsInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = res.content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi,'')
          })
          break;
        case 'case': // 典型案例
          api.fetchTypicalCaseInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.content = res.Content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi,'')
          })
          break;
      }
    }
  }

</script>
<style lang="less" scoped>
  .detail {
    margin-bottom: 60px;
  }
  
  .detail h2 {
    text-align: center;
    padding: 20px 0;
  }
  
  .detail .content {
    padding: 0 10px;
  }

</style>
