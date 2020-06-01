<template>
  <div id="app">
    <v-form :model="form" :rules="rules" ref="form">
      <v-form-item label="用户名" prop="username">
        <v-input v-model="form.username"></v-input>
        <!-- <v-input :value="form.username" @input="form.username = $event"></v-input> -->
        <!-- <span>{{ form }}</span> -->
      </v-form-item>
      <v-form-item label="密码" prop="password">
        <v-input v-model="form.password"></v-input>
      </v-form-item>
      <v-form-item>
        <button type="button" @click="formSubmit">submit</button>
      </v-form-item>
    </v-form>
    <!-- <v-message message="验证失败"></v-message> -->
  </div>
</template>

<script>
import VInput from './components/v-input'
import VFormItem from './components/v-form-item'
import VForm from './components/v-form'
// import VMessage from './components/v-message'
export default {
  name: 'App',
  components: {
    VInput,
    VFormItem,
    VForm,
    // VMessage
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符' }
        ]
      }
    }
  },
  methods: {
    formSubmit() {
      // console.log('校验规则...')
      this.$refs.form.validate(valid => {
        this.$notice({
            type: valid ? 'success' : 'fail',
            msg: valid ? '验证通过' : '验证失败',
            duration: 2000
        })
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
