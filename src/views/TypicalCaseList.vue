<template lang="html">
  <div class="list" :style="{height:Height + 'px'}">
    <ul>
      <router-link v-for="list in lists" :to="{path: '/detail/' + list.NoticeId}" tag="li">
        <span>{{list.NoticeTitle}}</span>
        <em>{{list.NoticeDate}}</em>
      </router-link>
    </ul>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" :loadingText="loadingText" />
    <vFooter></vFooter>
  </div>
</template>
<script>
  import * as api from '../api'
  import vFooter from '../components/Footer'

  export default {
    name: 'list',
    components: {
      vFooter
    },
    data() {
      return {
        lists: [],
        limit: 20,
        loading: false,
        scroller: null,
        loadingText: '加载中……',
        Height: ''
      }
    },
    created() {
      this.getTypicalCaseList()
      this.Height = document.body.scrollHeight - 60
    },
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      // 列表
      getTypicalCaseList() {
        self = this
        api.fetchTypicalCaseList(self.limit).then(function (res) {
          self.lists = res
        })
      },
      // 更多加载
      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.getTypicalCaseList()
          this.limit += 20
          this.loading = false
        }, 1000)
      }
    }
  }

</script>
<style lang="css" scoped>
  .list {
    margin-bottom: 60px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .list li {
    line-height: 30px;
    overflow: hidden;
  }
  
  .list span {
    float: left;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  
  .list em {
    float: right;
    max-width: 30%;
  }
  
  .loadingbox {
    margin: auto;
    width: 50px;
    height: 20px;
    text-align: center;
    font-size: 10px;
  }
  
  .loadingbox>div {
    background-color: #fff;
    height: 100%;
    width: 6px;
    display: inline-block;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  
  .loadingbox .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .loadingbox .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .loadingbox .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .loadingbox .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  @-webkit-keyframes stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4)
    }
    20% {
      -webkit-transform: scaleY(1.0)
    }
  }
  
  @keyframes stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }

</style>
