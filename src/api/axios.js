import axios from 'axios'
// 设置 baseURL
let baseURL = ''
if (process.env.NODE_ENV !== 'production') {
  // 开发环境
  baseURL = 'https://cnodejs.org'
} else {
  // 生产环境
  baseURL = 'https://cnodejs.org'
}
const service = axios.create({
  baseURL: baseURL
})
// Add a request interceptor
service.interceptors.request.use(
  function (config) {
    if (config.method === 'post') {
      config.headers.post['Content-Type'] = 'application/json'
      config.headers.post['Cache-Control'] = 'no-cache'
    }
    else if (config.method === 'get') {
      config.headers.get['Cache-Control'] = 'no-cache'
      if (config.data) {
        config.params = config.data
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)


export default service
