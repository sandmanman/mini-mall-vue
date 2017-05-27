<template>
  <flexbox :gutter="0" wrap="wrap">
    <flexbox-item :span="1/2" v-for="item in products">
      <div class="product-card">
        <router-link :to="{ name: 'product', params: { id: item.id }}">
          <div class="product-cover-image" 
          :style="{ backgroundImage: 'url(' + item.cover_image + ')' }"></div>
          <h4 class="product-title">{{item.title}}</h4>
          <strong class="price">￥{{item.price}}</strong>
          <span class="original-price" v-if="item.price !== item.original_price">￥{{item.original_price}}</span>
        </router-link>
      </div>
    </flexbox-item>
  </flexbox>
</template>

<script>
    import { mapActions } from 'vuex'

    import {
        Flexbox,
        FlexboxItem
    } from 'vux';

    import api from 'src/api/api-conf.js';

    export default {
        name: 'productList',
        components: {
            Flexbox,
            FlexboxItem
        },
        props: {
            shelfId: {
                type: [Number, String],
                required: !0
            },
            limit: [Number, String]
        },
        data() {
            return {
                products: []
            }
        },
        created() {
            this.getProducts();
        },
        mounted() {

        },
        methods: {
            getProducts() {
                var _this = this;
                _this.$http.get(api.getProductList(_this.shelfId, _this.limit))
                    .then((res) => {
                        _this.products = res.data.objects;
                    });
            }
        }
    }
</script>

<style lang="less">
    .product-card {
        width: 100%;
        color: #666;
        font-size: 14px;
        a {
            display: block;
            color: #666;
        }
        .product-cover-image {
            position: relative;
            width: 100%;
            margin-bottom: 10px;
            padding-bottom: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .1);
            }
        }
        .product-title {
            display: flex;
            height: 20px;
            overflow: hidden;
            line-height: 20px;
            white-space: normal;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        
        .original-price {
            color: #bbb;
            text-decoration: line-through;
        }
    }
</style>