<template lang="html">
  <div class="list">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.title + '/sscs'}" tag="li">
        <span>{{list.title}}</span>
      </router-link>
    </ul>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'

  export default {
    name: 'list',
    data() {
      return {
        lists: [],
      }
    },
    created() {
      this.getSscsList()
    },
    methods: {
      // 列表
      getSscsList() {
        self = this
        api.fetchSscsList().then(function (res) {
          self.lists = res
        })
      },
    }
  }

</script>
<style lang="less" scoped>
  .list {
    margin-bottom: 60px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .list li {
    line-height: 30px;
    overflow: hidden;
  }
  
  .list span {
    float: left;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
</style>
