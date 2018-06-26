
import axios from 'axios'
import { BASE_URL } from '../api'

export default function fetch (url = '', data = {}, method = 'get') {
  method = method.toLowerCase()
  let ops = { params: data }
  if (method === 'post') {
    // var pms = new URLSearchParams();
    // for(let d in data){
    //   pms.append(d, data[d]);
    // }
    ops = { data: data }
  }
  let options = {
    url,
    ...ops,
    method
  }

  return new Promise((resolve, reject) => {
    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      // baseURL: BASE_URL,
      baseURL: BASE_URL,
      //设置请求超时设置
      timeout: 5000,
      withCredentials: true,
      crossDomain: true
    })
    //请求处理
    instance(options)
      .then(({ data }) => {
        //请求成功时,根据业务判断状态
        if (data.returnCode === '') { //未登录
          // 跳登录页
          // let returnurl = encodeURIComponent(location.href)
          // location.href = "//plogin.m.jd.com/user/login.action?appid=452&returnurl=" + returnurl
        } else if (data.returnCode === '200') { // 返回成功数据
          resolve(data)
          return false
        }
        console.log('请求数据成功！')
        reject(data)
      })
      .catch((error) => {
        //请求失败时,根据业务判断状态
        if (error.response) {
          // let resError = error.response
          let resCode = error.status
          let resMsg = error.message
          console.log('请求数据失败！')
           // eslint-disable-next-line // 下一行跳过检查
          reject({ code: resCode, returnMessage: resMsg })
        } else {
          console.log("数据请求超时")
          // eslint-disable-next-line // 下一行跳过检查
          reject({ type: 'canceled' })
        }
      })
  })
}
