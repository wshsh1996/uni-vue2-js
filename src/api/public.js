import http from '@/utils/request'

/**
 * 获取初始配置
 * */
export const ApiInitConfig = () => {
  return http.get('/config')
}
