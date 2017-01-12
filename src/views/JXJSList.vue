<template lang="html">
  <div class="credit-list">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="立案公示" />
      <mu-tab value="tab2" title="开庭公告" />
      <mu-tab value="tab3" title="裁判文书" />
    </mu-tabs>
    <div v-if="activeTab === 'tab1'" class="lags">
      <template v-for="(c,key) in city">
        <div class="list" @click="LAGSList(c.name,key+1)">
          <span class="txt">{{c.name}}</span>
          <span class="icon iconfont icon-up" :class="'icon' + (key+1)"></span>
        </div>
        <ul :id="'list' + (key+1)" style="display: none;">
          <router-link v-for="list in LAGSLists" :to="{path: '/detail/' + list.ParoleId + '/lags'}" tag="li">
            {{list.ParoleTitle}}
          </router-link>
        </ul>
      </template>
    </div>
    <ul v-if="activeTab === 'tab2'">
      <router-link v-for="list in KTGGLists" :to="{path: '/detail/' + list.NoticeId + '/ktgg'}" tag="li">
        {{list.NoticeTitle}}
      </router-link>
      <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    </ul>
    <ul v-if="activeTab === 'tab3'">
      <router-link v-for="list in CPWSLists" :to="{path: '/detail/' + list.ParoleDocumentId + '/cpws'}" tag="li">
        {{list.AH}}
      </router-link>
      <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    </ul>
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
        limit: 30,
        LAGSLists: [],
        KTGGLists: [],
        CPWSLists: [],
        activeTab: 'tab1',
        isloading: false,
        open: false
      }
    },
    created() {
      this.LAGSList()
      this.KTGGList()
      this.CPWSList()
    },
    methods: {
      // 获取立案公示列表
      LAGSList(city, index) {
        self = this
        if (index) {
          if ($('#list' + index).css('display') == 'none') {
            $('#list' + index).show()
            $('.icon' + index).addClass('icon-down')
            $('.icon' + index).removeClass('icon-up')
          } else {
            $('.icon' + index).addClass('icon-up')
            $('.icon' + index).removeClass('icon-down')
            $('ul').hide()
          }
        }
        api.fetchCommuteGSList(city).then(function (res) {
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
          if (this.activeTab === 'tab2') {
            this.KTGGList()
          } else {
            this.CPWSList()
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
    background: #fff;
    padding-bottom: 10px;
    ul {
      padding: 50px 10px 10px 10px;
      li {
        line-height: 30px;
        width: 100%;
        overflow: hidden;
        border-bottom: 1px #e3e3e3 solid;
        display: block;
        padding: 5px 0;
      }
    }
    .lags {
      padding-top: 50px;
      .list {
        line-height: 40px;
        background: #fff;
        border-bottom: 1px #ccc solid;
        color: #333;
        border-left: 2px #04a8c4 solid;
        padding: 0 10px;
        clear: both;
        overflow: hidden;
        .txt {
          float: left;
        }
        .icon {
          float: right;
        }
      }
      ul {
        padding: 0;
        li {
          padding: 0 10px;
          line-height: 30px;
        }
      }
    }
  }

</style>
