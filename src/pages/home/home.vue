<template>
  <div class="home-panel">
    <banner v-bind:bannerList="bannerList"></banner>

    <!-- 特色商品 S -->
    <div class="weui-panel feature-panel">
      <div class="weui-panel__bd">
        <feature v-bind:featureList="featureList"></feature>
      </div>
    </div>
    <!-- / 特色商品 End -->

    <!-- 货架 S -->
    <div class="weui-panel shelf-panel">
      <div class="weui-panel__bd">
        <shelf v-bind:shelfList="shelfList"></shelf>
      </div>
    </div>
    <!-- / 货架 End -->

    <div class="weui-panel product-preview-panel"
      v-for="item in shelfList" v-bind:key="item.id">

      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <h3 class="weui-media-box__title product-preview-title">
            <span class="text english">{{item.english_name}}</span>
            <span class="text chinese">{{item.name}}</span>
          </h3>
          <div class="product-preview-list">
            
            <flexbox :gutter="0" wrap="wrap">
              <flexbox-item :span="1/2" v-for="item in productPreview">
                <div class="product-card">
                  <a href="#">
                    <div class="product-cover-image" 
                    :style="{ backgroundImage: 'url(' + item.cover_image + ')' }"></div>
                    <h4 class="product-title">{{item.title}}</h4>
                    <p class="vendor-name">{{item.vendor.name}}</p>
                    <strong class="price">￥{{item.price}}</strong>
                    <span class="original-price">￥{{item.original_price}}</span>
                  </a>
                </div>
              </flexbox-item>
            </flexbox>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux';

  import banner from './_banner';
  import feature from './_feature';
  import shelf from './_shelf';

  import api from '../api/api-conf.js';

  export default {
    name: 'home',
    components: {
      Flexbox,
      FlexboxItem,
      banner,
      feature,
      shelf
    },
    data() {
      return {
        bannerList: [],
        featureList:[],
        shelfList: [],
        shelfId: [],
        productPreview: [],
      }
    },
    created() {

    },
    mounted() {
      // banner
      this.$http.get(api.getBanner())
      .then((res) => {
        this.bannerList = res.data.objects;
      });

      // 特色商品
      this.$http.get(api.getFeature())
      .then((res) => {
        this.featureList = res.data.objects;
      });
        
      // 商品类目
      this.$http.get(api.getShelf())
      .then((res) => {
        this.shelfList = res.data.objects;

        var that = this;
        if(res.status === 200) {
          // 去获取对应id下的商品列
          // 商品列
          that.shelfList.forEach(function(item,index){
            //console.log(item.id);
            that.shelfId.push(item.id);
          });

          that.showProductPreview();
        }
      });
      
    },
    computed: {
      // 计算
    },
    methods: {
      // 方法
      showProductPreview: function() {
        var that = this;
        var shelfIdArray = this.shelfId;
        var sid;
        for(sid in shelfIdArray) {
          that.$http.get(api.getProductPreview(shelfIdArray[sid]))
          .then((res) => {
            that.productPreview.push(res.data.objects);
          });
        }
        
      }
    },
    watch: {
      // 监测
    }
  }
</script>

<style lang="less">

  .feature-panel {
    overflow-x: auto;
    padding-left: 10px;

    .vux-flexbox .vux-flexbox-item {
      min-width: 250px;
      a {
        display: block;
        width: 100%;
        height: 134px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }

  .shelf-panel {
    .weui-grid {
      padding-top: 15px;
      padding-bottom: 15px;
      width: 25%;

      &:before,
      &:after {
        display: none;
      }

      .weui-grid__label {
        font-size: 12px;
      }
    }

    .weui-grid .weui-grid__icon {
      width: 65px;
      height: 65px;
      img {
        border: 1px solid #d9d9d9;
        border-radius: 1000px;
      }
    }
  }

  .product-preview-title {
    display: inline-block;
    .english {
      font-size: 18px;
      font-weight: 700;
      border-bottom: 2px solid #000;
    }
    .chinese {
      display: block;
      font-size: 14px;
    }
  }

  .product-preview-list {
    margin-right: -15px;

    .product-card {
      a {
        margin-top: 20px;
        margin-right: 15px;
      }
    }
  }

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

        background: rgba(0,0,0,.1);
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
    .original-price,
    .vendor-name {
      color: #bbb;
    }
    .original-price {
      text-decoration: line-through;
    }
  }
  
</style>