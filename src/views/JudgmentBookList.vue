<template lang="html">
  <div class="judgment-book-list">
    <div class="search">
      <form v-on:submit.prevent="searchList">
        <select v-model="ajbs">
          <option :value="list.text" v-for="list in caseype">{{list.text}}</option>
        </select>
        <vCourt @childevent="childEventHandler" :state="true"></vCourt>
        <p>
          <mu-text-field v-model="ah" hintText="请输入案号" />
          <mu-text-field v-model="key" hintText="请输入关键字" />
        </p>
        <mu-date-picker v-model="startDate" hintText="选择起始时间" />
        <mu-date-picker v-model="endDate" hintText="选择结束时间" />
        <button>搜索</button>
      </form>
    </div>
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.DocumentId + '/judgmentbook'}" tag="li">
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
    name: 'judgment-book-list',
    data() {
      return {
        ajbs: '全部',
        caseype: [{
          text: '全部'
        }, {
          text: '民事'
        }, {
          text: '刑事'
        }, {
          text: '行政'
        }, {
          text: '执行'
        }, {
          text: '赔偿'
        }, {
          text: '商事'
        }, {
          text: '海事海商'
        }, {
          text: '申诉'
        }, {
          text: '知识产权'
        }, {
          text: '其他'
        }],
        ah: '',
        key: '',
        cbfy: '',
        startDate: '',
        endDate: '',
        limit: 20,
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
        api.postJudgmentBookList({
          'ajbs': self.ajbs === '全部' ? '' : self.ajbs,
          'cbfy': self.cbfy,
          'ah': self.ah,
          'key': self.key,
          'jarqstart': self.startDate.replace(/-/g, ""),
          'jarqend': self.endDate.replace(/-/g, ""),
          'startindex': 0,
          'endindex': self.limit
        }).then(function (res) {
          self.lists = res.Data.objectdata
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
  .judgment-book-list {
    margin-bottom: 60px;
    background: #fff;
    .search {
      color: #000;
      background: #fff;
      padding: 10px;
      select {
        width: 100%;
        clear: both;
        border: 1px #ccc solid;
        height: 40px;
        margin-bottom: 10px;
      }
      .mu-text-field {
        width: 46%;
        clear: both;
        margin-right: 2%;
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
    ul {
      padding: 0 10px 10px 10px;
      overflow: hidden;
      li {
        line-height: 30px;
        width: 100%;
        overflow: hidden;
        border-bottom: 1px #e3e3e3 solid;
        display: block;
        padding: 5px 0;
      }
    }
  }

</style>
