<template>
  <div class="container">
    <div class="page">
      <div class="page_bd">

        <headerbar></headerbar>

        <div class="weui-tab">
          <div class="weui-tab__panel">
            <router-view></router-view>
          </div>
          
          <tabbar-comp></tabbar-comp>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Headerbar from './components/headerbar'
  import TabbarComp from './components/tabbar'
  
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
    background-color: #f8f8f8;
  }
  
  .container {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  .container,
  .page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .page_bd {
    height: 100%;
  }
  .weui-tab {
    position: relative;
    height: 100%;
  }
  
  .weui-tab__panel {
    box-sizing: border-box;
    min-height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

</style>
