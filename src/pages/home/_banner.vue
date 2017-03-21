<template>
  <div class="banner-wrap">
    <swiper auto :aspect-ratio="470/800" :show-dots="false" dots-position="center">
      <swiper-item v-for="item in bannerList">
        <img :src="item.image">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'vux';

    export default {
        name: 'banner',
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            bannerList: Array
        }
    }
</script>

<style lang="less">
    .banner-wrap img {
        max-width: 100%;
    }

    .vux-slider>.vux-indicator>a>.vux-icon-dot.active,
    .vux-slider .vux-indicator-right>a>.vux-icon-dot.active {
        background-color: #000;
    }
</style>