<template>
  <flexbox :gutter="10" wrap="nowrap">
    <flexbox-item v-for="item in featureList">
      <a 
      :href="item.target_url"
      :style="{backgroundImage:'url(' + item.image + ')'}"></a>
    </flexbox-item>
  </flexbox>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'feature',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: {
      featureList: Array
    }
  }
</script>

<style lang="less" scoped>
  
</style>