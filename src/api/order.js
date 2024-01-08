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

/**
 * 退订金/收尾款
 * @param id 订单id
 * @param data 内容  status 3收尾款 4退订金  final_payment 最终支付  voucher：【】凭证
 * */
export function ApiReOrPrOrder(id, data) {
  return http.put(`/customer_order/${id}`, data)
}
