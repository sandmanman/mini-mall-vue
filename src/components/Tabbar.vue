<template>
  <div>
    <tabbar>
      <tabbar-item is-link selected>
        <span slot="icon" class="icon-font icon-home ion-ios-home-outline"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item is-link badge="2">
        <span slot="icon" class="icon-font icon-cart ion-ios-cart-outline"></span>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item is-link>
        <span slot="icon" class="icon-font icon-user ion-ios-person-outline"></span>
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'tabbarCom',
  components: {
    Tabbar,
    TabbarItem
  }
}

</script>

<style lang="less">
  .weui_tabbar_icon {
    text-align: center;

    > .icon-font {
      position: relative;
      top: -2px;
      vertical-align: top;

      color: #888;
      font-size: 26px;
      &:before {
        line-height: normal;
      }
    }
  }
  .weui_tabbar_item:last-child {
    .weui_tabbar_icon > .icon-font {
      top: -4px;
      font-size: 31px;
    }
  }

  /*active icon style*/
  .weui_tabbar_item.weui_bar_item_on {
    .weui_tabbar_label,
    .icon-font {
      color: #000 !important;
    }
    .icon-home:before {
      content: "\f448";
    }
    .icon-cart:before {
      content: "\f3f8";
    }
    .icon-user:before {
      content: "\f47e";
    }
  }
</style>
