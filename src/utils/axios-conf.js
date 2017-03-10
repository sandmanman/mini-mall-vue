import axios from 'axios'

axios.defaults.timeout = 1500

// 状态码200判断
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})
export default axios
