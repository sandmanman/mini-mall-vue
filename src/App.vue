<template>
  <div class="container">
    <div class="weui-tab">
      <div class="weui-tab__panel">
        <router-view></router-view>
      </div>
      <div class="weui-tabbar">
        <tabbar></tabbar>
      </div>
    </div>
  </div>
</template>

<script>
  import Tabbar from './components/Tabbar'
  export default {
    name: 'app',
    components: {
      Tabbar
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html,body,.container {
    height: 100%;
  }
  body {
    background-color: #fbf9fe;
  }
  
  .weui-tab {
    position: relative;
    height: 100%;
  }
  
  .weui-tab__panel {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .weui-tabbar {
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #f7f7fa;
  }

</style>
