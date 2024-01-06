import Request from 'luch-request'
import store from '@/store'
import { Toast } from '@/utils/toast'

// 封装请求方式
const http = new Request()

/**
 * @description 修改全局默认配置
 * @param {Function}
 */
http.setConfig((config) => {
  //'http://192.168.6.113:8006/api'
  /* config 为默认全局配置*/
  /* 根域名 */
  config.baseURL = 'http://192.168.6.113:8006/api'
  /* 头部 */
  config.header = {
    Accept: 'application/json',
    contentType: 'application/json',
    xRequestedWith: 'XMLHttpRequest'
  }
  return config
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    let token = store.state.user.token
    if (token) {
      config.header.Authorization = 'Bearer' + token
    }
    store.commit('config/setShowLoading', true)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    store.commit('config/setShowLoading', false)
    return response.data
  },
  (error) => {
    /* 登录账号密码错误 */
    if (error.data.code === 400) {
      Toast(error.data.message)
    }
    /* token过期 */
    if (error.data.code === 401) {
      Toast(error.data.message)
      uni
        .reLaunch({
          url: '/pages/login/login'
        })
        .then()
      store.commit('user/removeToken')
    }

    store.commit('config/setShowLoading', false)
    return Promise.reject(error)
  }
)

export default http
