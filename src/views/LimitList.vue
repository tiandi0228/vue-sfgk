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
          <select v-model="selected">
            <option v-for="yx in YX" :value="yx.text">{{yx.text}}</option>
          </select>
          <select v-model="cbfy">
            <option v-for="(zy,index) in selection" :value="zy.text" :selected="index === 1 ? true : false">{{zy.text}}</option>
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
      <vCredit :lists="GXFlists"></vCredit>
    </div>
    <div v-if="activeTab === 'tab2'">
      <div class="search">
        <form v-on:submit.prevent="searchCJList">
          <select v-model="selected">
            <option v-for="yx in YX" :value="yx.text">{{yx.text}}</option>
          </select>
          <select v-model="cbfy">
            <option v-for="(zy,index) in selection" :value="zy.text" :selected="index === 1 ? true : false">{{zy.text}}</option>
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
      <vCredit :lists="CJlists"></vCredit>
    </div>
    <div v-if="activeTab === 'tab3'">
      <div class="search">
        <form v-on:submit.prevent="searchZTBList">
          <select v-model="selected">
            <option v-for="yx in YX" :value="yx.text">{{yx.text}}</option>
          </select>
          <select v-model="cbfy">
            <option v-for="(zy,index) in selection" :value="zy.text" :selected="index === 1 ? true : false">{{zy.text}}</option>
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
        selected: '全部',
        YX: [{
          text: '全部',
          ZY: [{
            text: '全部'
          }]
        }, {
          text: '杭州市',
          ZY: [{
            text: '浙江省高级人民法院',
            value: '1300'
          }, {
            text: '杭州市中级人民法院',
            value: '1301'
          }, {
            text: '杭州市上城区人民法院',
            value: '1302'
          }, {
            text: '杭州市下城区人民法院',
            value: '1303'
          }, {
            text: '杭州市江干区人民法院',
            value: '1304'
          }, {
            text: '杭州市拱墅区人民法院',
            value: '1305'
          }, {
            text: '杭州市西湖区人民法院',
            value: '1306'
          }, {
            text: '杭州市滨江区人民法院',
            value: '1307'
          }, {
            text: '杭州市萧山区人民法院',
            value: '1308'
          }, {
            text: '桐庐县人民法院',
            value: '1309'
          }, {
            text: '杭州市富阳区人民法院',
            value: '1310'
          }, {
            text: '临安市人民法院',
            value: '1311'
          }, {
            text: '杭州市余杭区人民法院',
            value: '1312'
          }, {
            text: '建德市人民法院',
            value: '1313'
          }, {
            text: '淳安县人民法院',
            value: '1314'
          }, {
            text: '杭州经济技术开发区人民法院',
            value: '1406'
          }]
        }, {
          text: "宁波市",
          ZY: [{
            text: '宁波市中级人民法院',
            value: '1315'
          }, {
            text: '宁波市海曙区人民法院',
            value: '1316'
          }, {
            text: '宁波市江东区人民法院',
            value: '1317'
          }, {
            text: '宁波市江北区人民法院',
            value: '1318'
          }, {
            text: '宁波市北仑区人民法院',
            value: '1319'
          }, {
            text: '宁波市镇海区人民法院',
            value: '1320'
          }, {
            text: '余姚市人民法院',
            value: '1321'
          }, {
            text: '慈溪市人民法院',
            value: '1322'
          }, {
            text: '奉化市人民法院',
            value: '1323'
          }, {
            text: '象山县人民法院',
            value: '1324'
          }, {
            text: '宁海县人民法院',
            value: '1325'
          }, {
            text: '宁波市鄞州区人民法院',
            value: '1326'
          }, {
            text: '宁波海事法院',
            value: '1402'
          }]
        }, {
          text: "温州市",
          ZY: [{
            text: '温州市中级人民法院',
            value: '1327'
          }, {
            text: '温州市鹿城区人民法院',
            value: '1328'
          }, {
            text: '温州市龙湾区人民法院',
            value: '1329'
          }, {
            text: '温州市瓯海区人民法院',
            value: '1330'
          }, {
            text: '瑞安市人民法院',
            value: '1331'
          }, {
            text: '温州市洞头区人民法院',
            value: '1332'
          }, {
            text: '乐清市人民法院',
            value: '1333'
          }, {
            text: '永嘉县人民法院',
            value: '1334'
          }, {
            text: '平阳县人民法院',
            value: '1335'
          }, {
            text: '苍南县人民法院',
            value: '1336'
          }, {
            text: '文成县人民法院',
            value: '1337'
          }, {
            text: '泰顺县人民法院',
            value: '1338'
          }]
        }, {
          text: "湖州市",
          ZY: [{
            text: '湖州市中级人民法院',
            value: '1347'
          }, {
            text: '湖州市吴兴区人民法院',
            value: '1348'
          }, {
            text: '德清县人民法院',
            value: '1349'
          }, {
            text: '长兴县人民法院',
            value: '1350'
          }, {
            text: '安吉县人民法院',
            value: '1351'
          }, {
            text: '湖州市南浔区人民法院',
            value: '1403'
          }]
        }, {
          text: "绍兴市",
          ZY: [{
            text: '绍兴市中级人民法院',
            value: '1352'
          }, {
            text: '绍兴市越城区人民法院',
            value: '1353'
          }, {
            text: '诸暨市人民法院',
            value: '1354'
          }, {
            text: '绍兴市柯桥区人民法院',
            value: '1355'
          }, {
            text: '绍兴市上虞区人民法院',
            value: '1356'
          }, {
            text: '嵊州市人民法院',
            value: '1357'
          }, {
            text: '新昌县人民法院',
            value: '1358'
          }]
        }, {
          text: "嘉兴市",
          ZY: [{
            text: '嘉兴市中级人民法院',
            value: '1339'
          }, {
            text: '嘉兴市南湖区人民法院',
            value: '1340'
          }, {
            text: '嘉兴市秀洲区人民法院',
            value: '1341'
          }, {
            text: '海宁市人民法院',
            value: '1342'
          }, {
            text: '平湖市人民法院',
            value: '1343'
          }, {
            text: '嘉善县人民法院',
            value: '1344'
          }, {
            text: '海盐县人民法院',
            value: '1345'
          }, {
            text: '桐乡市人民法院',
            value: '1346'
          }]
        }, {
          text: "金华市",
          ZY: [{
            text: '金华市中级人民法院',
            value: '1359'
          }, {
            text: '金华市婺城区人民法院',
            value: '1360'
          }, {
            text: '金华市金东区人民法院',
            value: '1361'
          }, {
            text: '兰溪市人民法院',
            value: '1362'
          }, {
            text: '东阳市人民法院',
            value: '1363'
          }, {
            text: '义乌市人民法院',
            value: '1364'
          }, {
            text: '永康市人民法院',
            value: '1366'
          }, {
            text: '武义县人民法院',
            value: '1367'
          }, {
            text: '浦江县人民法院',
            value: '1368'
          }, {
            text: '磐安县人民法院',
            value: '1369'
          }]
        }, {
          text: "衢州市",
          ZY: [{
            text: '衢州市中级人民法院',
            value: '1370'
          }, {
            text: '衢州市柯城区人民法院',
            value: '1371'
          }, {
            text: '江山市人民法院',
            value: '1372'
          }, {
            text: '衢州市衢江区人民法院',
            value: '1373'
          }, {
            text: '常山县人民法院',
            value: '1374'
          }, {
            text: '开化县人民法院',
            value: '1375'
          }, {
            text: '龙游县人民法院',
            value: '1376'
          }]
        }, {
          text: "舟山市",
          ZY: [{
            text: '舟山市中级人民法院',
            value: '1377'
          }, {
            text: '舟山市定海区人民法院',
            value: '1378'
          }, {
            text: '舟山市普陀区人民法院',
            value: '1379'
          }, {
            text: '岱山县人民法院',
            value: '1380'
          }, {
            text: '嵊泗县人民法院',
            value: '1381'
          }]
        }, {
          text: "台州市",
          ZY: [{
            text: '台州市中级人民法院',
            value: '1392'
          }, {
            text: '台州市椒江区人民法院',
            value: '1393'
          }, {
            text: '台州市黄岩区人民法院',
            value: '1394'
          }, {
            text: '台州市路桥区人民法院',
            value: '1395'
          }, {
            text: '临海市人民法院',
            value: '1396'
          }, {
            text: '温岭市人民法院',
            value: '1397'
          }, {
            text: '仙居县人民法院',
            value: '1398'
          }, {
            text: '天台县人民法院',
            value: '1399'
          }, {
            text: '三门县人民法院',
            value: '1400'
          }, {
            text: '玉环县人民法院',
            value: '1401'
          }]
        }, {
          text: "丽水市",
          ZY: [{
            text: '丽水市中级人民法院',
            value: '1382'
          }, {
            text: '丽水市莲都区人民法院',
            value: '1383'
          }, {
            text: '龙泉市人民法院',
            value: '1384'
          }, {
            text: '青田县人民法院',
            value: '1385'
          }, {
            text: '云和县人民法院',
            value: '1386'
          }, {
            text: '庆元县人民法院',
            value: '1387'
          }, {
            text: '缙云县人民法院',
            value: '1388'
          }, {
            text: '遂昌县人民法院',
            value: '1389'
          }, {
            text: '松阳县人民法院',
            value: '1390'
          }, {
            text: '景宁县人民法院',
            value: '1391'
          }]
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
