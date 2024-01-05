<script>
import MeScrollBody from '@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue'
import MescrollMixins from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins'
import SpCard from '@/components/spCard.vue'
import Foot from '@/pages/index/components/footer.vue'
import { Toast } from '@/utils/toast'
import { ApiGetCardList, ApiGiveCard } from '@/api/card'

export default {
  name: 'SelectCoupon',
  components: { Foot, SpCard, MeScrollBody },
  mixins: [MescrollMixins],
  data() {
    return {
      cards: [],
      bottom: 0,
      userId: null,
      cardId: []
    }
  },
  onReady() {
    const systemInfo = uni.getSystemInfoSync()
    const safeAreaBottom = systemInfo.safeAreaInsets.bottom
    this.bottom = safeAreaBottom + 30
  },
  onLoad(options) {
    this.userId = options.id
  },
  methods: {
    // 上拉回调
    upCallback(page) {
      let pageNum = page.num // 页码, 默认从1开始
      let pageSize = page.size // 页长, 默认每页10条
      ApiGetCardList(pageNum, pageSize).then((res) => {
        let curPageData = res.data // 接口返回的当前页数据列表 (数组)
        let curPageLen = res.data.length // 接口返回的当前页数据长度
        let totalSize = res.meta.total

        //设置列表数据
        if (page.num === 1) this.cards = [] //如果是第一页需手动置空列表
        this.cards = this.cards.concat(curPageData) //追加新数据

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
    },
    handleSelect(e) {
      this.cardId = JSON.parse(JSON.stringify(e.detail.value))
    },
    async submit() {
      await ApiGiveCard(this.userId, this.cardId)
      Toast('赠送成功')
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
      <view class="padding-lr">
        <checkbox-group @change="handleSelect">
          <view
            v-for="(item, index) in cards"
            :key="index"
            class="margin-tb-sm padding-tb-sm padding-lr-sm flex bg-white"
          >
            <label>
              <checkbox
                :value="item.id"
                class="round main margin-right-sm padding-top-xs"
              ></checkbox>
            </label>
            <view class="flex-sub">
              <view class="padding-tb-xs flex justify-between text-gray">
                <view class="flex-sub">
                  <view class="flex justify-between">
                    <view class="text-bold text-black text-lg">{{ item.title }}</view>
                    <view class="text-gray rest-btn">剩余{{ item.times }}次</view>
                  </view>
                  <view class="margin-top-xs">有效期至：{{ item.created_at }}</view>
                </view>
              </view>
              <view class="padding-tb-xs flex justify-between text-gray">
                <view>
                  <view class="flex justify-between">
                    <view class="text-bold text-black text-lg">服务内容</view>
                  </view>
                  <view class="margin-top-xs remark">{{ item.remark }}</view>
                </view>
                <view class="bg-img"></view>
              </view>
            </view>
          </view>
        </checkbox-group>
      </view>
    </me-scroll-body>
    <!--  底部按钮  -->
    <view class="foot-box">
      <Foot @confirm="submit"></Foot>
    </view>
  </sp-card>
</template>

<style lang="scss" scoped>
.rest-btn {
  padding: 5rpx 10rpx;
  border: 2rpx solid #aaaaaa;
  border-radius: 10rpx;
}

.remark {
  width: 400rpx;
}

.bg-img {
  background: url('@/static/card.png') no-repeat center center / 100% 100%;
  width: 130rpx;
  height: 130rpx;
  border-radius: 10rpx;
}

.foot-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 160rpx;
  background-color: #fff;
}
</style>
