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
                
                <div class="cart-list">
                    <div class="cart-item" v-for="item in cart.items" :key="item.id">
                        <div class="image">
                            <img src="https://placehold.it/90x90">
                        </div>
                        <strong>{{ item.title }}</strong> ￥{{ item.price }}

                        <input type="number" class="qty" :value="item.quantity" @change="updateValue(item, $event)">

                        <a class="button is-danger is-small" @click="removeFromCart(item)">
                            <span>
                            Remove
                            </span>
                        </a>
                    </div>
                </div>

                <div class="cart-control-bar">
                    <flexbox>
                        <flexbox-item>
                            <div class="total">
                                总价：<strong class="price">￥{{ summary | priceFormat }}</strong>
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

    import { Flexbox, FlexboxItem } from 'vux'

    export default {
        name: 'cart',
        components: {
            Flexbox,
            FlexboxItem
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

<style lang="less" scoped>
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
        }
        .price {
            color: #f8504f;
        }
    }
    .check-btn {
        border-radius: 0;
    }
</style>