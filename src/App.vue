<template>
  <div class="container">
    <div class="weui-tab">
      <headerbar></headerbar>

      <div class="weui-tab__panel">
        <router-view></router-view>
      </div>
      
      <tabbar-comp></tabbar-comp>
    </div>
  </div>
</template>

<script>
  import Headerbar from './components/Headerbar'
  import TabbarComp from './components/Tabbar'
  
  export default {
    name: 'app',
    components: {
      Headerbar,
      TabbarComp
    },
    mounted() {
      // 设置 .weui-tab__panel 的 padding-top/bottom
      var tabbarEle = document.querySelector('.weui_tabbar'),
          headerbarEle = document.querySelector('.headerbar'),
          panelEle = document.querySelector('.weui-tab__panel'),
          tabbarHeight = tabbarEle.offsetHeight,
          headerbarHeight = headerbarEle.offsetHeight;
          
      panelEle.style.paddingTop = headerbarHeight + 'px';
      panelEle.style.paddingBottom = tabbarHeight + 'px';
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
