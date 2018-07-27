
import fetch from '../common/fetch'
import * as api from '../api'

// todo:your api.
export const getInfo = (params) => fetch(api.GET_USERINFO, params, 'get')
