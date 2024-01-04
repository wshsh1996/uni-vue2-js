import http from '@/utils/request'

/**
 * 获取优惠券列表
 * @param page   页码
 * @param page_size  页大小
 * */
export const getCouponList = (page = 1, page_size = 10) => {
  return http.get(`/coupon_list?page=${page}&page_size=${page_size}`)
}
