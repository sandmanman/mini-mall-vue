<template>
  <div class="headerbar">
    <span class="logo">玩物店</span>



    <span class="search-act">
      <i class="icon-font ion-ios-search"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'HeaderbarCom'
  }
</script>

<style lang="less">
  .headerbar {
    position: fixed;
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
    }

    // search icon
    .search-act {
      position: absolute;
      right: 0;
      top: 0;

      width: 55px;
      height: 55px;

      font-size: 26px;
      text-align: center;

      &:active {
        background-color: #333;
      }
    }
  }
</style>