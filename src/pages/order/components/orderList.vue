<script>
import { ImagePath } from '@/utils/lib'
import { ApiReOrPrOrder } from '@/api/order'
import ShowModal from '@/components/showModal.vue'
import { Toast } from '@/utils/toast'
import { ToPath } from '@/utils/router'

export default {
  name: 'OrderList',
  components: { ShowModal },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      modalVisible: false,
      id: null
    }
  },
  methods: {
    ImagePath,
    rePrice(obj) {
      if (obj.status === 2) {
        this.modalVisible = true
        this.id = obj.id
      }
    },
    async Confirm(e) {
      this.modalVisible = e
      await ApiReOrPrOrder(this.id, { status: 4 })
      Toast('操作成功')
    },
    Cancel(e) {
      this.modalVisible = e
    },
    toEndPrice(id) {
      ToPath(`pages/order/components/endPrice?id=${id}`)
    }
  }
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
            ? '已付订金'
            : item.status === 3
              ? '购车成功'
              : item.status === 4
                ? '已退订金'
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
          item.payment !== null ? Number(item.payment.pay_amount).toFixed(2) : 0
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
      <button class="cu-btn round lines-main" @click="rePrice(item)">退订金</button>
      <button class="cu-btn round lines-main margin-left-sm" @click="toEndPrice(item.id)">
        收尾款
      </button>
      <button class="cu-btn round bg-main margin-left-sm">订单详情</button>
    </view>
  </view>
  <show-modal
    :modal-visible="modalVisible"
    title="确定将该笔订单退订金吗?"
    des="确定后，订金将原路返回"
    @cancel="Cancel"
    @confirm="Confirm"
  ></show-modal>
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
