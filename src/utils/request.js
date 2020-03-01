import axios from 'axios';
import { Message } from 'element-ui';
//创建axios,赋给变量service
//api 接口地址 http://www.web-jshtml.cn/productApi
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000,//超时
});

//添加请求拦截器
service.interceptors.request.use(function (config) {
    //在发送请求之前做一些事情
    console.log(config);
    return config;
}, function (error) {
    //队请求错误做些什么
    return Promise.reject(error);
});
//添加响应拦截器
service.interceptors.response.use(function (response) {
    //使用响应数据返回响应；
    let data = response.data
    if (data.resCode !== 0) {
        Message.error(data.message);
        return Promise.reject(data);
    }else {
        return response;
    }
}, function (error) {
    //使用响应错误返回
    return Promise.reject(error);
});

export default service;