<template>
  <div class="page">
    <div class="page_bd">
      <div class="weui-tab">
        <div class="weui-tab__panel">

            <div class="nodata-panel" v-if="!cart.items.length">
                <div class="inner">
                    <span class="icon-outer">
                        <i class="icon-font ion-ios-cart-outline"></i>
                    </span>
                    <p class="text">您的购物车里面没有商品<br>快去挑选吧</p>
                    <a href="/" class="weui-btn weui-btn_plain-default weui-btn_mini">去挑选</a>
                </div>
            </div>


            <div class="cart-list-panel" v-else>

                <div class="weui-panel weui-panel_access cart-list">
                    <div class="weui-panel__bd">
                        <!-- 一条 S -->
                        <div class="weui-media-box weui-media-box_appmsg cart-item" v-for="item in cart.items" :key="item.id">
                            <div class="check-box">
                                <checker type="checkbox" default-item-class="checkbox-item" selected-item-class="checkbox-item-selected">
                                    <checker-item :value="0"></checker-item>
                                </checker>
                            </div>

                            <div class="weui-media-box__hd">
                                <img src="https://placehold.it/90x90">
                            </div>
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title">{{ item.title }}</h4>
                                <strong class="price">￥{{ item.price }}</strong>

                                <div class="quantity-box">
                                    <group>
                                        <x-number :min="1" :value="1" @change="updateValue(item, $event)"></x-number>
                                    </group>
                                </div>
                            </div>
                            <a class="remove" @click="removeFromCart(item)">
                                <span class="ion-close"></span>
                            </a>
                        </div>
                        <!-- 一条 End -->
                    </div>
                </div>

                <div class="cart-control-bar">
                    <flexbox>
                        <flexbox-item>
                            <div class="total">
                                总价：<strong class="price-text">￥{{ summary | priceFormat }}</strong>
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
    import { mapState, mapGetters, mapActions } from 'vuex'
    import { numberFormat } from 'utils'

    import { Flexbox, FlexboxItem, Checker, CheckerItem,Group, XNumber } from 'vux'

    export default {
        name: 'cart',
        components: {
            Flexbox,
            FlexboxItem,
            Checker,
            CheckerItem,
            Group,
            XNumber
        },
        computed: {
            ...mapState([
                'cart'
            ]),
            ...mapGetters([
                'summary'
            ])
        },
        methods: {
            updateValue (item, ev) {
                this.updateQuantity({ product: item, quantity: ev.target.value })
            },
            ...mapActions([
                'removeFromCart',
                'updateQuantity'
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