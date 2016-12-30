<template lang="html">
  <div class="menu">
    <ul>
      <router-link :to="{path: '/menu/4'}" tag="li"><span class="icon iconfont icon-news-copy"></span><span>司法资讯</span></router-link>
      <router-link :to="{path: '/judgmentBookList'}" tag="li"><span class="icon iconfont icon-caipanwenshu"></span><span>裁判文书</span></router-link>
      <router-link :to="{path: '/menu/5'}" tag="li"><span class="icon iconfont icon-dengguang"></span><span>执行曝光</span></router-link>
      <router-link :to="{path: '/menu/10'}" tag="li"><span class="icon iconfont icon-paimai"></span><span>执行拍卖</span></router-link>
      <li><a href="http://www.zjwsft.gov.cn/portal/main/domain/index.htm"><span class="icon iconfont icon-jinlingyingcaiwangtubiao72"></span><span>网上法庭</span></a></li>
      <li><a href="http://zj.sifayun.com/"><span class="icon iconfont icon-zhibo"></span><span>庭审直播</span></a></li>
      <router-link :to="{path: '/menu/8'}" tag="li"><span class="icon iconfont icon-gongkai"></span><span>破产公开</span></router-link>
      <router-link :to="{path: '/jxjs'}" tag="li"><span class="icon iconfont icon-jian"></span><span>减刑假释</span></router-link>
      <router-link :to="{path: '/sfwj'}" tag="li"><span class="icon iconfont icon-icon4"></span><span>司法文件</span></router-link>
      <router-link :to="{path: '/menu/9'}" tag="li"><span class="icon iconfont icon-5zhongjiejigoubaise"></span><span>中介机构</span></router-link>
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
    top: 10%;
    left: 50%;
    margin-left: -40%;
  }
  
  .menu li {
    float: left;
    border: 2px #fff solid;
    margin: 0 2.5% 20px 2.5%;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    background: #a0effb;
    color: #20afc5;
    width: 45%;
  }
  
  .menu li a {
    color: #20afc5;
  }
  
  .menu .iconfont {
    font-size: 24px;
    margin-right: 5px;
  }

</style>
