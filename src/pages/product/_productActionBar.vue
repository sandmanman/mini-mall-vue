<template>
    <tabbar class="action-tabbar">
        <tabbar-item :link="{name: 'cart'}" :badge="cartCount+''">
            <span slot="icon" class="icon-font icon-cart ion-ios-cart-outline"></span>
            <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item @on-item-click="addCart" class="add-cart-item">    
            <span slot="label">加入购物车</span>
        </tabbar-item>
        <tabbar-item @on-item-click="buyParameters" class="buy-confirm-item">
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
        name: 'productActionBar',
        components: {
            Tabbar,
            TabbarItem
        },
        data() {
            return {
                cartCount: 0
            }
        },
        created() {
            //this.getCartCount();
        },
        methods: {
            getCartCount() {
                //先实现通过localStorage获取购物车数量
                
            },
            buyParameters() {
                console.log('弹出商品的参数/色系/数量等的选择');
            },
            addCart() {
                alert('先弹出选择商品属性，再购车数量加1')
                this.cartCount += 1;
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