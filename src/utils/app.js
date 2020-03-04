import cookie from "cookie_js"
const admintoKen = "admin_token";

export function getToken(){
    return cookie.get(admintoKen)
}

export function setToken(token){
    return cookie.set(admintoKen,token)
}
export function removeToken(token){
    return cookie.remove(admintoKen)
}
export function setUserName(value){
    return  cookie.set(admintoKen,token)
}