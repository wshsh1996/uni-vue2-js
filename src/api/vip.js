import http from '@/utils/request'

/**
 * 获取会员列表
 * */
export function getVipList() {
  return http.get('/premium_plan')
}
