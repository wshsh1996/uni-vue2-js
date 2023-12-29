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
    ...mapState('config', ['mainColor'])
  }
}
</script>

<template>
  <view
    :style="{
      '--main-color': mainColor
    }"
  >
    <sp-loading :type="3"></sp-loading>
    <slot></slot>
  </view>
</template>

<style scoped></style>
