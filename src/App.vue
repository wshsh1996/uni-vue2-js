<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import '@/colorUi/main.css';
@import '@/colorUi/icon.css';
@import '@/uni.scss';
@import '@/public.scss';

/*每个页面公共css */
page {
  min-height: 100vh;
  font-size: 28rpx;
  background-color: $main-bg-color;
  color: $main-font-color;
}
</style>
