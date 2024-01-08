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
    },
    des: {
      type: String,
      default: ''
    }
  },
  emits: ['confirm', 'cancel'],
  data() {
    return {}
  },
  watch: {
    modalVisible(newVal, oldVal) {
      console.log(newVal, 'new')
      console.log(oldVal, 'old')
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm', false)
    },
    cancel() {
      this.$emit('cancel', false)
    }
  }
}
</script>

<template>
  <view class="cu-modal" :class="modalVisible ? 'show' : ''">
    <view class="cu-dialog bg-white">
      <view class="padding-tb-lg flex flex-direction align-center justify-center tip">
        <view>{{ title }}</view>
        <view v-if="des" class="text-gray des">{{ des }}</view>
      </view>
      <view class="cu-bar">
        <view class="flex-sub bottom-btn" @tap="cancel"> 取消 </view>
        <view class="flex-sub bottom-btn-confirm" @tap="confirm"> 确定 </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.tip {
  height: 220rpx;
  font-size: 32rpx;
  font-weight: bold;
}
.des {
  font-size: 30rpx;
  margin-top: 10rpx;
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
