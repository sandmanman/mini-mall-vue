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
                                    <swiper-item v-for="img in productItem.images">
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
                                        <h1 class="weui-media-box__title title">{{productItem.title}}</h1>
                                        <strong class="price">￥{{productItem.price}}</strong>
                                        <span class="original-price" v-if="productItem.price !== productItem.original_price">￥{{productItem.original_price}}</span>
                                        <p class="weui-media-box__desc summary">{{productItem.summary}}</p>
                                    </div>
                                    <div class="weui-media-box" style="padding-bottom:0;text-align:center;">
                                        <x-button @click.native="likeit" v-bind:class="{active: isLike}">
                                            <i class="icon-font ion-ios-heart"></i>
                                            <span>{{productItem.like_count}}</span>
                                        </x-button>

                                        <x-button>
                                            <i class="icon-font ion-android-share-alt"></i> 分享
                                        </x-button>
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
        <popup v-model="isShow" @on-hide="closeProdParam">
            <div class="popup prod-parameters-panel">
                <span class="close-btn" 
                @click="closeProdParam">&times;</span>

                <div class="weui-panel weui-panel_access" style="margin-bottom:0;margin-top:0;">
                    
                    <div class="weui-panel__bd">
                        <!-- 产品图片/标题/价格 -->
                        <div class="weui-media-box weui-media-box_appmsg">
                            <div class="weui-media-box__hd"></div>
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title">{{productItem.title}}</h4>
                                <strong class="price price-text">￥{{productItem.price}}</strong>
                            </div>
                        </div>

                        <!-- 选择规格 -->
                        <div class="weui-media-box weui-media-box_text specs-box">
                            <template v-for="(value, key) in inusespecs">
                                <p style="margin-bottom:5px;font-size:14px;">{{ key }}</p>
                                <checker default-item-class="p-param-item" :selected-item-class="selectedSpecsClass">
                                    <checker-item
                                        type="radio"
                                        v-for="(item, key) in value"
                                        :value="item"
                                        :data-for="key"
                                        @on-item-click="checkSpecs">
                                        {{item}}
                                    </checker-item>
                                </checker>
                            </template>
                        </div>

                        <!-- 数量 -->
                        <div class="weui-media-box weui-media-box_text quantity-box" style="padding:0 0 10px;">
                            <group>
                                <x-number title="数量" :min="1" :value="1" @on-change="changeProdQuantity"></x-number>
                            </group>
                        </div>
                    </div>

                    <div class="weui-panel__fd">

                        <template v-if=" addOrBuy === 'add' ">
                            <x-button type="primary" action-type="button" class="checkbtn"
                                @click.native="addCart">加入购物车</x-button>
                        </template>
                        
                        <template v-if=" addOrBuy === 'buy' ">
                            <x-button type="primary" action-type="button" class="checkbtn"
                                @click.native="goBuy">马上购买</x-button>
                        </template>
                    </div>
                </div>
            </div>
        </popup>
        <!-- 购买参数弹出 End-->

        <!-- action bar-->
        <tabbar class="action-tabbar">
            <tabbar-item
                :link="{name: 'cart'}"
                :badge="String(cartNums)"
                class="cart-item">
                <span slot="icon" class="icon-font icon-cart ion-ios-cart-outline"></span>
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item @on-item-click="showProdParam('add')" class="add-cart-item">    
                <span slot="label">加入购物车</span>
            </tabbar-item>
            <tabbar-item @on-item-click="showProdParam('buy')" class="gobuy-item">
                <span slot="label">马上购买</span>
            </tabbar-item>
        </tabbar>

    </div>

</template>

