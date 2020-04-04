import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import './index.scss'

interface IProps {
  isLogin?: boolean,
  userInfo: any,
  onClick?: () => void
}

export default class Index extends Component<IProps> {
  render() {
    const {isLogin, onClick, userInfo} = this.props;

    return (
      <View className='user-info'>
        {/*用户头像*/}
        {
          isLogin ?
            <View>
              <View className='at-row at-row__justify--center'>
                <View className='user-pic'>
                  <Image className='user-avi-pic' src={userInfo.avatarUrl}/>
                </View>
              </View>
              {/*用户名称*/}
              <View className='at-row at-row__justify--center'>
                <View className='getUser'>
                  <View className='username'>{userInfo.nickName}</View>
                </View>
              </View>
            </View> :
            <View>
              {/*如果未登陆则使用默认的图片*/}
              <View className='at-row at-row__justify--center'>
                <View className='user-pic'>
                  <Image className='user-avi-pic'
                         src='https://ae01.alicdn.com/kf/H9ae3136bf5e440239fa2c611632fbd09H.jpg'
                  />
                </View>
              </View>
              {/*用户名称*/}
              <View className='at-row at-row__justify--center'>
                <View className='getUser'>
                  <AtButton openType='getUserInfo' onGetUserInfo={onClick}>游客</AtButton>
                </View>
                {/*<View className='username'>点击登陆</View>*/}
              </View>
            </View>
        }
      </View>
    )
  }
}
