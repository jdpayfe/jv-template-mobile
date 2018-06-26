
import * as types from './mutation-types.js'

const mutations = {
  [types.SET_USERINFO] (state, payload) {
    state.userInfo = payload
  }
}

export default mutations
