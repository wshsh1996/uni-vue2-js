<script>
import MeScrollBody from '@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue'
import MescrollMixins from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins'
import SpCard from '@/components/spCard.vue'
import { getCouponList } from '@/api/coupon'
import Foot from '@/pages/index/components/footer.vue'

export default {
  name: 'SelectCoupon',
  components: { Foot, SpCard, MeScrollBody },
  mixins: [MescrollMixins],
  data() {
    return {
      coupons: [],
      bottom: 0
    }
  },
  onReady() {
    const systemInfo = uni.getSystemInfoSync()
    const safeAreaBottom = systemInfo.safeAreaInsets.bottom
    this.bottom = safeAreaBottom + 30
  },
  methods: {
    Bottom(e) {
      console.log(e, 'e')
    },
    // 上拉回调
    upCallback(page) {
      let pageNum = page.num // 页码, 默认从1开始
      let pageSize = page.size // 页长, 默认每页10条
      getCouponList(pageNum, pageSize).then((res) => {
        let curPageData = res.data // 接口返回的当前页数据列表 (数组)
        let curPageLen = res.data.length // 接口返回的当前页数据长度
        let totalSize = res.meta.total

        //设置列表数据
        if (page.num === 1) this.coupons = [] //如果是第一页需手动置空列表
        this.coupons = this.coupons.concat(curPageData) //追加新数据

        this.mescroll.endBySize(curPageLen, totalSize)
      })
    },
    /*若希望重新加载列表,只需调用此方法即可(内部会自动page.num=1,再主动触发up.callback)*/
    reloadList() {
      this.mescroll.resetUpScroll()
    },
    // 回到顶部
    topClick() {
      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration) // 执行回到顶部
    },
    reload() {
      this.reloadList()
      this.topClick()
    }
  }
}
</script>

<template>
  <sp-card>
    <me-scroll-body
      :bottom="bottom + 'px'"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
      <view class="padding-lr padding-tb bg-white">
        <checkbox-group v-for="item in coupons" :key="item.id" class="padding-tb-xs">
          <view class="flex align-center item-box">
            <label>
              <checkbox class="round main margin-right"></checkbox>
            </label>
            <view class="flex flex-sub align-center main-box">
              <view class="l-box">
                <view class="text-price text-bold">{{ item.amount }}</view>
                <view class="text-sm">满{{ item.full_amount }}可用</view>
              </view>
              <view class="r-box flex-sub text-gray">
                <view class="text-bold text-black text-df name-box">{{ item.title }}</view>
                <view class="text-sm">
                  <view>使用范围：</view>
                  <view>有效期至：{{ item.created_at }}</view>
                </view>
              </view>
            </view>
          </view>
        </checkbox-group>
      </view>
    </me-scroll-body>
    <!--  底部按钮  -->
    <view class="foot-box">
      <Foot></Foot>
    </view>
  </sp-card>
</template>

<style lang="scss" scoped>
.item-box {
  width: 100%;
}

.l-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 160rpx;
  height: 160rpx;
  font-size: 34rpx;
  color: #fff;
  border-bottom-left-radius: 10rpx;
  border-top-left-radius: 10rpx;
  background-color: var(--main-color);
}
.l-box::after {
  content: '';
  position: absolute;
  width: 4rpx;
  height: 100%;
  top: 0;
  right: -4rpx;
  background: radial-gradient(circle at right center, transparent 8rpx, var(--main-color) 0) left
    center / 8rpx 20rpx;
}

.r-box {
  padding-left: 16rpx;
  height: 160rpx;
}
.name-box {
  display: flex;
  align-items: center;
  height: 50%;
}

.foot-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 160rpx;
  background-color: #fff;
}
</style>
