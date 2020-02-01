// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './filters' // 加载过滤器

import './mock/mockServer' // 加载mockServer即可

import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

// 注册全局组件
Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
