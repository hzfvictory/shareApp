import Taro from '@tarojs/taro'
import {View, RichText} from '@tarojs/components'

import "./index.h5.scss"

const Index = ({article}) => {

  return (
    <View className={'rich-text'}>
      <RichText nodes={article} space='ensp'/>
    </View>
  )
};

export default Index
