import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

import WeappEditor from "./component"
import "./index.scss"

export default class Index extends Component {


  render() {
    return (
      <View>
        <WeappEditor/>
      </View>
    )
  }
}
