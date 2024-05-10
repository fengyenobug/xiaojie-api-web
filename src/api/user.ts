import request from "../utils/request";

// 登录
export function Login(data: any) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 获取图形验证码
export function GetCaptcha() {
  return request({
    url: '/getsvg',
    method: 'get'
  })
}
