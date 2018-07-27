import {
  getInfo
} from '../service/request.js'

import {
  SET_USERINFO
} from './mutation-types.js'

export default {
  async getUserInfo({
    commit,
    state
  }) {
    // 请求接口逻辑
    let res = await getInfo({});
    commit(SET_USERINFO, res)
  }
}
