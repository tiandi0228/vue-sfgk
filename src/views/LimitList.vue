<template lang="html">
  <div class="credit-list">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="限制高消费" />
      <mu-tab value="tab2" title="限制处境" />
      <mu-tab value="tab3" title="限制招投标" />
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <div class="search">
        <form v-on:submit.prevent="searchGXFList">
          <select v-model="cbfy">
            <option v-for="zy in fy" :value="zy.text">{{zy.text}}</option>
          </select>
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
      <ul>
        <li v-for="list in GXFlists">
          <p style="padding-bottom:10px;">姓名：{{list.ReallyName}}</p>
          <p style="padding-bottom:10px;">证件号码：{{list.CredentialsNumber}}</p>
          <div class="con">
            <p style="padding-top:10px;">地址：{{list.Address}}</p>
            <p>执行依据：{{list.ZXYJ}}</p>
            <p>案号：{{list.AH}}</p>
            <p>执行案由：{{list.ZXAY}}</p>
            <p>执行法院：{{list.ZXFY}}</p>
            <p>未执行金额：{{list.WZXJE}}</p>
            <p style="padding-bottom:10px;">标的金额：{{list.WZXJE}}</p>
          </div>
          <p style="padding-top:10px;">曝光时间：{{list.BGRQ}}</p>
        </li>
      </ul>
    </div>
    <div v-if="activeTab === 'tab2'">
      <div class="search">
        <form v-on:submit.prevent="searchCJList">
          <select v-model="cbfy">
            <option v-for="zy in fy" :value="zy.text">{{zy.text}}</option>
          </select>
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
      <ul>
        <li v-for="list in CJlists">
          <p style="padding-bottom:10px;">姓名：{{list.ReallyName}}</p>
          <p style="padding-bottom:10px;">证件号码：{{list.CredentialsNumber}}</p>
          <div class="con">
            <p style="padding-top:10px;">地址：{{list.Address}}</p>
            <p>执行依据：{{list.ZXYJ}}</p>
            <p>案号：{{list.AH}}</p>
            <p>执行案由：{{list.ZXAY}}</p>
            <p>执行法院：{{list.ZXFY}}</p>
            <p>未执行金额：{{list.WZXJE}}</p>
            <p style="padding-bottom:10px;">标的金额：{{list.WZXJE}}</p>
          </div>
          <p style="padding-top:10px;">曝光时间：{{list.BGRQ}}</p>
        </li>
      </ul>
    </div>
    <div v-if="activeTab === 'tab3'">
      <div class="search">
        <form v-on:submit.prevent="searchZTBList">
          <select v-model="cbfy">
            <option v-for="zy in fy" :value="zy.text">{{zy.text}}</option>
          </select>
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
      <ul>
        <li v-for="list in ZTBlists">
          <p style="padding-bottom:10px;">姓名：{{list.ReallyName}}</p>
          <p style="padding-bottom:10px;">证件号码：{{list.CredentialsNumber}}</p>
          <div class="con">
            <p style="padding-top:10px;">地址：{{list.Address}}</p>
            <p>执行依据：{{list.ZXYJ}}</p>
            <p>案号：{{list.AH}}</p>
            <p>执行案由：{{list.ZXAY}}</p>
            <p>执行法院：{{list.ZXFY}}</p>
            <p>未执行金额：{{list.WZXJE}}</p>
            <p style="padding-bottom:10px;">标的金额：{{list.WZXJE}}</p>
          </div>
          <p style="padding-top:10px;">曝光时间：{{list.BGRQ}}</p>
        </li>
      </ul>
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
        fy: [{
          text: '全部'
        }, {
          text: '杭州铁路运输法院'
        }, {
          text: '浙江省高级人民法院'
        }, {
          text: '杭州市中级人民法院'
        }, {
          text: '杭州市上城区人民法院'
        }, {
          text: '杭州市下城区人民法院'
        }, {
          text: '杭州市江干区人民法院'
        }, {
          text: '杭州市拱墅区人民法院'
        }, {
          text: '杭州市西湖区人民法院'
        }, {
          text: '杭州市滨江区人民法院'
        }, {
          text: '杭州市萧山区人民法院'
        }, {
          text: '桐庐县人民法院'
        }, {
          text: '杭州市富阳区人民法院'
        }, {
          text: '临安市人民法院'
        }, {
          text: '杭州市余杭区人民法院'
        }, {
          text: '建德市人民法院'
        }, {
          text: '淳安县人民法院'
        }, {
          text: '杭州经济技术开发区人民法院'
        }, {
          text: '宁波市中级人民法院'
        }, {
          text: '宁波市海曙区人民法院'
        }, {
          text: '宁波市江东区人民法院'
        }, {
          text: '宁波市江北区人民法院'
        }, {
          text: '宁波市北仑区人民法院'
        }, {
          text: '宁波市镇海区人民法院'
        }, {
          text: '余姚市人民法院'
        }, {
          text: '慈溪市人民法院'
        }, {
          text: '奉化市人民法院'
        }, {
          text: '象山县人民法院'
        }, {
          text: '宁海县人民法院'
        }, {
          text: '宁波市鄞州区人民法院'
        }, {
          text: '宁波海事法院'
        }, {
          text: '温州市中级人民法院'
        }, {
          text: '温州市鹿城区人民法院'
        }, {
          text: '温州市龙湾区人民法院'
        }, {
          text: '温州市瓯海区人民法院'
        }, {
          text: '瑞安市人民法院'
        }, {
          text: '温州市洞头区人民法院'
        }, {
          text: '乐清市人民法院'
        }, {
          text: '永嘉县人民法院'
        }, {
          text: '平阳县人民法院'
        }, {
          text: '苍南县人民法院'
        }, {
          text: '文成县人民法院'
        }, {
          text: '泰顺县人民法院'
        }, {
          text: '嘉兴市中级人民法院'
        }, {
          text: '嘉兴市南湖区人民法院'
        }, {
          text: '嘉兴市秀洲区人民法院'
        }, {
          text: '海宁市人民法院'
        }, {
          text: '平湖市人民法院'
        }, {
          text: '嘉善县人民法院'
        }, {
          text: '海盐县人民法院'
        }, {
          text: '桐乡市人民法院'
        }, {
          text: '湖州市中级人民法院'
        }, {
          text: '湖州市吴兴区人民法院'
        }, {
          text: '德清县人民法院'
        }, {
          text: '长兴县人民法院'
        }, {
          text: '安吉县人民法院'
        }, {
          text: '湖州市南浔区人民法院'
        }, {
          text: '绍兴市中级人民法院'
        }, {
          text: '绍兴市越城区人民法院'
        }, {
          text: '诸暨市人民法院'
        }, {
          text: '绍兴市柯桥区人民法院'
        }, {
          text: '绍兴市上虞区人民法院'
        }, {
          text: '嵊州市人民法院'
        }, {
          text: '新昌县人民法院'
        }, {
          text: '金华市中级人民法院'
        }, {
          text: '金华市婺城区人民法院'
        }, {
          text: '金华市金东区人民法院'
        }, {
          text: '兰溪市人民法院'
        }, {
          text: '东阳市人民法院'
        }, {
          text: '义乌市人民法院'
        }, {
          text: '永康市人民法院'
        }, {
          text: '武义县人民法院'
        }, {
          text: '浦江县人民法院'
        }, {
          text: '磐安县人民法院'
        }, {
          text: '衢州市中级人民法院'
        }, {
          text: '衢州市柯城区人民法院'
        }, {
          text: '江山市人民法院'
        }, {
          text: '衢州市衢江区人民法院'
        }, {
          text: '常山县人民法院'
        }, {
          text: '开化县人民法院'
        }, {
          text: '龙游县人民法院'
        }, {
          text: '丽水市中级人民法院'
        }, {
          text: '丽水市莲都区人民法院'
        }, {
          text: '龙泉市人民法院'
        }, {
          text: '青田县人民法院'
        }, {
          text: '云和县人民法院'
        }, {
          text: '庆元县人民法院'
        }, {
          text: '缙云县人民法院'
        }, {
          text: '遂昌县人民法院'
        }, {
          text: '松阳县人民法院'
        }, {
          text: '景宁县人民法院'
        }, {
          text: '台州市中级人民法院'
        }, {
          text: '台州市椒江区人民法院'
        }, {
          text: '台州市黄岩区人民法院'
        }, {
          text: '台州市路桥区人民法院'
        }, {
          text: '临海市人民法院'
        }, {
          text: '温岭市人民法院'
        }, {
          text: '仙居县人民法院'
        }, {
          text: '天台县人民法院'
        }, {
          text: '三门县人民法院'
        }, {
          text: '玉环县人民法院'
        }, {
          text: '舟山市中级人民法院',
        }, {
          text: '舟山市定海区人民法院'
        }, {
          text: '舟山市普陀区人民法院'
        }, {
          text: '岱山县人民法院'
        }, {
          text: '嵊泗县人民法院'
        }],
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
          this.searchGXFList()
          this.searchCJList()
          this.searchZTBList()
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
  
  .credit-list .tab {
    background: #fff;
  }
  
  .credit-list .tab .item {
    line-height: 30px;
    color: #333;
    width: 49.46%;
    text-align: center;
    display: inline-block;
  }
  
  .credit-list .tab .selected {
    background: #027c9e;
    color: #fff;
  }
  
  .credit-list .search {
    color: #000;
    padding: 10px;
    background: #fff;
    margin-bottom: 10px;
    padding-top: 60px;
  }
  
  .credit-list .search select {
    width: 100%;
    clear: both;
    border: 1px #ccc solid;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .credit-list .search .mu-text-field {
    width: 46%;
    clear: both;
    margin-right: 2%;
  }
  
  .mu-text-field-hint {
    color: #fff;
  }
  
  .credit-list .search .mu-date-picker {
    float: left;
    width: 45%;
    overflow: hidden;
    margin-right: 5%;
  }
  
  .credit-list .search button {
    width: 100%;
    clear: both;
    height: 40px;
    background: #20afc5;
    color: #fff;
  }
  
  .credit-list li {
    line-height: 30px;
    display: block;
    overflow: hidden;
    background: #fff;
    margin-bottom: 10px;
    color: #333;
    padding: 10px;
  }
  
  .credit-list li .con {
    border-top: 1px #ccc solid;
    border-bottom: 1px #ccc solid;
  }

</style>
