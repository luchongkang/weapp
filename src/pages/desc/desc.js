import Taro, { Component, Config } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import './desc.scss'

export default class Home extends Component {
  config: Config = {
    navigationBarTitleText: '师资详情'
  }
  state = {
    desc: '',
    name: '',
    url: ''
  }
  componentWillMount () {
    const pages = getCurrentPages()
    const prevPage = pages[pages.length - 2];
    // console.log()
    const item = prevPage.data
    this.setState({url: item.url, desc: item.picDesc, name: item.name})
  }

  render () {
    return (
      <View className='home'>
        <View className="image">
            <View className="images">
              <Text className='desc1'>
                {this.state.name}
              </Text>
              <Image className="img" mode="widthFix"  src={this.state.url}/>
            </View>
            <View className="desc">
              <rich-text  nodes={this.state.desc} space="emsp"></rich-text>
            </View>
          </View>
      </View>
    )
  }
}