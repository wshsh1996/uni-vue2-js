<script>
export default {
  name: 'Foot',
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <view class="flex justify-around padding-lr btn-fixed-bottom">
    <view class="round text-center wth-btn margin-right padding-lr padding-tb-xs btn-cancel"
      >取消</view
    >
    <view class="round text-center flex-sub padding-lr padding-tb-xs btn-primary">确定</view>
  </view>
</template>

<style scoped lang="scss">
.btn-cancel {
  color: #fff;
  background-color: #dddddd;
}
</style>
