
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'
import * as getters from './getters'

Vue.use(Vuex)

// const state = {
//   userInfo: {
//     username: '',
//     avatar: '//misc.360buyimg.com/mtd/pc/index/home/images/logo.v3@2x.jpg'
//   }
// }

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
