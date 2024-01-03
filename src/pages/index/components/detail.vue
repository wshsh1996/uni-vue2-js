<template>
  <sp-card>
    <!--   tabs   -->
    <view>
      <sp-tabs v-model:value="tabIndex" :tabs="tabList" @change="swiperChange"></sp-tabs>
    </view>
    <!--  信息卡片  -->
    <view>
      <info v-if="userInfo && tabIndex === 0" :info="userInfo"></info>
    </view>
  </sp-card>
</template>

<script>
import SpCard from '@/components/spCard.vue'
import SpTabs from '@/components/spTabs.vue'
import Info from '@/pages/index/components/info.vue'
import { ApiCustomerDetail } from '@/api/user'

export default {
  name: 'Detail',
  components: { Info, SpTabs, SpCard },
  data() {
    return {
      tabList: [
        { id: 0, name: '用户信息' },
        { id: 1, name: '用户卡包' }
      ],
      tabIndex: 0,
      userInfo: {}
    }
  },
  onLoad(options) {
    this.getDetail(options.id)
  },
  methods: {
    async getDetail(id) {
      this.userInfo = await ApiCustomerDetail(id)
    },
    swiperChange(e) {
      this.tabIndex = e
    }
  }
}
</script>

<style lang="scss"></style>
