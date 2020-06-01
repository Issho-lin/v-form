<template>
    <transition name="fade">
        <div :class="['v-notice', type]" v-if="isShow">{{ msg }}</div>
    </transition>
</template>

<script>
export default {
    name: 'v-notice',
    props: {
        msg: String,
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        show() {
            this.isShow = true
            setTimeout(this.hide, this.duration)
        },
        hide() {
            this.isShow = false
            setTimeout(this.remove, 500)
        }
    },
}
</script>

<style scoped>
.v-notice {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
    border: 1px solid #edeff6;
    border-radius: 5px;
    background-color: #edf2fc;
    color: #909399;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.v-notice.success {
    border-color: #e7f5e0;
    background-color: #f0f9eb;
    color: #67c23a;
}
.v-notice.fail {
    border-color: #fde2e2;
    background-color: #fef0f0;
    color: #f56c6c;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>