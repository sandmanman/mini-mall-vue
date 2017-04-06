<template>
    <div class="container">

        <app-headerbar></app-headerbar>
    
        <router-view></router-view>
    
        <app-tabbar v-if=" this.$route.name !== 'product' "></app-tabbar>
    
    </div>
</template>

<script>
    import appHeaderbar from 'components/headerbar'
    import appTabbar from 'components/tabbar'
    
    export default {
        name: 'app',
        components: {
            appHeaderbar,
            appTabbar
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import './assets/css/app';
</style>