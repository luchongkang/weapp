import Taro, { Component } from '@tarojs/taro'
// import { connect } from '@tarojs/redux'
import { View, Text, Image, RichText, ScrollView, Modal } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

// @connect(state => state.index, actions)

export default class Index extends Component {

  config = {
    navigationBarTitleText: '师资介绍'
  }
  state = {
    show: 'hide',
    hide: true,
    url: 'https://yanxuan.nosdn.127.net/33fd21d0d6f7d16a5eda72c5ec9d1504.png',
    name: '',
    list: [],
    picDesc: '',
    mask: '',
    scrollTop: 100
  }
  componentWillMount () {
    let url = 'https://www.liguo.ren/login/x'
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

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (item) => {
    // Taro.navigateTo({ url: `/pages/desc/desc?url=${item.url}&name=${item.name}&desc=${item.desc}` })
    Taro.navigateTo({ url: `/pages/desc/desc` })
    this.setState({url: item.url, picDesc: item.desc, name: item.name})
  }
  hideModal = () => {
    this.setState({show: 'hide', mask: ''})
  }
  modalChange2 = () => {
    this.setState({hide: false})
  }
  myCatchTouch = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('stop user scroll it!')
    return
  }
  render () {
    /** return (
      <View className='index'>
        <Text>this is {this.state.list[0].indexRcmdPic.title}</Text>
      </View>
               <View className='home-recommend__title'>
          <Text className='home-recommend__title-txt'></Text>
        </View>
    )
    **/
    return (
       <View className={classNames('home-recommend', this.state.mask)}>
        <View className='home-recommend__list'>
          {this.state.list.map((item, index) => {
            return (
              <View
                key={index}
                className='home-recommend__list-item'
                onClick={this.handleClick.bind(this, item)}
              >
                <Image className='home-recommend__list-item-img' mode="widthFix" src={item.url} />
                  <Text className='desc'>
                    {item.name}
                  </Text>
              </View>
            )
          })}
        </View>
        <View onClick={this.hideModal} className={classNames('modal', this.state.show)}>
          <View className="image">
            <View className="images">
              <Text className='desc1'>
                {this.state.name}
              </Text>
              <Image className="img"  src={this.state.url}/>
            </View>
            <View className="txtDesc">
              <ScrollView scrollY  scrollTop={this.state.scrollTop}>
                {this.state.picDesc}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
