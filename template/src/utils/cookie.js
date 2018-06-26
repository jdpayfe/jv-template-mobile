
import _verify from './verify'

export default new class Cookie {

  /**
   * constructor
   */
  constructor() {
    this.defaults = {}
    this.expiresMultiplier = 60 * 60 * 24
  }


  get(key) {
    if (!key) {
      throw new Error('key not found.')
      return
    }
    if (typeof key === 'object') {
      throw new Error('key should not be object.')
      return
    }
    let cookies = this.all()
    return cookies[key];
  }


  set(key, value, options) {
    options = _verify.isObject(options) ? options : {expires: options}
    //session cookie will be set, if expires.
    let expires, path, domain, secure;
    expires = options.expires !== undefined ? options.expires : (this.defaults.expires || ''),
      expiresType = typeof(expires)
    if (expiresType === 'string' && expires !== '') {
      expires = new Date(expires)
    } else if (expiresType === 'number') {
      expires = new Date(+new Date + 1000 * this.expiresMultiplier * expires)
    }
    if (expires !== '' && 'toGMTString' in expires) {
      expires = ';expires=' + expires.toGMTString()
    }
    //set path
    path = options.path || this.defaults.path
    path = path ? ';path=' + path : ''
    //set domain
    domain = options.domain || this.defaults.domain
    domain = domain ? ';domain=' + domain : ''
    //set secure
    secure = options.secure || this.defaults.secure ? ';secure' : ''
    if (options.secure === false) secure = ''
    //set cookie
    document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(value)) + expires + path + domain + secure
    return this
  }


  remove(keys) {
    keys = _verify.isArray(keys) ? keys : [keys]
    for (let i = 0, l = keys.length; i < l; i++) {
      this.set(keys[i], '', -1);
    }
    return this
  }


  all() {
    let cookieArr, cookie;
    cookie = document.cookie
    if (cookie === '') return {}
    cookieArr = cookie.split('; '),
      result = {}
    for (let i = 0, l = cookieArr.length; i < l; i++) {
      let item, key, value;
      item = cookieArr[i].split('=');
      //arr.shift()
      key = decodeURIComponent(item.shift())
      value = decodeURIComponent(item.join(''))
      result[key] = value
    }
    return result
  }
}
