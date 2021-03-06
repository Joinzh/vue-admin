// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'
import store from './store/index.js'
import {router} from './router/index';
import {appRouter} from './router/router';
import 'iview/dist/styles/iview.css'
import util from './libs/util'

Vue.config.productionTip = false

Vue.use(iview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
