import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface Data {
  [key: string]: unknown
}

axios.defaults.baseURL = import.meta.env.VITE_APP_BASEURL + ''
axios.defaults.headers.head['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.head['hello'] = 'test-hello-token'

// 请求超时的等待时间,覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 5 秒
axios.defaults.timeout = 5000

// 全局请求拦截器
axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // 在发送请求之前做些什么 可更改请求的配置，比如在headers添加通用的token
    if(config.headers){
      config.headers['Authorization'] = 'ok-admin-vue' //设置token
    }
    return config
  },
  function (error: any) {
    // 对请求错误做些什么 都返回reslove去处理这样做的好处就是不需要再在每个请求里边写cath错误处理的方法了
    // 这里返回的内容可一个自定义通用的处理方式
    return Promise.resolve({
      code: 500,
      message: '访问出现错误',
      error
    })
  }
)

// 全局响应拦截器
axios.interceptors.response.use(
  function (response: AxiosResponse) {
    // 对响应数据做点什么 可指定返回的内容
    let data: any = {}
    if (response.data) {
      data = response.data
    } else {
      data = { code: 404, message: '无任何内容' }
    }
    return data
  },
  function (error: any) {
    // 对响应错误做点什么 都返回reslove去处理这样做的好处就是不需要再在每个请求里边写cath错误处理的方法了
    // 这里返回的内容可一个自定义通用的处理方式
    return Promise.resolve({
      code: 500,
      message: '服务器发生错误',
      error
    })
  }
)

const isData: Array<AxiosRequestConfig['method']> = ['POST', 'PUT', 'PATCH']
const http = {
  _requestHandler(
    method: AxiosRequestConfig['method'] = 'GET',
    url = '',
    data?: Data,
    config?: Data
  ) {
    data = data || {}
    config = config || {}
    method = method.toLocaleUpperCase() as AxiosRequestConfig['method']
    if (isData.includes(method)) {
      config.data = data
    } else {
      config.params = data
    }
    return axios.request({
      ...config,
      method: method,
      url
    })
  },
  get(url = '', data?: Data, config?: Data) {
    return http._requestHandler('GET', url, data, config)
  },
  post(url = '', data?: Data, config?: Data) {
    return http._requestHandler('POST', url, data, config)
  },
  delete(url = '', data?: Data, config?: Data) {
    return http._requestHandler('DELETE', url, data, config)
  },
  put(url = '', data?: Data, config?: Data) {
    return http._requestHandler('PUT', url, data, config)
  },
  patch(url = '', data?: Data, config?: Data) {
    return http._requestHandler('PATCH', url, data, config)
  },
  request: axios.request
}

export default http
