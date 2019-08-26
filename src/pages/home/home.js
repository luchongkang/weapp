import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './home.scss'

export default class Home extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state = {
    url: '',
    text: '',
    btn: ''
  }
  componentWillMount () {
    let url = 'https://www.liguo.ren/login/d'
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
  handleClick = (id) => {
    switch (id){
      case 1:
        Taro.navigateTo({ url: `/pages/index/index` })
        break
      case 2:
        Taro.navigateTo({ url: `/pages/env/env` })
        break
      case 3:
        Taro.navigateTo({ url: `/pages/project/project` })
        break
      case 4:
        Taro.navigateTo({ url: `/pages/activity/activity` })
        break
    }
    
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home'>
        <View className='image'>
          <Image className='img' mode='aspectFit' src={ this.state.url }/>
        </View>
        <View className="desc">
          <Text className="dtext">{ this.state.text }</Text>
        </View>
        <View className="nav">
          <View className='at-row at-row__justify--around'>
            <View className='at-col at-col-5 btn' onClick={this.handleClick.bind(this, 1)}>师资介绍</View>
            <View className='at-col at-col-5 btn' onClick={this.handleClick.bind(this, 2)}>环境介绍</View>
          </View>
          <View className='at-row at-row__justify--around'>
            <View className='at-col at-col-5 btn' onClick={this.handleClick.bind(this, 3)}>{ this.state.btn }</View>
            <View className='at-col at-col-5 btn' onClick={this.handleClick.bind(this, 4)}>活动介绍</View>
          </View>
        </View>
           
      </View>
    )
  }
}