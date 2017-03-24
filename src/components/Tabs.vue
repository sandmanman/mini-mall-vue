<template>
    <div class="tab-panel">
        <div class="tab-bar">
            <a v-for="tab in tabs" class="tab-item" :class="{'active': current === tab}" @click="changeTab(tab)">{{tab.title}}</a>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Tabs',
        data() {
            return {
                tabs: [],
                current: null
            };
        },
        mounted() {
            if (this.current == null) {
                this.current = this.tabs[0];
                this.tabs[0].active = true;
            }
        },
        methods: {
            addTab: function(tab) {
                this.tabs.push(tab);
                if (tab.active === true) {
                    this.current = tab;
                }
            },
            changeTab: function(tab) {
                this.current = tab;
                this.tabs.forEach(value => value.active = value === tab);
                return false;
            }
        }
    }
</script>

<style lang="less">
    .tab-bar {
        position: relative;
        display: flex;
        height: 44px;
    }
    .tab-bar:after {
        content: '';
        
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .tab-bar .tab-item {
        display: block;
        flex: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        font-size: 14px;
        text-align: center;
        line-height: 44px;
        color: #999;
        font-weight: 700;
    }
    .tab-bar .tab-item.active {
        color: #000;
    }
</style>