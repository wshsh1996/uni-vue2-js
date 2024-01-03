import store from '@/store'
/**
 * 获取布局信息
 * @param text  class  id 必须全局唯一的名字
 * @returns {Promise<unknown>}
 * @constructor
 * */
export const getRect = (text) => {
  return new Promise((resolve) => {
    const query = uni.createSelectorQuery()
    query
      .select(text)
      .boundingClientRect((data) => {
        resolve({ ...data })
      })
      .exec()
  })
}

/**
 * 处理图片路径
 * @param images  // 图片路径
 * @param height // 图片高度
 * @param width // 图片宽度
 * */
export const ImagePath = (images, height = 800, width = 800) => {
  let FileUrl = store.state.config.config.oss_path
  let path
  if (Array.isArray(images) && images.length > 0) {
    path = images[0]
  } else {
    path = images
  }
  if (!path) {
    return path
  }
  if (path.indexOf('static/image') !== -1) {
    return path
  }
  if (/^http|base64/.test(path)) {
    return path
  }
  let newPath
  if (path[0] === '/') {
    newPath = FileUrl + path
  } else {
    newPath = FileUrl + path
  }
  if (newPath) {
    newPath = newPath.replaceAll('${h}', height)
    newPath = newPath.replaceAll('${w}', width)
  }
  return newPath
}

/**
 * 手机号隐藏中间4位
 * @param phone
 * */
export const phoneHide = (phone) => {
  if (!phone) {
    return ''
  }
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}
