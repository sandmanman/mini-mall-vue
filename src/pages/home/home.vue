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
            
            <products v-bind:shelf-id="item.id"></products>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import banner from './_banner';
  import feature from './_feature';
  import shelf from './_shelf';
  import products from 'components/product-list';

  import api from 'src/pages/api/api-conf.js';

  export default {
    name: 'home',
    components: {
      banner,
      feature,
      shelf,
      products
    },
    data() {
      return {
        bannerList: [],
        featureList:[],
        shelfList: [],
      }
    },
    created() {
      this.dataInit();
    },
    methods: {
      // 方法
      dataInit() {
        var _this = this;
        // banner
        _this.$http.get(api.getBanner())
        .then((res) => {
          _this.bannerList = res.data.objects;
        });

        // 特色商品
        _this.$http.get(api.getFeature())
        .then((res) => {
          _this.featureList = res.data.objects;
        });
          
        // 商品类目
        _this.$http.get(api.getShelf())
        .then((res) => {
          _this.shelfList = res.data.objects;
        });
      }
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
  
</style>