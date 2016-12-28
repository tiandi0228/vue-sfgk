<template lang="html">
  <div class="case-query-list" :style="{height:Height + 'px'}">
    <div class="search">
      <p>案号：(
        <mu-text-field v-model="AH_NH"/> )</p>
      <p>
        <mu-text-field v-model="AH_ZH"/> 字 第
        <mu-text-field v-model="AH_BH"/> 号</p>
      <p>当事人：
        <mu-text-field v-model="DSR"/>
      </p>
      <button>搜索</button>
    </div>
    <ul>
      <li>
        <p>案号：</p>
        <div>
          <p>法院：</p>
          <p>当事人：</p>
        </div>
        <p><span style="float:left;">案件状态：</span><span style="float:right;">立案时间：</span></p>
      </li>
    </ul>
    <vFooter></vFooter>
  </div>
</template>
<script>
  export default {
    name: 'case-query-list',
    data() {
      return {
        AH_NH: '2016',
        AH_ZH: '',
        AH_BH: '',
        DSR: '',
        limit: 10,
        loading: false,
        scroller: null,
        loadingText: '加载中……',
        Height: ''
      }
    },
    created() {

    },
    methods: {

    }
  }

</script>
<style lang="less" scoped>
  .case-query-list .search {
    background: #fff;
    color: #000;
    text-align: center;
    padding: 10px;
  }
  
  .case-query-list .search .mu-text-field {
    width: 120px;
  }
  
  .case-query-list .search button {
    width: 100%;
    clear: both;
    height: 40px;
    background: #20afc5;
    color: #fff;
  }
  
  .case-query-list li {
    background: #fff;
    margin: 10px 0 0 0;
    color: #000;
    overflow: hidden;
  }
  
  .case-query-list li p {
    padding: 0 10px;
    line-height: 40px;
  }
  
  .case-query-list li div {
    background: #dfdfdf;
  }

</style>
