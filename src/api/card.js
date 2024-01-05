import http from '@/utils/request'

/**
 * 获取次卡列表
 * */
export function ApiGetCardList(page = 1, page_size = 10) {
  return http.get(`/card?page=${page}&page_size=${page_size}`)
}

/**
 * 赠送次卡
 * @param user_id 用户id
 * @param card_id 卡id
 * */
export function ApiGiveCard(user_id, card_id) {
  return http.post(`/give_card`, {
    user_id,
    card_id
  })
}
