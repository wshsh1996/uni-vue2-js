<script>
export default {
  name: 'ShowModal',
  props: {
    modalVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['change'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <view class="cu-modal" :class="modalVisible ? 'show' : ''">
    <view class="cu-dialog bg-white">
      <view class="padding-tb-xl flex align-center justify-center tip">{{ title }}</view>
      <view class="cu-bar">
        <view class="flex-sub bottom-btn" @tap="hideModal">
          <!--          <button class="cu-btn line-green text-green">取消</button>-->
          取消
        </view>
        <view class="flex-sub bottom-btn-confirm" @tap="hideModal">
          <!--          <button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>-->
          确定
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.tip {
  height: 220rpx;
  font-size: 30rpx;
  font-weight: bold;
}
.bottom-btn,
.bottom-btn-confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1rpx solid #f3f3f3;
  height: 100rpx;
}
.bottom-btn-confirm {
  color: var(--main-color);
}
</style>
