<template>
  <tabbar class="app-tabbar">
    <tabbar-item :link="{name: 'home'}" :selected="$route.name === 'home'">
      <span slot="icon" class="icon-font icon-home ion-ios-home-outline"></span>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :link="{name: 'cart'}" :selected="$route.name === 'cart'"
      :badge="cart.items.length == 0 ? '' : String(cart.items.length)">
      <span slot="icon" class="icon-font icon-cart ion-ios-cart-outline"></span>
      <span slot="label">购物车</span>
    </tabbar-item>
    <tabbar-item :link="{name: 'userCenter'}" :selected="$route.name === 'userCenter'">
      <span slot="icon" class="icon-font icon-user ion-ios-person-outline"></span>
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
    import { mapState } from 'vuex'

    import {
        Tabbar,
        TabbarItem
    } from 'vux'

    export default {
        name: 'appTabbar',
        components: {
            Tabbar,
            TabbarItem
        },
        computed: {
            //使用对象展开运算符将此对象混入到外部对象中
            ...mapState([
                'cart'
            ]),
        },
        watch: {
            // 查询路由信息对象
            // '$route' (to, from) {
            //     console.log(to);
            //     console.log(from);
            // }
        }
    }
</script>

<style lang="less">
    .weui_tabbar_icon {
        text-align: center;
        >.icon-font {
            position: relative;
            top: -1px;
            vertical-align: top;
            color: #888;
            font-size: 26px;
            &:before {
                line-height: normal;
            }
        }
    }

    .weui_tabbar_item:last-child {
        .weui_tabbar_icon>.icon-font {
            top: -3px;
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