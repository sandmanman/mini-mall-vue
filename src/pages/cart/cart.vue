<template>
  <div class="page">
    <div class="page_bd">
      <div class="weui-tab">
        <div class="weui-tab__panel">

            <div class="nodata-panel" v-if="!cartItemList.length">
                <div class="inner">
                    <span class="icon-outer">
                        <i class="icon-font ion-ios-cart-outline"></i>
                    </span>
                    <p class="text">您的购物车里面没有商品，快去挑选吧</p>
                    <a href="/" class="weui-btn weui-btn_plain-default weui-btn_mini">去挑选</a>
                </div>
            </div>


            <div class="cart-list-panel" v-else>

                <div class="weui-panel weui-panel_access cart-list">
                    <div class="weui-panel__bd">
                        
                        <cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></cart-item>

                    </div>
                </div>

                <div class="cart-control-bar">
                    <flexbox>
                        <flexbox-item>
                            <div class="total">
                                总价：<strong class="price-text">￥{{ cartTotalPrice | priceFormat }}</strong>
                            </div>
                        </flexbox-item>
                        <flexbox-item>
                            <button type="button" class="weui-btn weui-btn_warn check-btn">马上结算</button>
                        </flexbox-item>
                    </flexbox>
                </div>

            </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { numberFormat } from 'utils'

    import { Flexbox, FlexboxItem } from 'vux'

    import cartItem from 'components/cartItem';

    export default {
        name: 'cart',
        components: {
            Flexbox,
            FlexboxItem,
            cartItem
        },
        computed: {
            // cartItemList() {
            //     return this.$store.getters.cartItemList;
            // }
            ...mapGetters(['cartItemList', 'cartTotalPrice'])
        },
        methods: {
            ...mapActions([
                'saveShoppingCart',
                'clearCart',
                //'pushMessage',
            ])
        },
        filters: {
            priceFormat (value) {
                return numberFormat(value, 2)
            }
        }
    }
</script>

<style lang="less">
    .cart-control-bar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: #fff;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 1px;

            border-top: 1px solid #d8d8d8;

        }

        .total {
            padding: 0 15px;
            font-size: 14px;
        }
    }
    .check-btn {
        border-radius: 0;
    }

    .cart-item {
        position: relative;
        .price {
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
        .check-box {
            position: absolute;
            top: 15px;
            left: 15px;
            z-index: 10;
        }
        .remove {
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 10;
        }
        .weui-media-box__hd {
            margin-right: 10px;
            width: 90px;
            height: 90px;

            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .weui-media-box__bd {
            align-self: flex-start;
        }
        .weui-media-box__title {
            margin-right: 50px;
            font-size: 14px;
        }

        .quantity-box {
            position: absolute;
            left: 120px;
            bottom: 15px;
            .weui_cell {
                padding: 0;
            }
        }
        .quantity-box .weui_cells::before,
        .quantity-box .weui_cells::after {
            display: none;
        }
    }

</style>