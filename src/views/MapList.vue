<template lang="html">
  <div class="map-list">
      <div class="list" @change="btn(0)">
        <span class="txt">杭州市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <ul>
          <li></li>
      </ul>
      <div class="list" @click="btn(1)">
        <span class="txt">宁波市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(2)">
        <span class="txt">温州市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(3)">
        <span class="txt">湖州市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(4)">
        <span class="txt">嘉兴市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(5)">
        <span class="txt">绍兴市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(6)">
        <span class="txt">金华市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(7)">
        <span class="txt">衢州市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(8)">
        <span class="txt">舟山市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(9)">
        <span class="txt">台州市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
      <div class="list" @click="btn(10)">
        <span class="txt">丽水市</span>
        <span class="icon iconfont icon-down"></span>
      </div>
  </div>
</template>
<script>
  import * as api from '../api'

  export default {
    name: 'map-list',
    data() {
      return {

      }
    },
    methods: {
        btn(index) {
            console.log(index)
        }
    }
  }

</script>
<style lang="less" scoped>
  .map-list .list {
    line-height: 30px;
    background: #fff;
    border-bottom: 1px #ccc solid;
    color: #333;
    border-left: 2px #04a8c4 solid;
    padding: 0 10px;
    clear: both;
    overflow: hidden;
  }
  
  .map-list .list .txt {
    float: left;
  }
  
  .map-list .list .icon {
    float: right;
  }

</style>
