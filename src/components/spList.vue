<script>
import { ImagePath, phoneHide } from '@/utils/lib'
import { ToPath } from '@/utils/router'

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    ImagePath(image) {
      return ImagePath(image)
    },
    phoneHide(phone) {
      return phoneHide(phone)
    },
    // 跳转详情页
    toDetailPage(id) {
      ToPath(`/pages/index/components/detail?id=${id}`)
    }
  }
}
</script>

<template>
  <view
    v-for="item in list"
    :key="item.id"
    class="cu-list menu-avatar"
    @click="toDetailPage(item.id)"
  >
    <view class="cu-item">
      <!--      <view-->
      <!--        v-if="item.avatar"-->
      <!--        class="cu-avatar round lg"-->
      <!--        :style="`background-image: url(${ImagePath(item.avatar)})`"-->
      <!--      ></view>-->
      <view class="cu-avatar round lg avatar-default"></view>
      <view class="content">
        <view>
          <view class="margin-right-xs text-black text-bold">{{ item.name }}</view>
          <text class="text-cut text-grey">({{ phoneHide(item.phone) }})</text>
        </view>
        <view class="text-gray text-sm flex">
          <view class="text-cut">
            <text>用户ID:</text>
            {{ item.id }}
          </view>
        </view>
      </view>
      <view class="action">
        <view class="cuIcon-right"></view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>
