<template>
  <div class="banner-wrap">
    <swiper :list="bannerList" auto height="220px" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'vux';

  const imgList = [
    'https://static.vux.li/demo/1.jpg',
    'https://static.vux.li/demo/2.jpg',
    'https://static.vux.li/demo/3.jpg'
  ];
  const bannerList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }));
  
  export default {
    name: 'banner',
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        bannerList: bannerList
      }
    }
  }
</script>

<style lang="less">
  .banner-wrap {
    img {
      max-width: 100%;
    }
  }
</style>