<template lang="html">
  <div class="topic">
      
  </div>
</template>
<script>
  import * as api from '../api'
  import vFooter from '../components/Footer'
  export default {
    name: 'topic',
    data() {
      return {
          detail: ''
      }
    },
    created() {
        self = this
        api.fetchTypicalCaseInfo(self.$route.params.id).then(function (res) {
          self.detail = res
          console.log(res)
        })
    }
  }

</script>
<style lang="css" scoped>

</style>
