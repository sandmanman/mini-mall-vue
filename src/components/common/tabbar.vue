<template>
    <div>
        <tabbar>
            <tabbar-item>
                <img slot="icon" src="../assets/demo/icon_nav_button.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item show-dot badge="2">
                <img slot="icon" src="../assets/demo/icon_nav_msg.png">
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item selected link="/component/demo">
                <img slot="icon" src="../assets/demo/icon_nav_article.png">
                <span slot="label">个人中心</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import Tabbar from 'vux'
    import TabbarItem from 'vux'
    
    export default {
        name: 'Tabbar',
        components: {
            Tabbar,
            TabbarItem
        },
        data: function() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    
</style>