<template>
    <div class="product-panel">
        <div class="swiper-wrap">
            <swiper auto :aspect-ratio="600/800" dots-position="center">
                <swiper-item v-for="img in product.images">
                    <img :src="img">
                </swiper-item>
            </swiper>
        </div>

        <div class="weui-panel product-info-panel">
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h1 class="weui-media-box__title title">{{product.title}}</h1>
                    <strong class="price">￥{{product.price}}</strong>
                    <p class="weui-media-box__desc summary">{{product.summary}}</p>
                </div>
                <div class="weui-media-box">
                    <flexbox>
                        <flexbox-item>
                            <x-button>
                                <i class="icon-font ion-ios-heart-outline"></i>
                                <span>0</span>
                            </x-button>
                        </flexbox-item>
                        <flexbox-item>
                            <x-button>
                                <i class="icon-font ion-android-share-alt"></i>
                                分享
                            </x-button>
                        </flexbox-item>
                    </flexbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem,
        XButton
    } from 'vux';

    import api from 'src/pages/api/api-conf.js';

    export default {
        name: 'product',
        components: {
            Swiper,
            SwiperItem,
            Flexbox,
            FlexboxItem,
            XButton
        },
        data() {
            return {
                productId: null,
                product: []
            }
        },
        created() {
            this.getProductId();
            this.getProduct(this.productId);
        },
        methods: {
            getProductId() {
                return this.productId = this.$route.params.id;
            },
            getProduct(productId) {
                this.$http.get(api.getProduct(productId))
                    .then((res) => {
                        this.product = res.data;
                    });
            }
        }
    }
</script>

<style lang="less" scoped>
    .product-info-panel {
        margin-top: 0;
    }
    .weui_btn {
        display: inline-block;
        width: 70%;
        font-size: 14px;
        line-height: 1.7;

        .icon-font {
            margin-right: 5px;
            
            font-size: 20px;
            vertical-align: middle;
        }
        &,
        &:after {
            border-radius: 1000px;
        }
    }
    .vux-flexbox-item {
        text-align: center;
    }
</style>