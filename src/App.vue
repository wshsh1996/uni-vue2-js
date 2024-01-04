<script>
import store from '@/store'
import { ApiInitConfig } from '@/api/public'
export default {
  onLaunch: function () {
    ApiInitConfig().then((res) => {
      store.commit('config/getConfig', res)
      const token = store.state.token.token
      if (token)
        uni.switchTab({
          url: '/pages/index/index'
        })
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import '@/colorUi/main.css';
@import '@/colorUi/icon.css';
@import '@/uni.scss';
@import '@/public.scss';

/*每个页面公共css */
page {
  min-height: 100vh;
  font-size: 28rpx;
  background-color: $main-bg-color;
  color: $main-font-color;
}

// radio样式
switch.main[checked] .wx-switch-input,
checkbox.main[checked] .wx-checkbox-input,
radio.main[checked] .wx-radio-input,
switch.main.checked .uni-switch-input,
checkbox.main.checked .uni-checkbox-input,
radio.main.checked .uni-radio-input {
  background-color: var(--main-color) !important;
  border-color: var(--main-color) !important;
  color: #ffffff !important;
}

checkbox .wx-checkbox-input,
radio .wx-radio-input,
checkbox .uni-checkbox-input,
radio .uni-radio-input {
  margin: 0;
  width: 20px;
  height: 20px;
}
</style>
