import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import "./index.scss"
export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '关于我'
  };

  render() {
    return (
      <View style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop: '100px'
      }}
      >
        <Text className={'about'}>如有侵权，请联系wx: hzfvlp，修正</Text>
      </View>
    )
  }
}
