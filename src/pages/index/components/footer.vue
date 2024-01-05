<script>
export default {
  name: 'Foot',

  data() {
    return {
      bottom: 0
    }
  },

  methods: {
    Return() {
      uni.navigateBack()
    },
    Confirm() {
      this.$emit('confirm')
    }
  }
}
</script>

<template>
  <view class="flex justify-around padding-lr btn-fixed-bottom footer">
    <view
      class="round text-center wth-btn margin-right padding-lr padding-tb-xs btn-cancel"
      @click="Return"
      >取消</view
    >
    <view class="round text-center flex-sub padding-lr padding-tb-xs btn-primary" @click="Confirm"
      >确定</view
    >
  </view>
</template>

<style scoped lang="scss">
.btn-cancel {
  color: #fff;
  background-color: #dddddd;
}
</style>
