<template>
  <flexbox :gutter="10" wrap="wrap">
    <flexbox-item :span="1/2">
      <div class="product-card">
        产品块
      </div>
    </flexbox-item>
  </flexbox>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'productList',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: {
      productList: {}
    }
  }
</script>

<style lang="less">
  
</style>