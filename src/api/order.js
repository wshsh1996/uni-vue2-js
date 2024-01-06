import http from '@/utils/request'

/**
 * 获取订单列表
 * @param page 页码
 * @param page_size 每页显示数量
 * @param status 订单状态 下单1 已付定金2 购车成功3 已退定金4 已取消9
 * @param keyword 关键字搜索
 * */
export function getOrderList(page = 1, page_size = 10, status, keyword) {
  return http.get('/customer_order', {
    params: {
      page,
      page_size,
      status,
      keyword
    }
  })
}
