import Taro from '@tarojs/taro'

const CODE_SUCCESS = '200'
const CODE_AUTH_EXPIRED = '600'

export default function fetch(options) {
  const { url, payload, method = 'GET', showToast = true} = options
  const header = {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }
  return Taro.request({
    url,
    method,
    data: payload,
    header
  }).then((res) => {
    const { code, data } = res.data
    return data
  }).catch((err) => {
    const defaultMsg = '请求异常'
    if (showToast) {
      Taro.showToast({
        title: err && err.errorMsg || defaultMsg,
        icon: 'none'
      })
    }
    return Promise.reject({ message: defaultMsg, ...err })
  })
}

