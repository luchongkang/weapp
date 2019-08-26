import Taro, { Component, Config } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import './env.scss'

export default class Home extends Component {
  config: Config = {
    navigationBarTitleText: '环境介绍'
  }
  state = {
    list: []
  }
  componentWillMount () {
    let url = 'https://www.liguo.ren/login/env'
    Taro.request({ url }).then((res) => {
      this.setState(res.data)
    }).catch((err) => {
      const defaultMsg = '请求异常'
      Taro.showToast({
        title: err && err.errorMsg || defaultMsg,
        icon: 'none'
      })
      return Promise.reject({ message: defaultMsg, ...err })
    })
  }
  handleClick = (url) => {
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    })
  }

  render () {
    return (
      <View className='home'>
      {this.state.list.map((item,index) => {
        return (<View key={index} className="image">
          <View className="im" onClick={this.handleClick.bind(this, item.url)}>
            <Image className="img" mode="widthFix" src={item.url}/>
          </View>
          <rich-text className="desc" nodes={item.desc} space="emsp"></rich-text>
        </View>)
      })}
      </View>
    )
  }
}