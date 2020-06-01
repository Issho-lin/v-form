<template>
  <label>
      <span>{{ label }}</span>
      <slot></slot>
      <i v-show="error">{{ error }}</i>
  </label>
</template>

<script>
import schema from 'async-validator'
export default {
    name: 'v-form-item',
    inject: ['form'],
    props: {
        label: String,
        prop: String
    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    data() {
        return {
            error: ''
        }
    },
    methods: {
        validate() {
            const { rules, model } = this.form
            const descriptor  = {
                [this.prop]: rules[this.prop]
            }
            return new schema(descriptor).validate({ [this.prop]: model[this.prop] }, error => {
                if (error) {
                    this.error = error[0].message
                } else {
                    this.error = ''
                }
            })
        }
    },
}
</script>

<style scoped>
label {
    display: inline-block;
    padding-bottom: 25px;
    position: relative;
}
span {
    margin-right: 10px;
}
i {
    color: #f56c6c;
    position: absolute;
    bottom: 0;
    left: 50px;
}
</style>