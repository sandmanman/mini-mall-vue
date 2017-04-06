<template>
    <div>
        <div class="page">
            <div class="page_bd">
                <div class="weui-tab">
                    <div class="weui-tab__panel">
                        <div class="product-panel">
        
                            <!-- swiper -->
                            <div class="swiper-wrap">
                                <swiper auto :aspect-ratio="500/800" dots-position="center">
                                    <swiper-item v-for="img in product.images">
                                        <img :src="img">
                                    </swiper-item>
                                </swiper>
                            </div>
        
                            <!-- 商品属性信息 S -->
                            <div class="weui-panel product-info-panel">
                                <div class="weui-panel__bd">
                                    <div class="weui-media-box weui-media-box_text">
                                        <h1 class="weui-media-box__title title">{{product.title}}</h1>
                                        <strong class="price">￥{{product.price}}</strong>
                                        <span class="original-price" v-if="product.price !== product.original_price">￥{{product.original_price}}</span>
                                        <p class="weui-media-box__desc summary">{{product.summary}}</p>
                                    </div>
                                    <div class="weui-media-box" style="padding-bottom:0;">
                                        <flexbox>
                                            <flexbox-item>
                                                <x-button @click.native="likeit" v-bind:class="{active: isLike}">
                                                    <i class="icon-font ion-ios-heart"></i>
                                                    <span>{{product.like_count}}</span>
                                                </x-button>
                                            </flexbox-item>
                                            <flexbox-item>
                                                <x-button>
                                                    <i class="icon-font ion-android-share-alt"></i> 分享
                                                </x-button>
                                            </flexbox-item>
                                        </flexbox>
                                    </div>
                                </div>
                            </div>
                            <!-- 商品属性信息 End -->
        
                            <!-- 商品详细信息 S -->
                            <div class="weui-panel product-detail-panel">
                                <div class="weui-panel__bd">
                                    <tabs>
                                        <tab-item name="description" title="细节描述" active='true'>
                                            <div class="weui-media-box description">
                                                <div v-html="description"></div>
                                            </div>
                                        </tab-item>
                                        <tab-item name="attributes" title="规格参数">
                                            <div class="weui-media-box attributes-list">
                                                <p v-for="item in attributes">
                                                    <span class="key">{{item.key}}：</span>
                                                    <span class="value">{{item.value}}</span>
                                                </p>
                                            </div>
                                        </tab-item>
                                        <tab-item name="vendor" title="品牌介绍">
                                            <div class="weui-media-box vendor">
                                                <span class="vendor-logo" :style="{ backgroundImage: 'url(' + vendor.logo + ')' }"></span>
                                                <h4 class="vendor-name">{{vendor.name}}</h4>
                                                <p class="vendor-summary">{{vendor.description}}</p>
                                            </div>
                                        </tab-item>
                                    </tabs>
                                </div>
                            </div>
                            <!-- 商品详细信息 End -->
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    
    
        <action-bar></action-bar>
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

    import Tabs from 'components/Tabs';
    import TabItem from 'components/TabItem';
    import ActionBar from './_action_bar';

    import api from 'src/pages/api/api-conf.js';

    export default {
        name: 'product',
        components: {
            Swiper,
            SwiperItem,
            Flexbox,
            FlexboxItem,
            XButton,
            Tabs,
            TabItem,
            ActionBar
        },
        data() {
            return {
                productId: null,
                product: [],
                description: [],
                attributes: [],
                vendor: [],
                isLike: false,
                likeCount: 0
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

                let pid = productId;
                console.log('product ID: ' + pid)
                this.$http.get(api.getProduct(pid))
                    .then((res) => {
                        this.product = res.data;
                        this.description = res.data.description;
                        this.attributes = res.data.attributes;
                        this.vendor = res.data.vendor;
                    });
            },
            likeit() {
                if (!this.isLike) {
                    console.log('I like it.');
                    this.isLike = true;
                    this.likeNum += 1;
                    return false;
                } else {
                    console.warn('clicked');
                    alert('你已经点过喜欢了');
                }
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
        color: #666;
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
        &.active .ion-ios-heart {
            color: #ff2200;
        }
    }

    .vux-flexbox-item {
        text-align: center;
    }

    .attributes-list>p {
        margin-bottom: 10px;
    }

    .attributes-list .value {
        color: #707070;
    }

    .vendor-logo {
        display: inline-block;
        margin-right: 10px;
        width: 64px;
        height: 64px;
        vertical-align: top;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .vendor-name {
        display: inline-block;
        vertical-align: top;
        margin-top: 20px;
        font-size: 16px;
    }

    .vendor-summary {
        color: #707070;
    }
</style>