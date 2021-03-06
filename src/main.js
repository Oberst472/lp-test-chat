import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/scss/main.scss'
import '@/components/ui'
import '@/components/icons'

if (process.env.NODE_ENV === 'development') {
  require('./assets/scss/breakpoints-helpers.scss')
    document.body.classList.add('dev')
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

