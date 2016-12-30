<template lang="html">
  <div class="judgment-book-list">
    <div class="search">
      <form v-on:submit.prevent="searchList">
        <select v-model="selected">
          <option v-for="yx in YX" :value="yx.text">{{yx.text}}</option>
        </select>
        <select v-model="cbfy">
          <option v-for="(zy,index) in selection" :value="zy.text" :selected="index === 0 ? true : false">{{zy.text}}</option>
        </select>
        <button>搜索</button>
      </form>
    </div>
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.NoticeSDId + '/sdgg'}" tag="li">
        <span>{{list.CaseNo}}</span>
        <em>查看详情</em>
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
        selected: '全部',
        YX: [{
          text: '全部',
          ZY: [{
            text: '全部'
          }]
        }, {
          text: '杭州市',
          ZY: [{
            text: '浙江省高级人民法院'
          }, {
            text: '杭州市中级人民法院'
          }, {
            text: "杭州市上城区人民法院"
          }, {
            text: "杭州市下城区人民法院"
          }, {
            text: "杭州市江干区人民法院"
          }, {
            text: "杭州市拱墅区人民法院"
          }, {
            text: "杭州市西湖区人民法院"
          }, {
            text: "杭州市滨江区人民法院"
          }, {
            text: "杭州市萧山区人民法院"
          }, {
            text: "杭州市富阳区人民法院"
          }, {
            text: "临安市人民法院"
          }, {
            text: "桐庐县人民法院"
          }, {
            text: "杭州市余杭区人民法院"
          }, {
            text: "建德市人民法院"
          }, {
            text: "淳安县人民法院"
          }, {
            text: "杭州经济技术开发区人民法院"
          }, {
            text: "杭州铁路运输法院"
          }]
        }, {
          text: "宁波市",
          ZY: [{
            text: "宁波市中级人民法院"
          }, {
            text: "宁波市海曙区人民法院"
          }, {
            text: "宁波市江东区人民法院"
          }, {
            text: "宁波市江北区人民法院"
          }, {
            text: "宁波市北仑区人民法院"
          }, {
            text: "宁波市镇海区人民法院"
          }, {
            text: "余姚市人民法院"
          }, {
            text: "慈溪市人民法院"
          }, {
            text: "奉化市人民法院"
          }, {
            text: "象山县人民法院"
          }, {
            text: "宁海县人民法院"
          }, {
            text: "宁波市鄞州区人民法院"
          }, {
            text: "宁波海事法院"
          }]
        }, {
          text: "温州市",
          ZY: [{
            text: "温州市中级人民法院"
          }, {
            text: "温州市鹿城区人民法院"
          }, {
            text: "温州市龙湾区人民法院"
          }, {
            text: "温州市瓯海区人民法院"
          }, {
            text: "瑞安市人民法院"
          }, {
            text: "温州市洞头区人民法院"
          }, {
            text: "乐清市人民法院"
          }, {
            text: "永嘉县人民法院"
          }, {
            text: "平阳县人民法院"
          }, {
            text: "苍南县人民法院"
          }, {
            text: "文成县人民法院"
          }, {
            text: "泰顺县人民法院"
          }]
        }, {
          text: "湖州市",
          ZY: [{
            text: "湖州市中级人民法院"
          }, {
            text: "湖州市吴兴区人民法院"
          }, {
            text: "德清县人民法院"
          }, {
            text: "长兴县人民法院"
          }, {
            text: "安吉县人民法院"
          }, {
            text: "湖州市南浔区人民法院"
          }]
        }, {
          text: "绍兴市",
          ZY: [{
            text: "绍兴市中级人民法院"
          }, {
            text: "绍兴市越城区人民法院"
          }, {
            text: "诸暨市人民法院"
          }, {
            text: "绍兴市柯桥区人民法院"
          }, {
            text: "绍兴市上虞区人民法院"
          }, {
            text: "嵊州市人民法院"
          }, {
            text: "新昌县人民法院"
          }]
        }, {
          text: "嘉兴市",
          ZY: [{
            text: "嘉兴市中级人民法院"
          }, {
            text: "嘉兴市南湖区人民法院"
          }, {
            text: "嘉兴市秀洲区人民法院"
          }, {
            text: "海宁市人民法院"
          }, {
            text: "平湖市人民法院"
          }, {
            text: "嘉善县人民法院"
          }, {
            text: "海盐县人民法院"
          }, {
            text: "桐乡市人民法院"
          }]
        }, {
          text: "金华市",
          ZY: [{
            text: "金华市中级人民法院"
          }, {
            text: "金华市婺城区人民法院"
          }, {
            text: "金华市金东区人民法院"
          }, {
            text: "兰溪市人民法院"
          }, {
            text: "东阳市人民法院"
          }, {
            text: "义乌市人民法院"
          }, {
            text: "永康市人民法院"
          }, {
            text: "武义县人民法院"
          }, {
            text: "浦江县人民法院"
          }, {
            text: "磐安县人民法院"
          }]
        }, {
          text: "衢州市",
          ZY: [{
            text: "衢州市中级人民法院"
          }, {
            text: "衢州市柯城区人民法院"
          }, {
            text: "江山市人民法院"
          }, {
            text: "衢州市衢江区人民法院"
          }, {
            text: "常山县人民法院"
          }, {
            text: "开化县人民法院"
          }, {
            text: "龙游县人民法院"
          }]
        }, {
          text: "舟山市",
          ZY: [{
            text: "舟山市中级人民法院"
          }, {
            text: "舟山市定海区人民法院"
          }, {
            text: "舟山市普陀区人民法院"
          }, {
            text: "岱山县人民法院"
          }, {
            text: "嵊泗县人民法院"
          }]
        }, {
          text: "台州市",
          ZY: [{
            text: "台州市中级人民法院"
          }, {
            text: "台州市椒江区人民法院"
          }, {
            text: "台州市黄岩区人民法院"
          }, {
            text: "台州市路桥区人民法院"
          }, {
            text: "临海市人民法院"
          }, {
            text: "温岭市人民法院"
          }, {
            text: "仙居县人民法院"
          }, {
            text: "天台县人民法院"
          }, {
            text: "三门县人民法院"
          }, {
            text: "玉环县人民法院"
          }]
        }, {
          text: "丽水市",
          ZY: [{
            text: "丽水市中级人民法院"
          }, {
            text: "丽水市莲都区人民法院"
          }, {
            text: "龙泉市人民法院"
          }, {
            text: "青田县人民法院"
          }, {
            text: "云和县人民法院"
          }, {
            text: "庆元县人民法院"
          }, {
            text: "缙云县人民法院"
          }, {
            text: "遂昌县人民法院"
          }, {
            text: "松阳县人民法院"
          }, {
            text: "景宁县人民法院"
          }]
        }],
        cbfy: '',
        limit: 20,
        lists: [],
        isloading: false
      }
    },
    computed: {
      selection: {
        get: function () {
          var that = this
          return this.YX.filter(function (item) {
            return item.text == that.selected
          })[0].ZY
        }
      }
    },
    created() {
      this.searchList()
    },
    methods: {
      // 搜索列表
      searchList() {
        self = this
        api.postNoticeSDList({
          'cbfy': self.cbfy,
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
  .judgment-book-list {
    margin-bottom: 60px;
  }
  
  .judgment-book-list .search {
    color: #000;
    background: #fff;
    padding: 10px;
  }
  
  .judgment-book-list .search select {
    width: 100%;
    clear: both;
    border: 1px #ccc solid;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .judgment-book-list .search .mu-text-field {
    width: 100%;
    clear: both;
  }
  
  .judgment-book-list .search .mu-date-picker {
    width: 100%;
    clear: both;
  }
  
  .judgment-book-list .search button {
    width: 100%;
    clear: both;
    height: 40px;
    background: #20afc5;
    color: #fff;
  }
  
  .judgment-book-list li {
    line-height: 30px;
    overflow: hidden;
    padding: 0 10px;
  }
  
  .judgment-book-list span {
    float: left;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  
  .judgment-book-list em {
    float: right;
    max-width: 30%;
    font-style: normal;
  }

</style>
