<template>
    <transition name="slide-fade">
        <div v-if="active" v-show="active" :class="{'active': active}">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'TabItem',
        data() {
            return {
                active: false,
            };
        },
        props: {
            'title': {
                required: true,
                type: String
            },
            'isActive': {
                required: false,
                type: Boolean,
                default: false
            }
        },
        created: function() {
            this.active = this.isActive;
        },
        mounted: function() {
            this.$parent.addTab(this);
        }
    }
</script>

<style lang="less">
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
</style>