<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
export default {
    name: 'v-form',
    props: {
        model: Object,
        rules: Object
    },
    provide() {
        return {
            form: this
        }
    },
    methods: {
        validate(cb) {
            const task = []
            this.$children.filter(item => item.prop).map(item => {
                task.push(item.validate())
            })
            Promise.all(task).then(() => cb(true)).catch(() => cb(false))
        }
    },
}
</script>

<style>

</style>