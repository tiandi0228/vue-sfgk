<template lang="html">
  <div class="map-list">
    <template v-for="list in lists">
      <div class="list" @click="btn(list)">
        <span class="txt">{{list.name}}</span>
        <span class="icon iconfont" :class="[list.open ? 'icon-up' : 'icon-down']"></span>
      </div>
      <ul v-show="list.open">
        <router-link v-for="list in list.list" :to="{path: '/detail/' + list.name + '/map'}" tag="li">{{list.name}}</router-link>
      </ul>
    </template>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'map-list',
    data() {
      return {
        lists: {},
      }
    },
    created() {
      self = this
        // 法院列表
      api.fetchMapList().then(function (res) {
        self.lists = res.data
      })
    },
    methods: {
      btn(item) {
        item.open = !item.open
      }
    }
  }

</script>
<style lang="less" scoped>
  .map-list {
    margin-bottom: 60px;
    background: #fff;
  }
  
  .map-list .list {
    line-height: 40px;
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
  .map-list li{
    padding: 0 10px;
    line-height: 30px;
  }
</style>
