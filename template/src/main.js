{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

{{#vuex}}
import store from './store'
{{/vuex}}
{{#isMobile}}
import FastClick from 'fastclick'
{{/isMobile}}

// false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 是否允许 vue-devtools 检查代码
Vue.config.devtools = process.env.NODE_ENV === 'development'

{{#isMobile}}
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}
{{/isMobile}}

/* eslint-disable no-new */
new Vue({
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
}).$mount('container');
