import { ApiLoginInfo } from '@/api/user'

export default {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async getUserInfo() {
      await ApiLoginInfo()
    }
  }
}
