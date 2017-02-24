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

    <div class="weui-panel shelf-list-panel">
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <h3 class="weui-media-box__title shelf-list-title">
            <span class="text english">New Arrivals</span>
            <span class="text chinese">新品上架</span>
          </h3>
          


        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Banner from './_banner';
  import Feature from './_feature';
  import Shelf from './_shelf';

  import api from '../api/api-conf.js';

  export default {
    name: 'home',
    components: {
      Banner,
      Feature,
      Shelf
    },
    data() {
      return {
        bannerList: {},
        featureList:{},
        shelfList: {}
      }
    },
    created() {
      // banner数据
      this.$http.get(api.getBannerData()).then((res) => {
          this.bannerList = res.data.objects;
        });

      // 特色商品数据
      this.$http.get(api.getFeatureData()).then((res) => {
          this.featureList = res.data.objects;
        });
        
      // 类别数据
      this.$http.get(api.getShelfData()).then((res) => {
          this.shelfList = res.data.objects;
        });
        
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

  .shelf-list-title {
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
  
</style>