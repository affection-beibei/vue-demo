<template>
  <div id="login">
    <div class="login-warp">
      <ul class="meun-tab">
        <li
          @click="toggleMneu(item)"
          :class="{'current':item.current}"
          v-for="item in menuTab "
          :key="item.id"
        >{{item.text}}</li>
      </ul>
      <!-- Element 表单  -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm" class="login-form" size="medium">
        <el-form-item prop="email" class="item-from">
          <label for="email">邮箱</label>
          <el-input id="email" type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="pass" class="item-from">
          <label for="pass">密码</label>
          <el-input id="pass" type="password" v-model="ruleForm.pass" autocomplete="off" minlength="6" maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="passtwo" class="item-from" v-show="model === 'register'">
          <label>重复密码</label>
          <el-input
            type="text"
            v-model="ruleForm.passtwo"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="verification" class="item-from">
          <label for="code">验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input
                id="code"
                type="text"
                v-model="ruleForm.verification"
                minlength="6"
                maxlength="6"
              ></el-input>
            </el-col>
            <el-col :span="9">
              <el-button
                :disabled="codeBtn.status"
                type="success"
                @click="getSms()"
              >{{codeBtn.text}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" :disabled="undisabled"  @click="submitForm('loginForm')" class="ele-btn login-btn" >{{model ==='login' ? "登录":"注册"}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import sha1 from 'js-sha1';
import { GetSms,Register,Login } from "@/api/login";
import service from "@/utils/request";
import axios from "axios";
import { stripscript,validateName,validatePassword,checkCode } from "@/utils/verification";
import { reactive, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  name: "login",
  setup(props, { refs, root }) {
    // 邮箱验证 正则表达式验证
    let validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入正确的邮箱"));
      } else if (validateName(value)) {
        callback(new Error("邮箱格式错误，请重新输入"));
      } else {
        callback();
      }
    };
    // 登录密码验证
    let validatePass = (rule, value, callback) => {
        ruleForm.pass = stripscript(value);
        value = ruleForm.pass;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePassword(value)) {
        callback(new Error("密码错误请重新输入!"));
      } else {
        callback();
      }
    };
    //验证重复密码

    let validatePasstwo = (rule, value, callback) => {
      if (model.value === "login"){ callback();}
       ruleForm.passtwo = stripscript(value);
        value = ruleForm.passtwo;
       if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value != ruleForm.pass) {
        callback(new Error("密码错误请重新输入!"));
      } else {
        callback();
      }
    };
    // 验证码-验证
    let checkVerification = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("验证码不能为空"));
      } else if (checkCode(value)) {
        callback(new Error("验证码格式错误"));
      }else {
        callback();
      }
    };
    /**
     * 数据申明
     * set up 里面放置data数据，生命周期，自定义函数
     */
    const menuTab = reactive([
      { text: "登录", current: true, type: "login" },
      { text: "注册", current: false, type: "register" }
    ]);
    // 模块值
    const model = ref("login");
    //设置登录按钮不输入验证码时为禁用状态
    const undisabled = ref(true);
    //验证码状态
    const codeBtn = reactive({ 
      status: false,
      text: "获取验证码"
    });
      //倒计时
    const timer = ref(null);
      //表单绑定数据
    const ruleForm = reactive({
      email: "",
      pass: "",
      passtwo: "",
      verification: ""
    });
    //表单验证
    const rules = reactive({
      email: [{ validator: validateEmail, trigger: "blur" }],
      pass: [{ validator: validatePass, trigger: "blur" }],
      passtwo: [{ validator: validatePasstwo, trigger: "blur" }],
      verification: [{ validator: checkVerification, trigger: "blur" }]
    });
    /*
     * 函数申明
     */
    const toggleMneu = data => {
      menuTab.forEach(elem => {
        elem.current = false;
      });
      //高光
      data.current = true;
      // 修改模块值
      model.value = data.type;
      refs.loginForm.resetFields();
        clearCountDown()

    };
    /**
     * 获取验证码
     */
    const getSms = () => {
      if (ruleForm.email == "") {
        root.$message.error("邮箱不能为空！！");
        return false;
      }
      let requestData = {
        username: ruleForm.email,
        module: model.value
      };
      // 修改获取验证码的状态
      codeBtn.status = true;
      codeBtn.text = "正在发送验证码";

      /**
       * 模拟后台发送延时
       */
      setTimeout(() => {
        GetSms(requestData)
          .then(response => {
            let data = response.data;
            root.$message({
              message: data.message,
              type: "success"
            });
            //启用登录或注册按钮
            undisabled.value = false;
            countDown(10)
          })
          .catch(error => {
            console.log(error);
          });
      }, 3000);
    };
    /**
     * 提交表单
     */
    const submitForm = (formName =>{
      // console.log(model.value);
        refs[formName].validate((valid) => {
          if (valid) {
          model.value === 'login' ? login():register()
          // console.log(valid);
        } else {
            console.log('error submit!!');
            return false;
          }
        })
     });
     /**
      * 登录
      */
     const login=(()=>{
       let requestData ={
              username:ruleForm.email,
              password:sha1(ruleForm.pass),
              code:ruleForm.verification,
            }
            root.$store.dispatch('login',requestData).then(response =>{
              root.$router.push({
              name: "Console"
              })
              
            }).catch(error =>{})
     })
     /**
      * 注册  
      */
     const register=(()=>{
            let requestData ={
              username:ruleForm.email,
              password:sha1(ruleForm.pass),
              code:ruleForm.verification,
              module:'register'
            }
            Register(requestData).then(response =>{
               let data = response.data
               root.$message({
                 message:data.message,
                 type:'success'
               })   //模拟注册成功
                    toggleMneu(menuTab[0])
                    clearCountDown()
        }).catch(error =>{
                  // 失败后的代码
        })
     })
    /**
     * 倒计时ruleForm
     */ 
    const countDown =((number) => {
      let time  = number 
      timer.value = setInterval(() => {
               time--
           if(time ===0){
             clearInterval(timer.value)
              codeBtn.status = false;
              codeBtn.text = "再次获取验证码";
           }else{
             codeBtn.text = `(${time})秒后重新发送验证码`
           }
      },1000);
    });
    // 清除计时器
    const clearCountDown =(()=>{
      //恢复提交按钮的状态
      codeBtn.status =false
      codeBtn.text ="获取验证码"
      //清除定时器
      clearInterval(timer.value)
    })

    /**
     * 生命周期
     * 挂在完成后
     */
    onMounted(() => {});
    return {
      menuTab,
      model,
      codeBtn,
      undisabled,
      ruleForm,
      rules,
      timer,
      toggleMneu,
      submitForm,
      getSms
    };
  }
};
</script>
<style lang="scss" scoped>
#login {
  background-color: #344a5f;
  height: 100vh;
}
.login-warp {
  width: 330px;
  margin: auto;
}
.meun-tab {
  text-align: center;
  li {
    width: 88px;
    display: inline-block;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-right: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 3px;
  }
  .item-from {
    margin-bottom: 13px;
  }
  .ele-btn {
    display: block;
    width: 100%;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>