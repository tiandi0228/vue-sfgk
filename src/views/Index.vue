<template lang="html">
  <div class="menu">
    <ul>
      <router-link :to="{path: '/menu/4'}" tag="li"><span class="icon iconfont icon-news-copy"></span><span>司法资讯</span></router-link>
      <router-link :to="{path: '/judgmentBookList'}" tag="li"><span class="icon iconfont icon-caipanwenshu"></span><span>裁判文书</span></router-link>
      <router-link :to="{path: '/menu/5'}" tag="li"><span class="icon iconfont icon-dengguang"></span><span>执行曝光</span></router-link>
      <router-link :to="{path: '/menu/10'}" tag="li"><span class="icon iconfont icon-paimai"></span><span>执行拍卖</span></router-link>
      <li><a href="http://www.zjwsft.gov.cn/portal/main/domain/index.htm"><span class="icon iconfont icon-jinlingyingcaiwangtubiao72"></span><span>网上法庭</span></a></li>
      <li><a href="http://zj.sifayun.com/"><span class="icon iconfont icon-zhibo"></span><span>庭审直播</span></a></li>
      <!--<router-link :to="{path: '/menu/8'}" tag="li"><span class="icon iconfont icon-gongkai"></span><span>破产公开</span></router-link>-->
      <router-link :to="{path: '/jxjs'}" tag="li"><span class="icon iconfont icon-jian"></span><span>减刑假释</span></router-link>
      <router-link :to="{path: '/sfwj'}" tag="li"><span class="icon iconfont icon-icon4"></span><span>司法文件</span></router-link>
      <router-link :to="{path: '/menu/9'}" tag="li"><span class="icon iconfont icon-5zhongjiejigoubaise"></span><span>中介机构</span></router-link>
    </ul>
    <vFooter></vFooter>
  </div>
</template>
<script>
  export default {
    name: 'menu'
  }

</script>
<style lang="less" scoped>
  .menu ul {
    background: #fff;
    width: 90%;
    padding: 20px 0 10px 0;
    border-radius: 20px;
    position: absolute;
    top: 10%;
    left: 50%;
    margin-left: -45%;
  }
  
  .menu li {
    float: left;
    border: 1px #e3e3e3 solid;
    margin: 0 2.5% 20px 2.5%;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    background: #fff;
    color: #333;
    width: 45%;
  }
  
  .menu li a {
    color: #333;
  }
  
  .menu .iconfont {
    font-size: 24px;
    margin-right: 5px;
  }
  
  .icon-caipanwenshu {
    color: #ce3a3c
  }
  
  .icon-paimai {
    color: #45b35c;
  }
  
  .icon-zhibo {
    color: #e84b2e;
  }
  
  .icon-jian {
    color: #0186d0;
  }
  
  .icon-icon4 {
    color: #0085cf;
  }
  
  .icon-5zhongjiejigoubaise {
    color: #f96268;
  }
  
  .icon-news-copy {
    color: #ffca66;
  }
  
  .icon-dengguang {
    color: #0085cf;
  }
  
  .icon-jinlingyingcaiwangtubiao72 {
    color: #45b35c;
  }
  
  .icon-gongkai {
    color: #ce3a3c;
  }

</style>
