import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_URL;
import {message} from 'ant-design-vue'

const service = axios.create({
  baseURL: baseURL,
  timeout: 60000,
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('request---------------------', config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('response---------------------', response)
  let data = response.data
  if (data.resCode !== '0') {
    message.error(data.message)
    return Promise.reject(response.data)
  } else {
    return Promise.resolve(response.data);
  }

}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service

