import { ApiGetLoginInfo, ApiLogin, ApiLogout } from '@/api/login'
import store from '@/store'

export default {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      token: uni.getStorageSync('token') || ''
    }
  },
  mutations: {
    // 保存token
    saveToken(state, token) {
      state.token = token
      uni.setStorageSync('token', token) // 本地持久化
    },
    // 移除token
    removeToken(state) {
      uni.removeStorageSync('token')
      state.token = ''
    },

    // 存储用户信息
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },

    // 退出登录
    logout(state) {
      state.userInfo = {}
    }
  },
  actions: {
    // 登录存储token
    async Login(context, obj) {
      const res = await ApiLogin(obj.username, obj.password)
      await context.commit('saveToken', res.token)
      await context.dispatch('getUserInfo')
    },

    // 获取登录信息
    async getUserInfo(context) {
      const res = await ApiGetLoginInfo()
      context.commit('saveUserInfo', res)
    },

    // 退出登录
    async logout(context) {
      await ApiLogout()
      context.commit('removeToken')
      context.commit('logout')
    }
  }
}
