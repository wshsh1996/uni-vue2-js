<template>
  <sp-card>
    <view class="page-contain">
      <!--   会员卡   -->
      <scroll-view class="scroll-view_x padding-lr-sm" :scroll-x="true">
        <view
          v-for="item in data"
          :key="item.id"
          class="vip-card"
          :class="{ on: item.id === vipId }"
          @click="selectVip(item.id)"
        >
          <view class="item-contain text-xl">
            <view class="text-bold" :class="{ on_text: item.id === vipId }">{{ item.name }}</view>
            <view class="text-price text-bold" :class="{ on_text: item.id === vipId }">{{
              item.price.toFixed(2)
            }}</view>
            <view class="text-price text-line-through text-df">{{
              item.originPrice.toFixed(2)
            }}</view>
          </view>
        </view>
      </scroll-view>
      <!--   有效期时间   -->
      <view class="padding-top-sm padding-left-lg text-grey">有效期：365天</view>
      <!--   底部按钮   -->
      <Foot></Foot>
    </view>
  </sp-card>
</template>

<script>
import SpCard from '@/components/spCard.vue'
import Foot from '@/pages/index/components/footer.vue'

export default {
  components: { Foot, SpCard },
  data() {
    return {
      data: [
        { id: 1, name: '体验会员', price: 0.01, originPrice: 1 },
        { id: 2, name: '月卡', price: 1, originPrice: 2 },
        { id: 3, name: '季卡', price: 1888, originPrice: 5852 },
        { id: 4, name: '年卡', price: 4999, originPrice: 7899 }
      ],
      vipId: 0
    }
  },
  methods: {
    selectVip(id) {
      this.vipId = id
    }
  }
}
</script>

<style lang="scss" scoped>
.page-contain {
  padding-top: 20rpx;
  min-height: 100vh;
  background-color: #fff;
}

.vip-card {
  margin: 0 20rpx;
  border: 1rpx solid #f6f5f5;
  display: inline-block;
  width: 220rpx;
  height: 260rpx;
  border-radius: 10rpx;
}
.item-contain {
  padding: 40rpx 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.text-line-through {
  text-decoration: line-through;
}
.scroll-view_x {
  white-space: nowrap;
  width: 100%;
}

.on {
  border: 3rpx solid var(--main-color);
  background-color: #fffaf0;
}
.on_text {
  color: var(--main-color);
}
</style>
