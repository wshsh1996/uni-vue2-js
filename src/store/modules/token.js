export default {
  namespaced: true,
  state() {
    return {
      token: uni.getStorageSync('token') || ''
    }
  },

  mutations: {
    // 获取token
    getToken(state, token) {
      state.token = token
    },

    // 存储仓库token
    setToken(state) {
      state.token = uni.getStorageSync('token') // 存储仓库
    },

    // 删除token
    removeToken(state) {
      uni.removeStorageSync('token')
      state.token = ''
    }
  }
}
