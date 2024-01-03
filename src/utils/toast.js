/**
 * 吐司让他具有回调方法
 * @param {String} title  提示标题
 * @param {Function} callback 方法
 * @param {Number} duration 提示时间毫秒
 */
export const Toast = (title, callback = () => {}, duration = 2000) => {
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration,
    success() {
      if (callback) {
        let out = setTimeout(() => {
          clearTimeout(out)
          callback()
        }, duration)
      }
    }
  })
}
