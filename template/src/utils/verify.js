/**
 * @Author: Chen Ming <Amour>
 * @Date:   2017-11-21T14:41:29+08:00
 * @Email:  amourfrei@163.com
 * @Last modified by:   amour
 * @Last modified time: 2017-11-24T10:09:58+08:00
 */

export default new class Verify {
  constructor() {
  }
  isUrl(url) {
    return (/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/i).test(url)
  }
  isTel(tel) {
    return (/^1[3|4|5|8][0-9]\d{4,8}$/).test(tel)
  }
  isObject(val) {
    return !!val && Object.prototype.toString.call(val) === '[object Object]'
  }
  isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  }
}
