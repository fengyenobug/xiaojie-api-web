import request from "../utils/request";

// 登录
export function Login(data: any) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
