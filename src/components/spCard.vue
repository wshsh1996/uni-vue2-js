<script>
import { mapState } from 'vuex'
import SpLoading from '@/components/spLoading/spLoading.vue'
export default {
  name: 'SpCard',
  components: {
    SpLoading
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('config', ['mainColor', 'showLoading'])
  }
}
</script>

<template>
  <view
    :style="{
      '--main-color': mainColor
    }"
  >
    <sp-loading :show-loading="showLoading" :type="3"></sp-loading>
    <slot></slot>
  </view>
</template>

<style lang="scss" scoped></style>
