import service from "@/utils/request"
/**
 * 获取验证码
 */
export function GetSms(data){
   return service.request({
        //发送POST请求
        method: 'post',
        url: '/getSms/',
        data
    })
}
/**
 * 获取用户角色
 */

/**
 * 登录
 */
export function Login(data){
    return service.request({
        method:'post',
        url:'/login/',
        data
    })
}

 /**
  * 注册
  */
 export function Register(data){
    return service.request({
        //发送POST请求
        method: 'post',
        url: '/register/',
        data
    })
 }