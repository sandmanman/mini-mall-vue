<template>
  <div class="weui-panel shelf-preview-panel">
    <div class="weui-panel__hd"
      :style="{ backgroundImage: 'url(' + shelfCurrent.background_image + ')' }">
      <h1>
        <span class="text english">{{shelfCurrent.english_name}}</span>
        <span class="text chinese">{{shelfCurrent.name}}</span>
      </h1>
    </div>
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_text">
        <div class="product-preview-list">
          
          <products v-bind:shelf-id="shelfId" v-bind:limit="limit"></products>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import products from 'components/product-list';

    import api from 'src/pages/api/api-conf.js';

    export default {
        name: 'shelfPreview',
        components: {
            products
        },
        data() {
            return {
                shelfId: null,
                limit: 10,
                shelfCurrent: []
            }
        },
        created() {
            this.getShelfId();
            this.getShelfCurrent(this.shelfId);
        },
        watch: {

        },
        methods: {
            getShelfId() {
                return this.shelfId = this.$route.query.id;
            },
            getShelfCurrent(shelfId) {
                this.$http.get(api.getShelfOnly(shelfId))
                    .then((res) => {
                        this.shelfCurrent = res.data;
                        console.log(this.shelfCurrent)
                    });
            }
        }
    }
</script>

<style lang="less">
    .weui-panel__hd {
        display: table;
        width: 100%;
        min-height: 220px;
        text-align: center;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        h1 {
            position: relative;
            z-index: 10;
            display: table-cell;
            vertical-align: middle;
            color: #fff;
        }
        .english {
            font-size: 20px;
            font-weight: 700;
            border-bottom: 2px solid #fff;
        }
        .chinese {
            display: block;
            font-size: 16px;
        }
        &:after {
            left: 0;
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, .25);
        }
    }

    .product-preview-list {
        margin-right: -15px;
        .product-card {
            a {
                margin-top: 0;
                margin-right: 15px;
            }
        }
    }
</style>