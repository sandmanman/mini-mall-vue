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
                                <i class="icon-font ion-android-share-alt"></i>
                                分享
                            </x-button>
                        </flexbox-item>
                    </flexbox>
                </div>
            </div>
        </div>

        <!-- 商品详细信息 -->
        <tab active-color="#000" defaultColor="#666" :line-width="2" v-model="index">
            <tab-item 
                :selected="tabActive === index"
                v-for="(item, index) in tabList"
                @click="tabActive = index"
                :key="index">
                
                {{item}}
                
            </tab-item>
        </tab>
        <div class="detail-panel" v-model="index">
            <div class="weui-panel product-detail-panel">
                <div class="weui-panel__bd">
                    <div class="weui-panel__bd">
                        <div class="weui-media-box" :key="index" v-show="true">
                            <div class="description" v-html="product.description"></div>
                        </div>
                        <div class="weui-media-box" :key="index" v-show="false">
                            {{product.attributes}}
                        </div>
                        <div class="weui-media-box" :key="index" v-show="false">
                            
                        </div>
                    </div>
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
        XButton,
        Tab,
        TabItem
    } from 'vux';

    import api from 'src/pages/api/api-conf.js';

    export default {
        name: 'product',
        components: {
            Swiper,
            SwiperItem,
            Flexbox,
            FlexboxItem,
            XButton,
            Tab,
            TabItem
        },
        data() {
            return {
                productId: null,
                product: [],
                isLike: false,
                likeCount: 0,
                tabList: ['细节描述', '规格参数', '品牌介绍'],
                tabActive: '细节描述',
                index: 0
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
            },
            likeit() {
                if( !this.isLike ) {
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

    .weui-media-box img {
        width: 100%;
    }
</style>