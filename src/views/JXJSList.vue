<template lang="html">
  <div class="credit-list">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="立案公示" />
      <mu-tab value="tab2" title="开庭公告" />
      <mu-tab value="tab3" title="裁判文书" />
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <form v-on:submit.prevent="LAGSList">
        <select v-model="cs">
            <option v-for="zy in city" :value="zy.name">{{zy.name}}</option>
        </select>
        <button>搜索</button>
      </form>
      <ul>
        <router-link v-for="list in LAGSLists" :to="{path: '/detail/' + list.ParoleId + '/lags'}" tag="li">
          {{list.ParoleTitle}}
        </router-link>
      </ul>
    </div>
    <ul v-if="activeTab === 'tab2'">
      <router-link v-for="list in KTGGLists" :to="{path: '/detail/' + list.NoticeId + '/ktgg'}" tag="li">
        {{list.NoticeTitle}}
      </router-link>
    </ul>
    <ul v-if="activeTab === 'tab3'">
      <router-link v-for="list in CPWSLists" :to="{path: '/detail/' + list.ParoleDocumentId + '/cpws'}" tag="li">
        {{list.AH}}
      </router-link>
    </ul>
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'credit-list',
    data() {
      return {
        city: [{
          name: '杭州'
        }, {
          name: '宁波'
        }, {
          name: '温州'
        }, {
          name: '嘉兴'
        }, {
          name: '湖州'
        }, {
          name: '绍兴'
        }, {
          name: '金华'
        }, {
          name: '衢州'
        }, {
          name: '舟山'
        }, {
          name: '台州'
        }, {
          name: '丽水'
        }],
        cs: '杭州',
        limit: 30,
        LAGSLists: [],
        KTGGLists: [],
        CPWSLists: [],
        activeTab: 'tab1',
        isloading: false
      }
    },
    created() {
      this.LAGSList()
      this.KTGGList()
      this.CPWSList()
    },
    methods: {
      // 获取立案公示列表
      LAGSList() {
        self = this
        api.fetchCommuteGSList(self.cs).then(function (res) {
          self.LAGSLists = res.objectdata
        })
      },
      // 获取开庭公告列表
      KTGGList() {
        self = this
        api.fetchExecuteInformationList(self.limit).then(function (res) {
          self.KTGGLists = res.objectdata
        })
      },
      // 获取裁判文书列表
      CPWSList() {
        self = this
        api.fetchCommuteParoleDocumentList(self.limit).then(function (res) {
          self.CPWSLists = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          this.LAGSList()
          this.KTGGList()
          this.CPWSList()
          this.isloading = false
        }, 1000)
      },
      //切换tab
      handleTabChange(val) {
        this.activeTab = val
      }
    }
  }

</script>
<style lang="less" scoped>
  .credit-list {
    margin-bottom: 60px;
  }
  
  .credit-list ul {
    padding-top: 20px;
  }
  
  .credit-list form {
    overflow: hidden;
    margin: 0 0 0 10px;
    padding: 60px 0 0 0;
  }
  
  .credit-list form select {
    float: left;
    width: 75%;
    clear: both;
    border: 1px #ccc solid;
    height: 40px;
    margin-bottom: 10px;
    color: #000;
  }
  
  .credit-list form button {
    width: 20%;
    height: 40px;
    color: #000;
    margin-left: 10px;
  }
  
  .credit-list li {
    line-height: 30px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    padding: 0 15px;
  }

</style>
