<template lang="html">
  <div class="case-query-list">
    <div class="search">
      <form v-on:submit.prevent="searchList">
        <p>案号：(
          <mu-text-field v-model="AH_NH" /> )</p>
        <p>
          <mu-text-field v-model="AH_ZH" /> 字 第
          <mu-text-field v-model="AH_BH" /> 号</p>
        <button>搜索</button>
      </form>
    </div>
    <ul v-show="islists">
      <li v-for="list in lists" @click="go(list.AH)">
        <p style="font-size:12px;">案号：<em>{{list.AH}}</em></p>
        <div class="con">
          <div class="FY"><span>法&nbsp;&nbsp;&nbsp;&nbsp;院：</span><span>{{list.CourtName}}</span></div>
          <div class="DSR">
            <span>当事人：</span>
            <dl>
              <dd v-for="DSR in list.DSRModels">
                {{DSR.SSDW}}：{{DSR.MC}}
              </dd>
            </dl>
          </div>
        </div>
        <p><span style="float:left;font-size:12px;">案件状态：<em>{{list.AJZT}}</em></span><span style="float:right;font-size:12px;">立案时间：<em>{{list.LARQ}}</em></span></p>
      </li>
    </ul>
    <ul v-show="isah">
      <li @click="go(list.AH)">
        <p style="font-size:12px;">案号：<em>{{list.AH}}</em></p>
        <div class="con">
          <div class="DSR">
            <span>当事人：</span>
            <dl>
              <dd v-for="DSR in list.DSRS">
                {{DSR.SSDW}}：{{DSR.MC}}
              </dd>
            </dl>
          </div>
        </div>
        <p><span style="float:left;font-size:12px;">案件状态：<em>{{list.AJZT}}</em></span><span style="float:right;font-size:12px;">立案时间：<em>{{list.LARQ}}</em></span></p>
      </li>
    </ul>
    <div class="info" v-show="isinfo" v-if="tab === 'ssaj'">
      <div class="icon iconfont icon-close" @click="close()"></div>
      <h2>案件基本信息</h2>
      <div class="info-con">
        <ul>
          <li><span>案号：</span><span class="fr">{{info.AH}}</span></li>
          <li><span>立案时间：</span><span class="fr">{{info.LARQ}}</span></li>
          <li><span>案由：</span><span class="fr">{{info.AY}}</span></li>
          <li><span>案件状态：</span><span class="fr">{{info.AJZT}}</span></li>
        </ul>
      </div>
    </div>
    <div v-else class="info" v-show="isinfo">
      <div class="icon iconfont icon-close" @click="close()"></div>
      <h2>案件基本信息</h2>
      <div class="info-con">
        <ul>
          <li><span>案号：</span><span class="fr">{{info.AH}}</span></li>
          <li><span>立案时间：</span><span class="fr">{{info.LARQ}}</span></li>
          <li><span>立案标的：</span><span class="fr">{{info.LABDJE}}</span></li>
          <li><span>案件状态：</span><span class="fr">{{info.AJZT}}</span></li>
        </ul>
      </div>
      <h2>当事人信息</h2>
      <div class="info-con">
        <ul v-for="DSRS in info.DSRS">
          <li><span>诉讼地位：</span><span class="fr">{{DSRS.SSDW}}</span></li>
          <li><span>类型：</span><span class="fr">{{DSRS.LX}}</span></li>
          <li><span>姓名或单位：</span><span class="fr">{{DSRS.MC}}</span></li>
          <li><span>地址：</span><span class="fr">{{DSRS.DZ}}</span></li>
        </ul>
      </div>
    </div>
    <div class="password" v-show="ispwd">
      <div class="icon iconfont icon-close" @click="close()"></div>
      <input type="password" v-model="pwd" placeholder="请输入查询密码">
      <button @click="submitPwd">确认</button>
    </div>
    <div class="make" v-show="ispwd"></div>
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'case-query-list',
    data() {
      return {
        AH_NH: '2016',
        AH_ZH: '',
        AH_BH: '',
        pwd: '',
        limit: 10,
        isloading: false,
        lists: [],
        list: {},
        islists: true,
        isah: false,
        info: '',
        isinfo: false,
        ispwd: false,
        tab: this.$route.params.tab,
        p: []
      }
    },
    created() {
      if (this.tab === 'ssaj') {
        this.getLitigationList()
      } else {
        this.getExecuteList()
      }
    },
    methods: {
      // 诉讼案件列表
      getLitigationList() {
        self = this
        api.fetchLitigationList(self.limit).then(function (res) {
          self.lists = res.Data.informationmodels
        })
      },
      // 执行案件列表
      getExecuteList() {
        self = this
        api.fetchExecuteList(self.limit).then(function (res) {
          self.lists = res.Data.informationmodels
        })
      },
      // 条件搜索
      searchList() {
        self = this
        let ah = '(' + self.AH_NH + ')' + self.AH_ZH + self.AH_BH + '号'
        if (self.tab === 'ssaj') {
          api.postCaseForLitigationByAH({
            'AH': ah
          }).then(function (res) {
            self.list = res.Data
            self.islists = false
            self.isah = true
          })
        } else {
          api.postCaseForExecuteByAH({
            'AH': ah
          }).then(function (res) {
            self.list = res.Data
            self.islists = false
            self.isah = true
          })
        }
      },
      // 点击弹出输入密码框
      go(ah) {
        this.ispwd = true
        this.p.push(ah)
      },
      // 输入密码
      submitPwd() {
        self = this
        if (self.pwd === '') return
        if (self.tab === 'ssaj') {
          api.postLitigationCaseByAH({
            'AH': self.p[0],
            'CXMM': self.pwd
          }).then(function (res) {
            self.p.splice(0, 1)
            if (res.Description === '密码不正确') return
            self.info = res.Data
            self.isinfo = true
            self.ispwd = false
          })
        } else {
          api.postExecuteCaseByAH({
            'AH': self.p[0],
            'CXMM': self.pwd
          }).then(function (res) {
            self.p.splice(0, 1)
            if (res.Description === '密码不正确') return
            self.info = res.Data
            self.isinfo = true
            self.ispwd = false
          })
        }
      },
      // 关闭
      close() {
        this.isinfo = false
        this.ispwd = false
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          this.getLitigationList()
          this.isloading = false
        }, 1000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .case-query-list {
    margin-bottom: 60px;
    .search {
      background: #fff;
      color: #000;
      text-align: center;
      padding: 10px;
      .mu-text-field {
        width: 100px;
      }
      button {
        width: 100%;
        clear: both;
        height: 40px;
        background: #20afc5;
        color: #fff;
      }
    }
    li {
      background: #fff;
      margin: 10px 0 0 0;
      color: #000;
      overflow: hidden;
      em {
        font-style: normal;
        color: #20afc5;
      }
      p {
        padding: 0 10px;
        line-height: 40px;
      }
      .FY {
        overflow: hidden;
      }
      .con {
        background: #dfdfdf;
        overflow: hidden;
        padding: 10px;
        .DSR {
          overflow: hidden;
          padding: 10px 0;
          span {
            float: left;
            width: 65px;
          }
          dl {
            float: left;
            width: 70%;
          }
        }
      }
    }
    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: #f5f5f9;
      color: #000;
      padding: 10px;
      .icon-close {
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 26px;
        z-index: 102;
        color: #000;
      }
      h2 {
        border-left: 5px #0085cf solid;
        font-size: 14px;
        padding-left: 10px;
      }
      .info-con {
        padding: 10px 0;
        border-top: 1px #dcdcdc solid;
        margin-top: 10px;
        margin-bottom: 10px;
        background: #fff;
        ul {
          margin-bottom: 20px;
          li {
            border-bottom: 1px #dcdcdc solid;
            padding: 0 10px;
            line-height: 35px;
            margin-top: 0;
          }
        }
      }
    }
    .fr {
      float: right;
    }
    .password {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 120px;
      background: #fff;
      z-index: 101;
      margin: -60px 0 0 -100px;
      padding: 10px;
      .icon-close {
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 26px;
        z-index: 102;
        color: #000;
      }
      input {
        height: 30px;
        width: 100%;
        border-bottom: 1px #20afc5 solid;
        margin: 10px 0;
        color: #000;
      }
      button {
        width: 100%;
        clear: both;
        height: 40px;
        background: #20afc5;
        color: #fff;
      }
    }
    .make {
      background: #000;
      opacity: 0.5;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }

</style>
