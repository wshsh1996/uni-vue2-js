<script>
import { ToPath } from '@/utils/router'
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  methods: {
    login() {
      ToPath('/pages/login/login')
    }
  }
}
</script>

<template>
  <view class="user-info flex align-center">
    <image class="round avatar" src="@/static/avatar.png"></image>
    <view v-if="!userInfo.name" class="margin-left-sm text-white" @click="login">请登录</view>
    <view v-else class="margin-left-sm text-white">{{ userInfo.name }}</view>
  </view>
</template>

<style scoped lang="scss">
.user-info {
  margin-top: 80rpx;
  padding: 0 40rpx;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
}
</style>
