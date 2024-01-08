<script>
import SpCard from '@/components/spCard.vue'

export default {
  components: { SpCard },
  data() {
    return {}
  }
}
</script>

<template>
  <sp-card>
    <view class="page-contain padding-lr padding-tb-xl">
      <uni-forms label-width="210rpx" label-position="top">
        <uni-forms-item label="填写尾款金额" required>
          <uni-easyinput type="digit" placeholder="请填写">
            <template #left>
              <view class="margin-left-xs text-gray">￥</view>
            </template>
          </uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="上传尾款凭证" required>
          <template #des>
            <text class="flex align-center des"> 最多上传10张，仅支持png、jpg格式 </text>
          </template>
        </uni-forms-item>
      </uni-forms>
    </view>
  </sp-card>
</template>

<style lang="scss" scoped>
.page-contain {
  min-height: 100vh;
  background-color: #fff;
}
.des {
  padding: 0 0 8px;
  line-height: 1.5715;
  color: var(--main-color);
}
</style>
