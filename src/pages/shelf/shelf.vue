<template>
  <div class="shelf-preview-panel">
    <products v-bind:shelf-id="16"></products>
  </div>
</template>

<script>
  import products from 'components/product-list';
  export default {
    name: 'shelfPreview',
    components: {
      products
    },
    data() {
      return {
        products: []
      }
    },
    created() {

    }
  }
</script>

<style lang="less">
  
</style>