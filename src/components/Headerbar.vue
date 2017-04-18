<template>
  <div class="app-headerbar">
    <a href="/" class="logo">MINI Mall</a>

    <span class="search-act">
      <i class="icon-font ion-ios-search"></i>
    </span>
  </div>
</template>

<script>
    export default {
        name: 'appHeaderbar'
    }
</script>

<style lang="less">
    .app-headerbar {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        min-height: 50px;
        color: #fff;
        line-height: 50px;
        background-color: #000;
        .logo {
            padding: 0 15px;
            color: #fff;
        }
        // search icon
        .search-act {
            position: absolute;
            right: 0;
            top: 0;
            width: 55px;
            height: 100%;
            font-size: 26px;
            text-align: center;
            &:active {
                background-color: #333;
            }
        }
    }
</style>