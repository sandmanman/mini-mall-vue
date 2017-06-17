<template>
    <div class="weui-media-box weui-media-box_appmsg cart-item">
        <div class="check-box">
            <checker type="checkbox" default-item-class="checkbox-item" selected-item-class="checkbox-item-selected">
                <checker-item :value="0"></checker-item>
            </checker>
        </div>

        <div class="weui-media-box__hd" :style="{ backgroundImage: 'url(' + cartItem.cover_image + ')'}"></div>

        <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{ cartItem.title }}</h4>
            <strong class="price">￥{{ subtotal }}</strong>

            <div class="quantity-box">
                <group>
                    <x-number :min="1" :value="cartItem.quantity" @on-change="updateQuantity"></x-number>
                </group>
            </div>
        </div>
        <a class="remove" @click="removeItem">
            <span class="ion-close"></span>
        </a>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Checker, CheckerItem,Group, XNumber } from 'vux'

export default {
    name: 'cartItem',
    components: {
        Checker,
        CheckerItem,
        Group,
        XNumber
    },
    props: ['cartItem'],
    computed: {
        subtotal() {
            // 商品总价 购买的数量*单价
            return this.cartItem.quantity * this.cartItem.price
        }
    },
    methods: {
        ...mapActions([
            'updateCart',
            'removeItemInCart',
        ]),
        updateQuantity(val) {
            console.log(val)
            // vuex actions -> updateCart
            this.updateCart({ 
                item: this.cartItem,
                quantity: parseInt(val),
                isAdd: false
            })
        },
        removeItem() {
            this.removeItemInCart({
                item: this.cartItem
            })
        }
    }
}
</script>


<style lang="less">

</style>
