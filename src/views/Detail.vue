<template lang="html">
  <div class="detail">
    <div v-if="title">
      <h2>{{title}}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div v-if="mapData">
      <h2>{{mapData.department}}</h2>
      <p v-if="mapData.address">联系地址:{{mapData.address}}</p>
      <p v-if="mapData.code">邮政编码:{{mapData.code}}</p>
      <p v-if="mapData.tsdh">投诉电话:{{mapData.tsdh}}</p>
      <p v-if="mapData.xfdh">信访电话:{{mapData.xfdh}}</p>
    </div>
    <div class="judgment" v-if="AH">
      <h2>{{AH}}</h2>
      <p>发布时间：{{CreateTime}}</p>
      <p><a :href="DocumentPdfPath">PDF下载</a></p>
      <div>
        <iframe :src="DocumentHtmlPath" style="width:100%;" frameborder="0" :style="{height:Height + 'px'}"></iframe>
      </div>
    </div>
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
        tab: this.$route.params.tab,
        mapData: '',
        DocumentHtmlPath: '',
        DocumentPdfPath: '',
        AH: '',
        CreateTime: '',
        Height: ''
      }
    },
    created() {
      self = this
      this.Height = document.body.scrollHeight
      switch (self.tab) {
        case 'sscs': // 诉讼常识
          api.fetchSscsInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = res.content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '')
          })
          break;
        case 'case': // 典型案例
          api.fetchTypicalCaseInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.content = res.Content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '')
          })
          break;
        case 'map': // 法院地图
          api.fetchMapInfo(self.$route.params.id).then(function (res) {
            self.mapData = res
          })
          break;
        case 'zxcs': // 执行常识
          api.fetchZxcsInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = res.content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '')
          })
          break;
        case 'zxgzxgflgd': // 执行工作相关法律规定
          api.fetchZxgzflgdInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = res.content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '')
          })
          break;
        case 'zjgyzxgd': // 浙江高院执行工作
          api.fetchZjgyzxgdInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = res.content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '')
          })
          break;
        case 'judgmentbook': // 裁判文书
          api.fetchJudgmentBookDeatil(self.$route.params.id).then(function (res) {
            self.AH = res.Data.AH
            self.DocumentHtmlPath = res.Data.DocumentHtmlPath,
            self.DocumentPdfPath = res.Data.DocumentPdfPath,
            self.CreateTime = res.Data.CreateTime
          })
          break;
        case 'tzgg': // 听证公告
          api.fetchNoticeTZInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.content = res.Content.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '')
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
  
  .detail .judgment p {
    text-align: center;
    padding-bottom: 10px;
  }

</style>
