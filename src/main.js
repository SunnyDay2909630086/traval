// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import fastClick from 'fastclick'
import 'babel-polyfill'       //解决移动端不支持promise的问题
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

//解决移动端不能点击的问题
// const attachFastClick = require('fastclick');
// attachFastClick(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
