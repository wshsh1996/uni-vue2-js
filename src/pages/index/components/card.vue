<script>
import { ApiCard } from '@/api/user'
import { Toast } from '@/utils/toast'

export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  onReady() {},
  methods: {
    // 划卡
    changeCard(id) {
      uni.showModal({
        title: '提示',
        content: '确认要划卡吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              await ApiCard(id)
              Toast('划卡成功')
              this.$emit('reloadList')
            } catch (e) {
              Toast('划卡失败')
            }
          }
        }
      })
    }
  }
}
</script>

<template>
  <view
    v-for="(item, index) in card"
    :key="index"
    class="padding-lr-xl padding-tb flex flex-direction justify-between bg-white"
  >
    <view class="padding-tb-xs flex text-gray">
      <view class="flex-sub">
        <view class="text-bold text-black text-lg">洗车年卡</view>
        <view class="margin-top-xs">有效期至：{{ item.expires_time }}</view>
      </view>
      <view class="text-gray">剩余{{ item.times }}次</view>
    </view>
    <view class="padding-tb-xs text-gray">
      <view class="text-bold text-black text-lg">服务内容:</view>
      <view class="flex justify-between">
        <view>
          <view class="margin-top-xs">{{ item.remark }}</view>
        </view>
        <view class="flex align-end">
          <view
            class="padding-lr-sm round btn-primary card-btn text-center"
            @click="changeCard(item.id)"
            >划卡</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
