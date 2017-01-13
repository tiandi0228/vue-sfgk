<template lang="html">
  <div class="notice-kt-list">
    <div class="search">
      <form v-on:submit.prevent="searchList">
        <vCourt @childevent="childEventHandler" :state="false"></vCourt>
        <mu-text-field v-model="yg" hintText="请输入原告" />
        <mu-text-field v-model="bg" hintText="请输入被告" />
        <mu-text-field v-model="spz" hintText="请输入审判长" />
        <mu-date-picker v-model="startDate" hintText="选择起始时间" />
        <mu-date-picker v-model="endDate" hintText="选择结束时间" />
        <button>搜索</button>
      </form>
    </div>
    <ul>
      <li v-for="list in lists">
        <p style="padding-bottom:10px;">案号：{{list.AH}}</p>
        <div class="con">
          <p style="padding-top:10px;">法院：{{list.FY}}</p>
          <p>法庭：{{list.FT}}</p>
          <p>排期日期：{{list.PQRQ}}</p>
          <p>案由：{{list.AY}}</p>
          <p>承办部门：{{list.CBBM}}</p>
          <p>审判长/主审人：{{list.SPZ}}</p>
          <p>申请再审人：{{list.YG}}</p>
          <p style="padding-bottom:10px;">被申请再审人：{{list.BG}}</p>
        </div>
        <p style="padding-top:10px;">开庭时间：{{list.KTRQ}}</p>
      </li>
    </ul>
    <div class="loading" @click="loadMore()">{{isloading ? '正在加载…' : '加载更多'}}</div>
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  export default {
    name: 'notice-kt-list',
    data() {
      return {
        yg: '',
        bg: '',
        cbfy: '',
        spz: '',
        startDate: '',
        endDate: '',
        limit: 10,
        lists: [],
        isloading: false
      }
    },
    created() {
      this.searchList()
    },
    methods: {
      // 获取select法院值
      childEventHandler (fy) {
        this.cbfy = fy
      },
      // 搜索列表
      searchList() {
        self = this
        api.postNoticeKTList({
          'cbfy': self.cbfy,
          'yg': self.yg,
          'bg': self.bg,
          'spz': self.spz,
          'jarq1': self.startDate.replace(/-/g, ""),
          'jarq2': self.endDate.replace(/-/g, ""),
          'startIndex': 0,
          'endIndex': self.limit
        }).then(function (res) {
          self.lists = res.objectdata
        })
      },
      // 更多加载
      loadMore() {
        this.isloading = true
        this.limit += 10
        setTimeout(() => {
          this.searchList()
          this.isloading = false
        }, 1000)
      }
    }
  }

</script>
<style lang="less" scoped>
  .notice-kt-list {
    margin-bottom: 60px;
    .search {
      color: #000;
      padding: 10px;
      background: #fff;
      margin-bottom: 10px;
      select {
        width: 100%;
        clear: both;
        border: 1px #ccc solid;
        height: 40px;
        margin-bottom: 10px;
      }
      .mu-text-field {
        width: 100%;
        clear: both;
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
      }
    }
    li {
      line-height: 30px;
      display: block;
      overflow: hidden;
      background: #fff;
      margin-bottom: 10px;
      color: #333;
      padding: 10px;
      .con {
        border-top: 1px #ccc solid;
        border-bottom: 1px #ccc solid;
      }
    }
  }

</style>
