<template lang="html">
  <div class="detail">
    <div v-if="title">
      <h2>{{title}}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="mapData" v-if="mapData">
      <h2>{{mapData.department}}</h2>
      <p v-if="mapData.address">联系地址:{{mapData.address}}</p>
      <p v-if="mapData.code">邮政编码:{{mapData.code}}</p>
      <p v-if="mapData.tsdh">投诉电话:<a :href="'tel:' + mapData.tsdh ">{{mapData.tsdh}}</a></p>
      <p v-if="mapData.xfdh">信访电话:<a :href="'tel:' + mapData.xfdh ">{{mapData.xfdh}}</a></p>
    </div>
    <div class="judgment" v-if="this.$route.params.tab === 'judgmentbook'">
      <h2>{{AH}}</h2>
      <p>发布时间：{{CreateTime}}</p>
      <p><a :href="DocumentPdfPath">PDF下载</a></p>
      <div>
        <iframe :src="DocumentHtmlPath" style="width:100%;" frameborder="0" :style="{height:Height + 'px'}"></iframe>
      </div>
    </div>
    <div class="sdgg" v-if="this.$route.params.tab === 'sdgg'">
      <h2>{{AH}}</h2>
      <p style="text-align: center;padding-bottom: 10px;">发布时间：{{Time}}</p>
      <p>{{content}}</p>
      <p style="text-align: right;padding-top: 10px;">{{Court}}</p>
    </div>
    <div class="news" v-if="this.$route.params.tab === 'news'">
      <h2>{{vc_title}}</h2>
      <div style="text-align: center;padding-bottom:10px;">
        <span style="font-size: 12px;">来源：{{source}}</span>
        <span style="padding-left: 10px;font-size: 12px;">发布时间：{{CreateTime}}</span>
      </div>
      <div v-html="content"></div>
    </div>
    <div class="judgment" v-if="this.$route.params.tab === 'cpws'">
      <div>
        <iframe :src="'http://www.zjsfgkw.cn/attachment/paroleDocument/'+DocumentHtmlPath" style="width:100%;" frameborder="0" :style="{height:Height + 'px'}"></iframe>
      </div>
    </div>
    <div v-if="this.$route.params.tab === 'ptjs'">
      <p>为进一步深化司法公开，落实司法为民，提升司法服务的科技化和信息化水平，畅通群众与人民法院之间的联系渠道，浙江法院特设了12368司法服务热线。本热线是集诉讼咨询、案件查询、信访投诉、联系法官等多项功能于一体的综合性诉讼便民服务平台；实行全省三级法院“一号对外、分级部署、各院联动、限时办理”的工作机制。人民法院有专门的热线坐席员，负责接听处理您的来电。</p>
    </div>
  </div>
</template>
<script>
  import * as api from '../api'
  import util from '../util'

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
        Height: '',
        Time: '',
        vc_title: '',
        Court: '',
        source: '',
      }
    },
    created() {
      self = this
      this.Height = document.body.scrollHeight
      switch (self.tab) {
        case 'sscs': // 诉讼常识
          api.fetchSscsInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = util.removeHTMLTag(res.content)
            // self.content = res.content
          })
          break;
        case 'case': // 典型案例
          api.fetchTypicalCaseInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.content = util.removeHTMLTag(res.Content)
            // self.content = res.Content
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
            console.log(res.content)
            self.content = util.removeHTMLTag(res.content)
            // self.content = res.content
          })
          break;
        case 'zxgzxgflgd': // 执行工作相关法律规定
          api.fetchZxgzflgdInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = util.removeHTMLTag(res.content)
            // self.content = res.content
          })
          break;
        case 'zjgyzxgd': // 浙江高院执行工作
          api.fetchZjgyzxgdInfo(self.$route.params.id).then(function (res) {
            self.title = self.$route.params.id
            self.content = util.removeHTMLTag(res.content)
            // self.content = res.content
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
            self.content = util.removeHTMLTag(res.Content)
            // self.content = res.Content
          })
          break;
        case 'sdgg': // 送达公告
          api.fetchNoticeSDInfo(self.$route.params.id).then(function (res) {
            self.AH = res.CaseNo
            self.Time = res.Time
            self.content = util.removeHTMLTag(res.Content)
            // self.content = res.Content
            self.Court = res.Court
          })
          break;
        case 'news': // 新闻
          api.fetchCourtDTContent(self.$route.params.id).then(function (res) {
            self.vc_title = res.vc_title
            self.source = res.vc_source
            self.content = util.removeHTMLTag(res.artcontent)
            // self.content = res.artcontent
            self.CreateTime = res.c_createdate
          })
          break;
        case 'zgfy': // 司法文件中的最高法院指导文件
          api.fetchCourtHighestGuideFileInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.source = res.Source
            self.content = util.removeHTMLTag(res.Content)
            // self.content = res.Content
            self.CreateTime = res.c_createdate
          })
          break;
        case 'zjsf': // 司法文件中的浙江省法院指导文件
          api.fetchCourtGuideFileInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.source = res.Source
            self.content = util.removeHTMLTag(res.Content)
            // self.content = res.Content
            self.CreateTime = res.c_createdate
          })
          break;
        case 'lags': // 立案公示
          api.fetchCommuteGSInfo(self.$route.params.id).then(function (res) {
            self.title = res.Title
            self.content = util.removeHTMLTag(res.Content)
            // self.content = res.Content
            self.CreateTime = res.c_createdate
          })
          break;
        case 'ktgg': // 减刑假释中的开庭公告
          api.fetchExecuteInformationInfo(self.$route.params.id).then(function (res) {
            self.title = res.NoticeTitle
            self.content = util.removeHTMLTag(res.NoticeContent)
            // self.content = res.NoticeContent
            self.CreateTime = res.c_createdate
          })
          break;
        case 'cpws': // 减刑假释中的开庭公告
          api.fetchCommuteParoleDocumentInfo(self.$route.params.id).then(function (res) {
            self.AH = res.AH
            self.DocumentHtmlPath = res.DocumentHtmlPath
          })
          break;
      }
    }
  }

</script>
<style lang="less" scoped>
  .detail {
    padding: 0 10px;
    background: #fff;
    h2 {
      text-align: center;
      padding: 20px 0;
    }
    .judgment p {
      text-align: center;
      padding-bottom: 10px;
    }
    .mapData p {
      line-height: 40px;
    }
  }

</style>
