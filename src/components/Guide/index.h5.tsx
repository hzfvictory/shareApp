import Taro from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'

import "./index.scss"

const Index = () => {
  return (
    <View>
      <View className={'guide-page'}>
        <Image className='qcore' src='https://ae01.alicdn.com/kf/Hd9ba1f342e6d47bc81890f6ddf1b5c97P.jpg'/>
        <Text className={'guide-title'}>微信扫一扫</Text>
      </View>
      <View className={'header-null'}/>
    </View>
  )
};

export default Index
