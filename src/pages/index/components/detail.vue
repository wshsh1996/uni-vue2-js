<template>
  <sp-card>
    <!--   tabs   -->
    <view class="fixedTab tabNav">
      <sp-tabs v-model:value="tabIndex" :tabs="tabList" @change="swiperChange"></sp-tabs>
    </view>
    <!--  信息-->
    <info v-if="userInfo && tabIndex === 0" :info="userInfo" :body-top="bodyTop"></info>
    <!--  卡片 滑动区域  -->
    <me-scroll-body
      v-if="cardList && tabIndex === 1"
      :top="bodyTop + 'px'"
      :bottom="bottom + 'px'"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
      <card v-if="cardList && tabIndex === 1" :card="cardList" @reload-list="reload"></card>
    </me-scroll-body>

    <!--  footer  -->
    <view class="flex justify-around padding-lr-sm btn-fixed-bottom footer">
      <view
        class="round text-center wth-btn padding-lr padding-tb-xs btn-primary"
        @click="toPage('coupon')"
        >赠送优惠券</view
      >
      <view
        class="round text-center wth-btn padding-lr padding-tb-xs btn-primary"
        @click="toPage('vip')"
        >赠送会员</view
      >
      <view
        class="round text-center wth-btn padding-lr padding-tb-xs btn-primary"
        @click="toPage('subCard')"
        >赠送次卡</view
      >
    </view>
  </sp-card>
</template>

<script>
import SpCard from '@/components/spCard.vue'
import SpTabs from '@/components/spTabs.vue'
import Info from '@/pages/index/components/info.vue'
import { ApiCustomerCardList, ApiCustomerDetail } from '@/api/user'
import Card from '@/pages/index/components/card.vue'
import MeScrollBody from '@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue'
import MescrollMixins from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins'
import { getRect } from '@/utils/lib'
import { ToPath } from '@/utils/router'

export default {
  name: 'Detail',
  components: { Card, Info, SpTabs, SpCard, MeScrollBody },
  mixins: [MescrollMixins],
  data() {
    return {
      tabList: [
        { id: 0, name: '用户信息' },
        { id: 1, name: '用户卡包' }
      ],
      tabIndex: 0,
      userInfo: {},
      cardList: [],
      bodyTop: 0,
      bottom: 0,
      id: null
    }
  },
  onReady() {
    getRect('.tabNav').then((res) => {
      this.bodyTop = res.height + 10
    })
    const systemInfo = uni.getSystemInfoSync()
    const safeAreaBottom = systemInfo.safeAreaInsets.bottom
    getRect('.footer').then((res) => {
      this.bottom = res.height + safeAreaBottom
    })
  },
  onLoad(options) {
    this.getDetail(options.id)
    this.id = options.id
  },
  methods: {
    // 获取用户详情
    async getDetail(id) {
      this.userInfo = await ApiCustomerDetail(id)
    },
    // 获取用户卡包
    async getCardList(id) {
      const res = await ApiCustomerCardList(id)
      this.cardList = res.data
    },
    // 上拉回调
    upCallback(page) {
      let pageNum = page.num // 页码, 默认从1开始
      let pageSize = page.size // 页长, 默认每页10条
      ApiCustomerCardList(this.id, pageNum, pageSize).then((res) => {
        let curPageData = res.data // 接口返回的当前页数据列表 (数组)
        let curPageLen = res.data.length // 接口返回的当前页数据长度
        let totalSize = res.meta.total

        //设置列表数据
        if (page.num === 1) this.cardList = [] //如果是第一页需手动置空列表
        this.cardList = this.cardList.concat(curPageData) //追加新数据

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
    swiperChange(e) {
      this.tabIndex = e
      if (this.tabIndex === 1) {
        this.reloadList()
        this.topClick()
      }
    },
    reload() {
      this.reloadList()
      this.topClick()
    },
    toPage(page) {
      if (page === 'coupon') {
        ToPath('pages/index/components/selectCoupon')
      } else if (page === 'vip') {
        ToPath('pages/index/components/giveVip')
      } else if (page === 'subCard') {
        ToPath('pages/index/components/giveSubCard')
      }
    }
  }
}
</script>

<style lang="scss"></style>
