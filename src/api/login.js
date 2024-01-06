import http from '@/utils/request'

/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 */
export const ApiLogin = (username, password) => {
  return http.post('/employee/login', {
    username,
    password
  })
}

/**
 * 获取登录信息
 * */
export const ApiGetLoginInfo = () => {
  return http.get('/employee/userinfo')
}

/**
 * 退出登录
 * */
export const ApiLogout = () => {
  return http.post('/employee/logout')
}
