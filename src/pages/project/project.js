import Taro, { Component, Config } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import './project.scss'

export default class Home extends Component {
  config: Config = {
    navigationBarTitleText: '项目培训'
  }
  state = {
    list: []
  }
  componentWillMount () {
    let url = 'https://www.liguo.ren/login/pro'
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

  render () {
    return (
      <View className='home'>
      {this.state.list.map((item) => {
        return (<View key={item.id} className="image">
          <View className="im">
            <Image className="img" mode="widthFix" src={item.url}/>
          </View>
          <Text className="title">{item.title}</Text>
          <rich-text nodes={item.desc} space="emsp"></rich-text>
        </View>)
      })}
      </View>
    )
  }
}