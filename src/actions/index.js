import Taro from '@tarojs/taro'
import {
  HOME_INFO, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
} from '@constants/home'
import {
  API_HOME, API_HOME_SEARCH_COUNT, API_HOME_RECOMMEND, API_HOME_PIN
} from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 首页数据
 * @param {*} payload
 */
// export const dispatchHome = payload => createAction({
//   url: API_HOME,
//   type: HOME_INFO,
//   payload
// })

export default function getImages (){
  const header = {}
  const method = 'GET'
  const url = API_HOME
  return Taro.request({
    url,
    method,
    header
  }).then((res) => {
    return res.data
  }).catch((err) => {
    const defaultMsg = '请求异常'
    Taro.showToast({
      title: err && err.errorMsg || defaultMsg,
      icon: 'none'
    })
    return Promise.reject({ message: defaultMsg, ...err })
  })
}