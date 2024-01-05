import http from '@/utils/request'

/**
 * 获取优惠券列表
 * @param page   页码
 * @param page_size  页大小
 * */
export const getCouponList = (page = 1, page_size = 10) => {
  return http.get(`/coupon_list?page=${page}&page_size=${page_size}`)
}

/**
 * 赠送优惠券
 * @param coupon_id  优惠券id
 * @param user_id    用户id
 * */
export const sendCoupon = (coupon_id, user_id) => {
  return http.post('/give_coupon', {
    coupon_id,
    user_id
  })
}
