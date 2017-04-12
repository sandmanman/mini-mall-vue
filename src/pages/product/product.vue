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
                                        <div
                                        :style="{
                                        'background-image': 'url(' + img + ')',
                                        'width':'100%',
                                        'height':'100%',
                                        'background-repeat':'no-repeat',
                                        'background-position': 'center',
                                        'background-size':'cover'}"></div>
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
        
        <!-- 购买参数弹出 S-->
        <popup v-model="isShow">
            <div class="popup buy-parameters-panel">
                <div class="weui-panel weui-panel_access" style="margin-bottom:0;">
                    
                    <div class="weui-panel__bd">
                        <!-- 产品图片/标题/价格 -->
                        <div class="weui-media-box weui-media-box_appmsg">
                            <div class="weui-media-box__hd" :style="{ backgroundImage: 'url(' + productPicFirst + ')' }"></div>
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title">{{product.title}}</h4>
                                <strong class="price price-text">￥{{product.price}}</strong>
                            </div>
                        </div>

                        <!-- 选择规格 -->
                        <div class="weui-media-box weui-media-box_text attributes-box"
                        v-if="inusespecsValue">
                            <p style="margin-bottom:5px;font-size:14px;">选择{{ inusespecsKey }}</p>
                            <checker default-item-class="p-param-item" selected-item-class="p-param-item-selected">
                                <checker-item
                                    v-for="(value, key) in inusespecsValue"
                                    :value="value"
                                    :data-for="key">
                                    {{value}}
                                </checker-item>
                            </checker>
                        </div>

                        <!-- 数量 -->
                        <div class="weui-media-box weui-media-box_text quantity-box" style="padding:0 0 10px;">
                            <group>
                                <x-number title="数量" :min="1" :value="1" @on-change="changeCartCount"></x-number>
                            </group>
                        </div>
                    </div>

                    <div class="weui-panel__fd">
                        <x-button type="primary" action-type="button" class="checkbtn"
                        @click.native="addCart">加入购物车</x-button>
                    </div>
                </div>
            </div>
        </popup>
        <!-- 购买参数弹出 End-->

        <!-- action bar-->
        <tabbar class="action-tabbar">
            <tabbar-item
                :link="{name: 'cart'}"
                :badge="cartCount"
                class="cart-item">
                <span slot="icon" class="icon-font icon-cart ion-ios-cart-outline"></span>
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item @on-item-click="showBuyParameters" class="add-cart-item">    
                <span slot="label">加入购物车</span>
            </tabbar-item>
            <tabbar-item @on-item-click="showBuyParameters" class="buy-confirm-item">
                <span slot="label">马上购买</span>
            </tabbar-item>
        </tabbar>

    </div>

</template>

<script>
    import {
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem,
        XButton,
        Popup,
        Checker,
        CheckerItem,
        Group,
        XNumber,
        Tabbar,
        TabbarItem
    } from 'vux';

    import appTabbar from 'components/tabbar'

    import Tabs from 'components/Tabs';
    import TabItem from 'components/TabItem';
    
    import api from 'src/api/api-conf.js';

    export default {
        name: 'product',
        components: {
            appTabbar,
            Swiper,
            SwiperItem,
            Flexbox,
            FlexboxItem,
            XButton,
            Popup,
            Checker,
            CheckerItem,
            Group,
            XNumber,
            Tabs,
            TabItem,
            Tabbar,
            TabbarItem
        },
        data() {
            return {
                productId: null,
                product: [],
                productPicFirst: '',
                description: [],
                attributes: [],
                inusespecsKey: '',
                inusespecsValue: {},
                vendor: [],
                isLike: false,
                isShow: false,
                likeCount: 0,
                cartCount: null,
                cartCountTemp: 0
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
                        //产品描述
                        this.description = res.data.description;
                        //产品属性
                        this.attributes = res.data.attributes;
                        //品牌信息
                        this.vendor = res.data.vendor;
                        //产品图第一张
                        this.productPicFirst = res.data.images[0];

                        //产品规格选择
                        let inusespecs = res.data.in_use_specs;
                        let iv = {};
                        for(var key in inusespecs){
                            this.inusespecsKey = inusespecs[key].spec_key_name;
                            iv = inusespecs[key];
                        }
                        delete iv.spec_key_name;
                        this.inusespecsValue = iv;

                        //console.log(this.inusespecsValue);
                    });

            },
            getCartCount() {
                //先实现通过localStorage获取购物车数量
                
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
            },
            showBuyParameters() {
                //显示购买参数popup
                this.isShow = true
            },
            addCart() {
                this.isShow = false
                //更改cartCount值
                this.cartCount = String(this.cartCountTemp)
            },
            changeCartCount(val) {
                //console.log('change', val);
                this.cartCountTemp = val;
            }
        }
    }
</script>

<style lang="less">
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

    //
    .buy-parameters-panel {
        position: relative;
        .attributes-box {
            max-height: 230px;
            overflow-y: auto;
        }
        .weui-media-box__hd {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .checkbtn {
            background-color: #111;
            border-radius: 0;
        }

        .p-param-item {
            display: inline-block;
            color: #707070;
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 5px 12px;
            margin-right: 12px;
            margin-bottom: 12px;
            font-size: 14px;
        }
        .p-param-item-selected {
            color: #fff;
            border: 1px solid #e23737;
            background-color: #e23737;
        }
    }

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