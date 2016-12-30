<template lang="html">
  <div class="notice-kt-list">
    <div class="search">
      <form v-on:submit.prevent="searchList">
        <select v-model="cbfy">
          <option v-for="zy in fy" :value="zy.value">{{zy.text}}</option>
        </select>
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
        fy: [{
          text: '全部',
          value: ''
        }, {
          text: '杭州铁路运输法院',
          value: '1127'
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }],
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
  }
  
  .notice-kt-list .search {
    color: #000;
    padding: 10px;
    background: #fff;
    margin-bottom: 10px;
  }
  
  .notice-kt-list .search select {
    width: 100%;
    clear: both;
    border: 1px #ccc solid;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .notice-kt-list .search .mu-text-field {
    width: 100%;
    clear: both;
  }
  
  .mu-text-field-hint {
    color: #fff;
  }
  
  .notice-kt-list .search .mu-date-picker {
    float: left;
    width: 45%;
    overflow: hidden;
    margin-right: 5%;
  }
  
  .notice-kt-list .search button {
    width: 100%;
    clear: both;
    height: 40px;
    background: #20afc5;
    color: #fff;
  }
  
  .notice-kt-list li {
    line-height: 30px;
    display: block;
    overflow: hidden;
    background: #fff;
    margin-bottom: 10px;
    color: #333;
    padding: 10px;
  }
  
  .notice-kt-list li .con {
    border-top: 1px #ccc solid;
    border-bottom: 1px #ccc solid;
  }

</style>