<script>
    import { mapActions } from 'vuex';

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
                productItem: [],
                description: [],
                attributes: [],
                inusespecs: {},
                inusespecsKey:[],
                vendor: [],
                isLike: false,
                isShow: false,
                isSelectedSpecs: false,
                selectedSpecsClass: '',
                likeCount: 0,
                cartCountTemp: 0,
                addOrBuy: ''
            }
        },
        created() {
            this.productId = this.$route.params.id;
            this.getProduct();

            //dispatch getProduct
            this.$store.dispatch('getProduct', this.productId);
        },
        computed: {
            //购物车数量
            cartNums() {
                let res = 0
                this.$store.getters.cartItemList.map((item, index) => {
                    res += item.quantity
                })
                return res
            }
        },
        methods: {
            ...mapActions(['updateCart']),

            getProduct() {
                this.$http.get(api.getProduct(this.productId))
                    .then((res) => {
                        this.productItem = res.data;
                        //产品描述
                        this.description = res.data.description;
                        //产品属性
                        this.attributes = res.data.attributes;
                        //品牌信息
                        this.vendor = res.data.vendor;

                        //产品规格
                        var inusespecs = res.data.in_use_specs,
                            specsNew = {},
                            specsKey = [];
                        
                        for(let key in inusespecs){
                            let skey =  String(inusespecs[key].spec_key_name),
                                svalue = inusespecs[key];
                            
                            specsKey.push(skey)

                            delete svalue.spec_key_name

                            specsNew[skey] = svalue
                        }

                        this.inusespecsKey = specsKey;
                        this.inusespecs = specsNew;
                    });

            },
            likeit() {
                //点击喜欢
                //
                if (!this.isLike) {
                    this.isLike = true;
                    this.likeNum += 1;
                    return false;
                } else {
                    this.$vux.toast.show({
                        type: 'text',
                        text: 'liked'
                    })
                }
            },
            checkSpecs() {
                //规格选择
                this.isSelectedSpecs = true;
                //改变选中样式
                this.selectedSpecsClass = 'p-param-item-selected';
            },
            showProdParam(type) {
                console.log('isSelectedSpecs:'+this.isSelectedSpecs);
                //打开商品规格选择popup
                this.isShow = true;

                this.addOrBuy = type;
            },
            closeProdParam() {
                this.isShow = false;
                this.isSelectedSpecs = false;
                this.selectedSpecsClass = '';
                this.addOrBuy = '';
            },
            noSelectedSpecs() {
                //没有选择商品规格类型，弹出提示
                this.$vux.alert.show({
                    title: '提示',
                    content: '请选择'+this.inusespecsKey
                });
            },
            addCart() {
                /*
                 * 判断是否选择商品规格或没有商品规格，没有则弹出提示
                */
                const order = {
                    item: Object.assign({}, this.productItem),
                    quantity: this.cartCountTemp,
                    isAdd: true
                }
                if( this.isSelectedSpecs === true || this.isEmptyObj(this.inusespecs) ) {
                    //关闭popup
                    this.closeProdParam()
                    console.log(order);
                    //将商品加入购物车
                    this.updateCart(order);
                } else {
                    this.noSelectedSpecs();
                }
            },
            changeProdQuantity(val) {
                //console.log('change', val);
                this.cartCountTemp = val;
            },
            goBuy() {
                /*
                * 1.判断是否选择该商品的规格
                * 2.关闭popup，跳转到下单页面
                */
                
                if( this.isSelectedSpecs === true || this.isEmptyObj(this.inusespecs) ) {
                    //关闭popup
                    this.closeProdParam()
                    //将商品加入购物车
                    this.updateCart(order);

                    //跳转到购物车页面
                    this.$router.push({name: 'cart'});

                } else {
                    this.noSelectedSpecs();
                }
            },
            isEmptyObj(obj) {
                //ES5
                return Object.keys(obj).length === 0;

                // function isEmpty(obj) {
                //     for(var prop in obj) {
                //         if(obj.hasOwnProperty(prop))
                //             return false;
                //     }

                //     return true;
                // }
            }

        }
        
    }
</script>

<style lang="less">
    .product-info-panel {
        margin-top: 0;
    
        .weui_btn {
            display: inline-block;
            margin-top: 0 !important;
            width: 40%;
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
    .prod-parameters-panel {
        position: relative;
        .close-btn {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 10;
            width: 40px;
            height: 40px;
            color: #999;
            font-size: 37px;
            line-height: 40px;
            text-align: center;
        }
        .specs-box {
            padding-bottom: 0;
            max-height: 228px;
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
            border: 1px solid #4b4d5a;
            background-color: #4b4d5a;
        }
    }

    .action-tabbar {
        .weui_tabbar_item.vux-tabbar-simple {
            height: 100%;
            line-height: 55px
        }
        .add-cart-item {
            background-color: #4b4d5a;
        }
        .gobuy-item {
            background-color: #f74c31;
        }
        .weui_tabbar_item:not(:first-child) .weui_tabbar_label,
        .weui_tabbar_item:not(:first-child).weui_bar_item_on .weui_tabbar_label {
            color: #fff !important;
            font-size: 16px;
        }
    }
</style>