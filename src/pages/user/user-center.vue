<template>
    <div class="page">
        <div class="page_bd">
            <div class="weui-tab">
                <div class="weui-tab__panel">
                    个人中心
                </div>
            </div>
        </div>

        <app-tabbar></app-tabbar>
    
    </div>
</template>

<script>
    import appTabbar from 'components/tabbar'
    export default {
        name: 'userCenter',
        components: {
            appTabbar
        }
    }
</script>

<style lang="less">

</style>