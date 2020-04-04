import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import * as Conf from './config'
import {AtGrid} from "taro-ui"
import {jumpUrl} from "@/utils/router"

interface IState {
  dataList: any[]
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '专题'
  };

  state = {
    dataList: [
      {
        id: Conf.TOPIC_ONE.index,
        url: Conf.TOPIC_ONE.url,
        image: Conf.TOPIC_ONE.image,
        value: Conf.TOPIC_ONE.name
      },
      {
        id: Conf.TOPIC_TWO.index,
        url: Conf.TOPIC_TWO.url,
        image: Conf.TOPIC_TWO.image,
        value: Conf.TOPIC_TWO.name
      },
      {
        id: Conf.TOPIC_THREE.index,
        url: Conf.TOPIC_THREE.url,
        image: Conf.TOPIC_THREE.image,
        value: Conf.TOPIC_THREE.name
      },
      {
        id: Conf.TOPIC_FOUR.index,
        url: Conf.TOPIC_FOUR.url,
        image: Conf.TOPIC_FOUR.image,
        value: Conf.TOPIC_FOUR.name
      },
      {
        id: Conf.TOPIC_FIVE.index,
        url: Conf.TOPIC_FIVE.url,
        image: Conf.TOPIC_FIVE.image,
        value: Conf.TOPIC_FIVE.name
      },
      {
        id: Conf.TOPIC_SIX.index,
        url: Conf.TOPIC_SIX.url,
        image: Conf.TOPIC_SIX.image,
        value: Conf.TOPIC_SIX.name
      },
    ]
  };

  handlerClick = ({value}, id) => {
    jumpUrl(`/pages/detail/index?id=${id}&value=${value}&title=怎么这么懒呢还不添加上`)
  };

  render() {
    return (
      <View className='topics-content'>
        <AtGrid onClick={this.handlerClick} data={this.state.dataList}/>
      </View>
    )
  }
}
