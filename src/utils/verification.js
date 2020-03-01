export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
        var rs = "";
            for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
            }
        return rs;
    }
    /**验证邮箱 */
export function validateName(value){
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!reg.test(value)){
        return true
    }else{
        false
    }
}
/**密码 */
export function validatePassword(value){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    if(!reg.test(value)){
        return true
    }else{
        false
    }
}
/**验证码 */
export function checkCode(value){
    let reg = /^[A-Za-z0-9]{6}$/;
    if(!reg.test(value)){
        return true
    }else{
        false
    }
}