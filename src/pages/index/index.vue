<template>
  <sp-card>
    <view class="fixedTab">
      <!--   搜索栏   -->
      <view>
        <sp-search></sp-search>
      </view>
      <!--   tabs   -->
      <view></view>
      <!--      <view :style="{ backgroundColor: `var(&#45;&#45;main-color)` }" @click="changeLoading">123</view>-->
    </view>
  </sp-card>
</template>

<script>
import { mapMutations } from 'vuex'
import SpCard from '@/components/spCard.vue'
import SpSearch from '@/components/spSearch.vue'
export default {
  name: 'Index',
  components: { SpSearch, SpCard },
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {
    ...mapMutations('config', ['setShowLoading']),
    changeLoading() {
      this.setShowLoading(true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
