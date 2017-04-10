<template>
    <div class="container">

        <app-headerbar></app-headerbar>
    
        <router-view></router-view>
        
    </div>
</template>

<script>
    import appHeaderbar from 'components/headerbar'
    
    export default {
        name: 'app',
        components: {
            appHeaderbar
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import './assets/css/app';
</style>