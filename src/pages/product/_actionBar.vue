<template>
    <tabbar class="action-tabbar">
        <tabbar-item :link="{name: 'cart'}" badge="0">
            <span slot="icon" class="icon-font icon-cart ion-ios-cart-outline"></span>
            <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item @on-item-click="addCart" class="add-cart-item">    
            <span slot="label">加入购物车</span>
        </tabbar-item>
        <tabbar-item @on-item-click="buyConfirm" class="buy-confirm-item">
            <span slot="label">马上购买</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
    import {
        Tabbar,
        TabbarItem
    } from 'vux';

    export default {
        name: 'actionBar',
        components: {
            Tabbar,
            TabbarItem
        },
        methods: {
            addCart() {
                console.log('addCart');
            },
            buyConfirm() {
                console.log('buyConfirm');
            }
        }
    }
</script>

<style lang="less">
    .action-tabbar {
        .weui_tabbar_item.vux-tabbar-simple {
            height: 100%;
            line-height: 55px
        }
        .add-cart-item {
            background-color: #000;
        }
        .buy-confirm-item {
            background-color: #f74c31;
        }
        .weui_tabbar_item:not(:first-child) .weui_tabbar_label,
        .weui_tabbar_item:not(:first-child).weui_bar_item_on .weui_tabbar_label {
            color: #fff !important;
        }
    }
</style>