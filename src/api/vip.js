import http from '@/utils/request'

/**
 * 获取会员列表
 * */
export function getVipList() {
  return http.get('/premium_plan')
}

/**
 * 赠送会员
 * @param {Object} params
 * */
export function ApiSendVip(params) {
  return http.post('/give_member', params)
}
