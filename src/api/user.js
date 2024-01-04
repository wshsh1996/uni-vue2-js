import http from '@/utils/request'

/**
 * 获取登录信息
 * */
export const ApiLoginInfo = () => {
  return http.get('/employee/userinfo')
}

/**
 * 客户列表
 * @params is_member 默认空全部用户 / 0 非会员 / 1 会员
 * @params keyword 昵称 / 手机号 查询 选填
 * @params page 页码
 * @params page_size 页数
 */
export const ApiCustomerList = (page, page_size, is_member, keyword) => {
  return http.get(
    `/user_list?page=${page}&page_size=${page_size}&is_member=${is_member}&keyword=${keyword}`
  )
}

/**
 * 客户详情
 * @params id 用户id
 */
export const ApiCustomerDetail = (id) => {
  return http.get(`/customer/${id}`)
}

/**
 * 客户卡包
 * @params user_id 用户id
 * @params page 页码
 * @params page_size 页数
 * */
export const ApiCustomerCardList = (user_id, page = 1, page_size = 10) => {
  return http.get(`/customer_card?user_id=${user_id}&page=${page}&page_size=${page_size}`)
}

/**
 * 划卡
 * @params id 用户id
 * */
export const ApiCard = (id) => {
  return http.put(`/customer_card/${id}`)
}
