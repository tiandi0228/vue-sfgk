<template lang="html">
  <div class="menu">
    <ul>
      <router-link :to="{path: '/detail/1/ptjs'}" tag="li"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>平台介绍</span></router-link>
      <li><a href="tel:12368"><span class="icon iconfont icon-sanjiaoxing-copy"></span><span>12368热线</span></a></li>
    </ul>
    <vFooter></vFooter>
  </div>
</template>
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
    li {
      border: 1px #e3e3e3 solid;
      margin: 0 10px 20px 10px;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      background: #fff;
      color: #333;
      a {
        color: #333;
      }
      .iconfont {
        color: #0186d0;
      }
    }
  }
</style>
