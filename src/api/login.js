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
