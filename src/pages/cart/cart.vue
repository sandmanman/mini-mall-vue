<template>
  <div class="page">
    <div class="page_bd">
      <div class="weui-tab">
        <div class="weui-tab__panel">
            <h3 v-if="!cart.items.length">Plead add product.</h3>
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
        name: 'carts',
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
                'removeFromCart',//移除
                'updateQuantity'//更新购物车数量
            ])
        },
        filters: {
            priceNumberFormat(value) {
                //价钱数字格式化，保留2位小数
                return numberFormat(value, 2)
            }
        }
    }
</script>

<style lang="less">

</style>