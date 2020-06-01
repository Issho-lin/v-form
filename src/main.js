import Vue from 'vue'
import App from './App.vue'

import Notice from './components/v-notice.vue'
import createNotice from './utils/createNotice'

Vue.config.productionTip = false

Vue.prototype.$notice = props => {
  createNotice(Notice, props)
}

new Vue({
  render: h => h(App),
}).$mount('#app')
