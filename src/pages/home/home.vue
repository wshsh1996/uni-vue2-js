<script>
import SpCard from '@/components/spCard.vue'
import UserInfo from '@/pages/home/components/userInfo.vue'
import ShowModal from '@/components/showModal.vue'

export default {
  name: 'Home',
  components: { ShowModal, UserInfo, SpCard },
  data() {
    return {
      systemInfo: '',
      menuList: [
        {
          name: '我的客户',
          icon: '/static/custom.png',
          path: '/pages/customer/customer'
        },
        {
          name: '修改密码',
          icon: '/static/password.png',
          path: '/pages/order/order'
        },
        {
          name: '退出登录',
          icon: '/static/exit.png',
          path: '/pages/login/login'
        }
      ],
      modalVisible: false
    }
  },
  methods: {
    toPage(path) {
      if (path === '/pages/login/login') {
        this.modalVisible = true
      }
    },
    async Confirm(e) {
      this.modalVisible = e
      await this.$store.dispatch('user/logout')
      await uni.reLaunch({
        url: '/pages/login/login'
      })
    },
    Cancel(e) {
      this.modalVisible = e
    }
  },
  onLoad() {
    this.systemInfo = uni.getSystemInfoSync()
  }
}
</script>

<template>
  <SpCard>
    <view class="user relative">
      <!--阴影-->
      <view class="round flat absolute"></view>
      <view class="userCard">
        <!--状态栏高度-->
        <view
          :style="{
            height: systemInfo.statusBarHeight + 'px'
          }"
        ></view>

        <!--自定义标题栏-->
        <view class="navbar text-center">
          <text> 我的 </text>
        </view>
        <!--信息部分-->
        <user-info></user-info>
      </view>
      <!--  菜单列表  -->
      <view class="card-box">
        <view class="card-menu">
          <view
            v-for="item in menuList"
            :key="item.name"
            class="padding-tb-sm padding-lr-sm flex align-center bg-white"
            @click="toPage(item.path)"
          >
            <image class="icon-menu" :src="item.icon"></image>
            <view class="flex-sub">{{ item.name }}</view>
            <view class="cuIcon-right"></view>
          </view>
        </view>
      </view>
    </view>
    <show-modal
      :modal-visible="modalVisible"
      title="确定退出登录吗?"
      @confirm="Confirm"
      @cancel="Cancel"
    ></show-modal>
  </SpCard>
</template>

<style lang="scss" scoped>
.user {
  $main-color: var(--main-color);
  .userCard {
    height: 480rpx;
    background-color: $main-color;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
  }
  .flat {
    width: 500rpx;
    height: 500rpx;
    background-color: rgba(255, 255, 255, 0.1);
    top: -150rpx;
    left: -200rpx;
  }
  .card-box {
    margin-top: -60rpx;
    padding: 0 30rpx;
    .card-menu {
      border-radius: 20rpx;
    }
  }
}

.icon-menu {
  width: 60rpx;
  height: 60rpx;
  margin-right: 10rpx;
}
</style>
