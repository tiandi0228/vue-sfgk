<template lang="html">
  <div class="menu">
    <ul v-if="this.$route.params.id === '1'">
      <router-link :to="{path: '/menu/6'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼指南</span></router-link>
      <router-link :to="{path: '/menu/7'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行指南</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '2'">
      <router-link :to="{path: '/noticeKTList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>开庭公告</span></router-link>
      <router-link :to="{path: '/typicalCaseList/tzgg'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>听证公告</span></router-link>
      <router-link :to="{path: '/noticeSDList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>送达公告</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '3'">
      <router-link :to="{path: '/caseQueryList/ssaj'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼案件信息查询</span></router-link>
      <router-link :to="{path: '/caseQueryList/zxaj'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行案件信息查询</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '4'">
      <router-link :to="{path: '/newsList/3'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>法院动态</span></router-link>
      <router-link :to="{path: '/newsList/4'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>图片新闻</span></router-link>
      <router-link :to="{path: '/courtNewsList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>新闻发布会</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '5'">
      <router-link :to="{path: '/creditList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>曝光台</span></router-link>
      <router-link :to="{path: '/limitList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行惩戒</span></router-link>
      <li><a href="http://www.zjsfgkw.cn/Execute/EnforceeListBlock"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>失信被执行人名单</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/Execute/ExecuteReport"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行举报</span></a></li>
    </ul>
    <ul v-if="this.$route.params.id === '6'">
      <router-link :to="{path: '/list/sscs'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼常识</span></router-link>
      <li><a href="http://www.zjsfgkw.cn/ReferenceCase/Download"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>常用文书</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/ReferenceCase/ssgj"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼工具</span></a></li>
      <router-link :to="{path: '/typicalCaseList/dxal'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>典型案例</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '7'">
      <router-link :to="{path: '/list/zxcs'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行常识</span></router-link>
      <router-link :to="{path: '/list/zxgzxgflgd'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行工作相关法律规定</span></router-link>
      <router-link :to="{path: '/list/zjgyzxgd'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>高院执行工作相关规定</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '8'">
      <li><a href="http://www.zjsfgkw.cn/BankruptInfo/Publication"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>破产公告</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/BankruptInfo/AssetPublication"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>破产财产处置公告</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/BankruptInfo/CaseSearch"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>破产案件查询</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/BankruptInfo/Documents"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>破产文书</span></a></li>
    </ul>
    <ul v-if="this.$route.params.id === '9'">
      <li><a href="http://www.zjsfgkw.cn/TrialProcess/Agency"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>社会中介机构</span></a></li>
      <li><a href="http://112.124.2.191/wtjdjg/"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>司法鉴定人名册</span></a></li>
    </ul>
    <ul v-if="this.$route.params.id === '10'">
      <li><a href="http://www.rmfysszc.gov.cn/statichtml/rm_sindex/100/rm_sindex.shtml"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>司法拍卖公告</span></a></li>
      <li><a href="http://www.taobao.com/go/act/sf/zhejiang.php?spm=a213w.3064813.0.0.aomtJB"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>淘宝“拍卖会”司法拍卖</span></a></li>
    </ul>
    <vFooter></vFooter>
  </div>
</template>
<script>
  export default {
    name: 'menu',
  }

</script>
<style lang="less" scoped>
  .menu ul {
    background: #01c8ea;
    width: 80%;
    padding: 20px 0 10px 0;
    border-radius: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -40%;
  }
  
  .menu li {
    border: 2px #fff solid;
    margin: 0 10px 20px 10px;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    background: #a0effb;
    color: #20afc5;
  }

  .menu li a{
      color: #20afc5;
  }

</style>
