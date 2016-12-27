<template lang="html">
  <div class="menu">
    <ul v-if="this.$route.params.id === '1'">
      <router-link :to="{path: '/menu/6'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼指南</span></router-link>
      <router-link :to="{path: '/menu/7'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>执行指南</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '2'">
      <router-link :to="{path: '/noticeKTList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>开庭公告</span></router-link>
      <router-link :to="{path: '/typicalCaseList/tzgg'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>听证公告</span></router-link>
      <router-link :to="{path: '/noticeSDList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>送达公告</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '3'">
      <router-link :to="{path: '/typicalCaseList/ktgg'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼案件信息查询</span></router-link>
      <router-link :to="{path: '/typicalCaseList/tzgg'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>执行案件信息查询</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '4'">
      <router-link :to="{path: '/newsList/3'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>法院动态</span></router-link>
      <router-link :to="{path: '/newsList/4'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>图片新闻</span></router-link>
      <router-link :to="{path: '/courtNewsList'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>新闻发布会</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '5'">
      <router-link :to="{path: '/creditList/1'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>曝光台</span></router-link>
      <router-link :to="{path: '/typicalCaseList/tzgg'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>执行惩戒</span></router-link>
      <li><a href="http://www.zjsfgkw.cn/Execute/EnforceeListBlock"><span class="icon iconfont icon-sanjiaoxing-copy"><span>失信被执行人名单</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/Execute/ExecuteReport"><span class="icon iconfont icon-sanjiaoxing-copy"><span>执行举报</span></a></li>
    </ul>
    <ul v-if="this.$route.params.id === '6'">
      <router-link :to="{path: '/list/sscs'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>诉讼常识</span></router-link>
      <li><a href="http://www.zjsfgkw.cn/ReferenceCase/Download"><span class="icon iconfont icon-sanjiaoxing-copy"><span>常用文书</span></a></li>
      <li><a href="http://www.zjsfgkw.cn/ReferenceCase/ssgj"><span class="icon iconfont icon-sanjiaoxing-copy"><span>诉讼工具</span></a></li>
      <router-link :to="{path: '/typicalCaseList/dxal'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>典型案例</span></router-link>
    </ul>
    <ul v-if="this.$route.params.id === '7'">
      <router-link :to="{path: '/list/zxcs'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>执行常识</span></router-link>
      <router-link :to="{path: '/list/zxgzxgflgd'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>执行工作相关法律规定</span></router-link>
      <router-link :to="{path: '/list/zjgyzxgd'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"><span>高院执行工作相关规定</span></router-link>
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
    width: 60%;
    padding: 20px 0 10px 0;
    border-radius: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -30%;
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
