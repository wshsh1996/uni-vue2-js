<script>
export default {
  name: 'SpInfo',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    },
    bodyTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  }
}
</script>

<template>
  <view :style="'padding-top:' + bodyTop + 'px'">
    <view class="padding-lr-xl padding-tb flex flex-direction justify-between bg-white">
      <view class="padding-tb-xs flex">
        <view class="flex-sub text-gray">微信昵称：</view>
        <view class="flex-twice text-bold">{{ info.name }}</view>
      </view>
      <view class="padding-tb-xs flex">
        <view class="flex-sub text-gray">绑定手机号：</view>
        <view class="flex-twice text-bold">{{ info.phone }}</view>
      </view>
      <view class="padding-tb-xs flex">
        <view class="flex-sub text-gray">用户ID：</view>
        <view class="flex-twice text-bold">{{ info.id }}</view>
      </view>
      <view class="padding-tb-xs flex">
        <view class="flex-sub text-gray">是否会员：</view>
        <view class="flex-twice text-bold">{{ info.is_plus === 0 ? '否' : '是' }}</view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
