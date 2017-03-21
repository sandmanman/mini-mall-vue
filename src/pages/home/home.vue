<template>
  <div class="home-panel">
    <banner v-bind:bannerList="bannerList"></banner>

    <!-- 特色商品 S -->
    <div class="weui-panel feature-panel">
        <feature v-bind:featureList="featureList"></feature>
    </div>
    <!-- / 特色商品 End -->

    <!-- 商品类目 S -->
    <div class="weui-panel shelf-panel">
      <div class="weui-panel__bd">
        <shelf v-bind:shelfList="shelfList"></shelf>
      </div>
    </div>
    <!-- / 商品类目 End -->

    <!-- 类目列 S -->
    <div class="weui-panel product-preview-panel"
      v-for="item in shelfList" v-bind:key="item.id">

      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <h3 class="weui-media-box__title product-preview-title">
            <span class="text english">{{item.english_name}}</span>
            <span class="text chinese">{{item.name}}</span>
          </h3>
          <div class="product-preview-list">
            
            <products v-bind:shelf-id="item.id" v-bind:limit="10"></products>

          </div>
        </div>
      </div>

    </div>
    <!-- / 类目列 End -->

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
                featureList: [],
                shelfList: [],
            }
        },
        beforeCreate() {
            // 组件刚被创建，组件属性计算之前，如data属性
            // 这里可以弄个loading
        },
        created() {
            // 实例创建完成之后的钩子函数
            // 完成了 data 数据的初始化，el没有
            // DOM还没完成，$el属性还不存在
            // 这里也可先请求数据了 ajax
            // 这里可以 结束loading，还做一些初始化，实现函数自执行

            this.dataInit();
        },
        beforeMount() {
            // 完成了 el 和 data 初始化
        },
        mounted() {
            // 将编译好的HTML挂载到页面完成之后的钩子函数
            // mounted 在整个实例生命内只执行一次

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    
</style>