import store from '@/store'
/**
 *统一路由跳转（跳转非底部菜单栏）
 * @param {String} url 要跳转的url
 * @param {Boolean} isLogin 是否需要登录默认为true
 */
let delay = 500 //节流设置500ms
let timer = null

/**
 *  统一路由跳转 不支持底部菜单
 * @param url  路径
 * @param successEmit function
 * @param data 页面传值
 * @param isLogin 是否需要登录
 * @param successEmit
 */
export function ToPath(url, successEmit = null, data = {}, isLogin = true) {
  if (!url) {
    store.commit('user/removeToken')
    store.commit('user/logout')
    uni
      .navigateTo({
        url: '/pages/login/login'
      })
      .then()
    return
  }
  if (timer) {
    return
  }
  if (isLogin && !store.state.user.token) {
    store.commit('user/removeToken')
    store.commit('user/logout')
    uni
      .navigateTo({
        url: '/pages/login/login'
      })
      .then()
  } else {
    uni.navigateTo({
      url: url[0] === '/' ? url : '/' + url,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        successEmit: (data) => {
          console.log(data, 'data')
          successEmit && successEmit(data)
        }
      },
      success: (res) => {
        if (data) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('formData', { ...data })
        }
      },
      fail: (err) => {
        console.error('路由跳转错误', err)
      }
    })
  }
  timer = setTimeout(() => {
    clearTimeout(timer)
    timer = null
  }, delay)
}
