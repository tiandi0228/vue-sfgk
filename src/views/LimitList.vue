<template lang="html">
  <div class="credit-list">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="限制高消费" />
      <mu-tab value="tab2" title="限制出境" />
      <mu-tab value="tab3" title="限制招投标" />
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <div class="search">
        <form v-on:submit.prevent="searchGXFList">
          <vCourt @childevent="childEventHandler" :state="true"></vCourt>
          <p>
            <mu-text-field v-model="reallyName" hintText="请输入姓名" />
            <mu-text-field v-model="ah" hintText="请输入案号" />
          </p>
          <p>
            <mu-text-field style="width: 100%;" v-model="credentialsNumber" hintText="请输入证件号码" />
          </p>
          <p>
            <mu-date-picker v-model="startDate" hintText="选择起始时间" />
            <mu-date-picker v-model="endDate" hintText="选择结束时间" />
          </p>
          <button>搜索</button>
        </form>
      </div>
      <vCredit :lists="GXFlists"></vCredit>
    </div>
    <div v-if="activeTab === 'tab2'">
      <div class="search">
        <form v-on:submit.prevent="searchCJList">
          <vCourt @childevent="childEventHandler" :state="true"></vCourt>
          <p>
            <mu-text-field v-model="reallyName" hintText="请输入姓名" />
            <mu-text-field v-model="ah" hintText="请输入案号" />
          </p>
          <p>
            <mu-text-field style="width: 100%;" v-model="credentialsNumber" hintText="请输入证件号码" />
          </p>
          <p>
            <mu-date-picker v-model="startDate" hintText="选择起始时间" />
            <mu-date-picker v-model="endDate" hintText="选择结束时间" />
          </p>
          <button>搜索</button>
        </form>
      </div>
      <vCredit :lists="CJlists"></vCredit>
    </div>
    <div v-if="activeTab === 'tab3'">
      <div class="search">
        <form v-on:submit.prevent="searchZTBList">
          <vCourt @childevent="childEventHandler" :state="true"></vCourt>
          <p>
            <mu-text-field v-model="reallyName" hintText="请输入姓名" />
            <mu-text-field v-model="ah" hintText="请输入案号" />
          </p>
          <p>
            <mu-text-field style="width: 100%;" v-model="credentialsNumber" hintText="请输入证件号码" />
          </p>
          <p>
            <mu-date-picker v-model="startDate" hintText="选择起始时间" />
            <mu-date-picker v-model="endDate" hintText="选择结束时间" />
          </p>
          <button>搜索</button>
        </form>
      </div>
      <vCredit :lists="ZTBlists"></vCredit>
    </div>
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
        reallyName: '',
        credentialsNumber: '',
        cbfy: '全部',
        ah: '',
        startDate: '',
        endDate: '',
        limit: 10,
        GXFlists: [],
        CJlists: [],
        ZTBlists: [],
        activeTab: 'tab1',
        isloading: false
      }
    },
    created() {
      this.searchGXFList()
      this.searchCJList()
      this.searchZTBList()
    },
    methods: {
      // 获取select法院值
      childEventHandler (fy) {
        this.cbfy = fy
      },
      // 搜索限制高消费列表
      searchGXFList() {
        self = this
        api.postLimitList({
          'reallyName': self.reallyName,
          'credentialsNumber': self.credentialsNumber,
          'ZXFY': self.cbfy,
          'AH': self.ah,
          'StartLARQ': self.startDate.replace(/-/g, ""),
          'EndLARQ': self.endDate.replace(/-/g, ""),
          'startIndex': 0,
          'endIndex': self.limit,
          'type': 1
        }).then(function (res) {
          self.GXFlists = res.objectdata
        })
      },
      // 搜索限制出境列表
      searchCJList() {
        self = this
        api.postLimitList({
          'reallyName': self.reallyName,
          'credentialsNumber': self.credentialsNumber,
          'ZXFY': self.cbfy,
          'AH': self.ah,
          'StartLARQ': self.startDate.replace(/-/g, ""),
          'EndLARQ': self.endDate.replace(/-/g, ""),
          'startIndex': 0,
          'endIndex': self.limit,
          'type': 2
        }).then(function (res) {
          self.CJlists = res.objectdata
        })
      },
      // 搜索限制招投标列表
      searchZTBList() {
        self = this
        api.postLimitList({
          'reallyName': self.reallyName,
          'credentialsNumber': self.credentialsNumber,
          'ZXFY': self.cbfy,
          'AH': self.ah,
          'StartLARQ': self.startDate.replace(/-/g, ""),
          'EndLARQ': self.endDate.replace(/-/g, ""),
          'startIndex': 0,
          'endIndex': self.limit,
          'type': 3
        }).then(function (res) {
          self.ZTBlists = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          if (this.activeTab === 'tab1') {
            this.searchGXFList()
          } else if (this.activeTab === 'tab2') {
            this.searchCJList()
          } else {
            this.searchZTBList()
          }
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
    .tab {
      background: #fff;
      .item {
        line-height: 30px;
        color: #333;
        width: 49.46%;
        text-align: center;
        display: inline-block;
      }
      .selected {
        background: #027c9e;
        color: #fff;
      }
    }
    .search {
      color: #000;
      padding: 10px;
      background: #fff;
      margin-bottom: 10px;
      padding-top: 60px;
      select {
        width: 100%;
        clear: both;
        border: 1px #ccc solid;
        height: 40px;
        margin-bottom: 5px;
      }
      .mu-text-field {
        width: 46%;
        clear: both;
        margin-right: 2%;
      }
      .mu-text-field-hint {
        color: #fff;
      }
      .mu-date-picker {
        float: left;
        width: 45%;
        overflow: hidden;
        margin-right: 5%;
      }
      button {
        width: 100%;
        clear: both;
        height: 40px;
        background: #20afc5;
        color: #fff;
        margin-top: 5px;
      }
    }
  }

</style>
