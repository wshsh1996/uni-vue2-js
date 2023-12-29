const state = {
  config: {},
  showLoading: false,
  mainColor: '#ffab2c', // 主题色
  mainBgColor: '#F8F8F8', // 背景色
  mainFontColor: '#333333', // 主文字颜色
  fontColor: '#666666' // 常规字体颜色
}

const mutations = {
  // 同步设置主题色
  setMainColor: (state, color) => {
    if (!color) return
    state.mainColor = color
    uni.setTabBarStyle({
      selectedColor: color
    })
  },

  // 显示加载框
  setShowLoading: (state, show) => {
    state.showLoading = show
    setTimeout(() => {
      state.showLoading = false
    }, 4000)
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
