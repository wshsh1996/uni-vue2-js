<script>
import { ImagePath } from '@/utils/lib'

export default {
  name: 'OrderList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: { ImagePath }
}
</script>

<template>
  <view v-for="item in list" :key="item.id" class="bg-white margin-bottom padding-lr padding-tb">
    <!--  编号  -->
    <view class="flex justify-between margin-bottom">
      <view>订单编号：{{ item.order_no }}</view>
      <view class="main-color">{{
        item.status === 1
          ? '下单'
          : item.status === 2
            ? '已付定金'
            : item.status === 3
              ? '购车成功'
              : item.status === 4
                ? '已退定金'
                : item.status === 5
                  ? '已取消'
                  : ''
      }}</view>
    </view>
    <!--  内容  -->
    <view class="flex margin-bottom">
      <image class="car-img margin-right-sm" :src="ImagePath(item.car.images)"></image>
      <view class="car-right">
        <view class="margin-bottom">
          <view class="text-content text-bold">{{ item.car.vehicle_detail.name }}</view>
          <view class="text-cut text-content text-gray">{{ item.car.vehicle_model.name }}</view>
        </view>
        <view class="text-red"
          >指导价<text class="text-bold">{{ item.car.guide_price }}</text
          >万</view
        >
      </view>
    </view>
    <!--  价格  -->
    <view class="flex margin-bottom">
      <view class="margin-right-xl"
        >已付定金：<text class="text-price main-color">{{
          item.payment ? Number(item.final_payment).toFixed(2) : 0
        }}</text></view
      >
      <view
        >已付尾款：<text class="text-price main-color">{{
          item.final_payment ? Number(item.final_payment).toFixed(2) : 0
        }}</text></view
      >
    </view>
    <!--  功能  -->
    <view class="flex justify-end">
      <button class="cu-btn round lines-main">退订金</button>
      <button class="cu-btn round lines-main margin-left-sm">收尾款</button>
      <button class="cu-btn round bg-main margin-left-sm">订单详情</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.car-img {
  width: 150rpx;
  height: 160rpx;
}
.car-right {
  width: 360rpx;
}

.line-main,
.lines-main {
  color: var(--main-color);
}

.bg-main {
  background-color: var(--main-color);
  color: #fff;
}
</style>
