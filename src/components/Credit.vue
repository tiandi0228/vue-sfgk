<template lang="html">
  <div class="credit">
    <ul>
      <li v-for="list in lists">
        <p>姓名：{{list.ReallyName}}</p>
        <!--<div style="width:100%;height: 30px;overflow: hidden;"><span style="float: left;">证件号码：</span><em style="float: left;">{{list.CredentialsNumber}}</em></div>-->
        <div class="con">
          <p style="padding-top:10px;">地址：{{list.Address}}</p>
          <p>执行依据：{{list.ZXYJ}}</p>
          <p>案号：{{list.AH}}</p>
          <p>执行案由：{{list.ZXAY}}</p>
          <p>执行法院：{{list.ZXFY}}</p>
          <p>未执行金额：{{list.WZXJE}}</p>
          <p style="padding-bottom:10px;">标的金额：{{list.WZXJE}}</p>
        </div>
        <p style="padding-top:10px;">曝光时间：{{list.BGRQ}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      lists: {
        type: Array,
        default: []
      },
    }
  }
</script>
<style lang="less" scoped>
  .credit li {
    line-height: 30px;
    display: block;
    overflow: hidden;
    background: #fff;
    margin-bottom: 10px;
    color: #333;
    padding: 10px;
  }
  
  .credit li p {
    overflow: hidden;
  }
  
  .credit li .con {
    border-top: 1px #ccc solid;
    border-bottom: 1px #ccc solid;
  }
</style>
