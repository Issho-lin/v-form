<template>
  <input :type="type" :value="value" @input="handleInput" @blur="validate">
</template>

<script>
export default {
    name: 'v-input',
    props: {
        value: String,
        type: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        validate() {
            // console.log('校验规则...')
            this.$parent.$emit('validate', this.value)
        }
    },
}
</script>

<style scoped>
input  {
    width: 250px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 16px;
}
</style>