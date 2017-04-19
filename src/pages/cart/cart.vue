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


            <div v-else>
                <h3>显示购物车商品信息</h3>
            </div>
        </div>
      </div>
    </div>

    <app-tabbar></app-tabbar>

  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    import appTabbar from 'components/tabbar'

    import { numberFormat } from 'utils'

    export default {
        name: 'cart',
        components: {
            appTabbar
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

</style>