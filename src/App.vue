<template>
  <div class="container">
    <div class="page">
      <div class="page_bd">

        <app-header></app-header>

        <div class="weui-tab">
          <div class="weui-tab__panel">
            <router-view></router-view>
          </div>

          <app-tabbar></app-tabbar>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
    import appHeader from 'components/headerbar'
    import appTabbar from 'components/tabbar'

    export default {
        name: 'app',
        components: {
            appHeader,
            appTabbar
        },
        mounted() {
            // 设置 .weui-tab__panel 的 padding-top/bottom
            var tabbarEle = document.querySelector('.weui_tabbar'),
                headerbarEle = document.querySelector('.headerbar'),
                panelEle = document.querySelector('.weui-tab__panel'),
                tabbarHeight = tabbarEle.offsetHeight,
                headerbarHeight = headerbarEle.offsetHeight;

            panelEle.style.marginTop = headerbarHeight + 'px';
            panelEle.style.paddingBottom = tabbarHeight * 2 + 'px';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    html,
    body,
    .container {
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
        overflow: hidden;
    }

    .weui-panel {
        margin-bottom: 10px;
    }
</style>