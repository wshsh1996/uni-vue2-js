<script>
import SpCard from '@/components/spCard.vue'

export default {
  name: 'Login',
  components: { SpCard },
  data() {
    return {
      formRef: null,
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: {
          rules: [{ required: true, errorMessage: '请输入账号', trigger: 'blur' }]
        },
        password: {
          rules: [
            { required: true, errorMessage: '请输入密码', trigger: 'blur' },
            { minLength: 6, maxLength: 12, errorMessage: '长度在6~12位之间' }
          ]
        }
      }
    }
  },
  methods: {
    Login() {
      this.$refs.formRef.validate().then(async () => {
        await this.$store.dispatch('user/Login', this.formData)
        await uni.switchTab({
          url: '/pages/index/index'
        })
      })
    }
  }
}
</script>

<template>
  <sp-card>
    <view class="login-box">
      <view class="title">请登录！</view>
      <view class="margin-bottom-xl">
        <uni-forms ref="formRef" :model="formData" :rules="rules" validate-trigger="blur">
          <uni-forms-item name="username">
            <uni-easyinput
              v-model="formData.username"
              prefix-icon="person"
              placeholder="请输入账号"
            ></uni-easyinput>
            <!--            <view class="flex align-center inp-box">-->
            <!--              <view class="text-lg cuIcon-people margin-right-xs"></view>-->
            <!--              <input v-model="formData.username" class="Inp text-df" placeholder="请输入账号" />-->
            <!--            </view>-->
          </uni-forms-item>
          <uni-forms-item name="password">
            <uni-easyinput
              v-model="formData.password"
              prefix-icon="locked"
              placeholder="请输入密码"
            ></uni-easyinput>
            <!--            <view class="flex align-center inp-box">-->
            <!--              <view class="text-lg cuIcon-lock margin-right-xs"></view>-->
            <!--              <input v-model="formData.password" class="Inp text-df" placeholder="请输入密码" />-->
            <!--            </view>-->
          </uni-forms-item>
        </uni-forms>
      </view>
      <view>
        <button class="round btn-primary text-lg" @click="Login">立即登录</button>
      </view>
    </view>
  </sp-card>
</template>

<style lang="scss" scoped>
.login-box {
  padding: 230rpx 30rpx 0 30rpx;
  height: 100vh;
  background: #fff url(@/static/login.png) no-repeat center / contain;
  .title {
    margin-bottom: 50rpx;
    font-size: 40rpx;
    font-weight: bold;
  }
}

.inp-box {
  width: 100%;
  height: 100%;
}

.Inp {
  width: 100%;
  height: 100%;
  border-bottom: 1rpx solid #e5e5e5;
}
</style>
