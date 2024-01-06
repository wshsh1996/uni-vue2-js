<template>
  <sp-card>
    <view class="fixedTab tabNav">
      <!--   搜索栏   -->
      <view>
        <sp-search></sp-search>
      </view>
      <!--   tabs   -->
      <view>
        <sp-tabs
          v-model:value="tabIndex"
          :tab-width="160"
          :tabs="tabList"
          @change="swiperChange"
        ></sp-tabs>
      </view>
    </view>
    <!--  列表加载  -->
    <me-scroll-body
      :top="bodyTop + 'px'"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
      <sp-list :list="list"></sp-list>
    </me-scroll-body>
  </sp-card>
</template>

<script>
import SpCard from '@/components/spCard.vue'
import SpSearch from '@/components/spSearch.vue'
import SpTabs from '@/components/spTabs.vue'
import MeScrollBody from '@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue'
import SpList from '@/components/spList.vue'
import { getRect } from '@/utils/lib'
import MescrollMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins'
import { getOrderList } from '@/api/order'

export default {
  name: 'Index', // 使用mixin
  components: { SpTabs, SpSearch, SpCard, MeScrollBody, SpList },
  mixins: [MescrollMixin],
  data() {
    return {
      tabList: [
        { id: 0, name: '全部' },
        { id: 1, name: '已付定金' },
        { id: 2, name: '购车成功' },
        { id: 3, name: '已退定金' }
      ],
      tabIndex: 0,
      bodyTop: 0,
      page: 1,
      pageSize: 10,
      total: 0,
      list: [],
      is_member: 0
    }
  },

  onReady() {
    getRect('.tabNav').then((res) => {
      this.bodyTop = res.height + 10
    })
  },
  onLoad() {},
  methods: {
    // 回到顶部
    topClick() {
      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration) // 执行回到顶部
    },

    // 轮播菜单
    swiperChange(e) {
      this.tabIndex = e
      this.reloadList()
      this.topClick()
    },

    /*上拉加载的回调*/
    upCallback(page) {
      this.page = page.num // 页码
      this.pageSize = page.size // 页长
      let status = this.tabIndex === 0 ? '' : this.tabIndex === 1 ? 2 : this.tabIndex === 2 ? 3 : 4

      getOrderList(this.page, this.pageSize, status, '').then((res) => {
        let curPageData = res.data // 接口返回的数据列表（数组）
        let curPageLen = curPageData.length // 当前页的数据长度
        let totalPage = res.meta.last_page // 总页数
        if (page.num === 1) this.list = [] // 如果是第一页需手动置空列表
        this.list = this.list.concat(curPageData) // 追加新数据

        // 请求成功，隐藏加载状态
        this.mescroll.endByPage(curPageLen, totalPage)
      })
    },
    /*若希望重新加载列表,只需调用此方法即可(内部会自动page.num=1,再主动触发up.callback)*/
    reloadList() {
      this.mescroll.resetUpScroll()
    }
  }
}
</script>

<style lang="scss"></style>
