import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import './index.scss'

interface IProps {
  isLogin?: boolean,
  userInfo: any,
  onHandleLogin?: () => void,
  onSignOut?: () => void
}

export default class Index extends Component<IProps> {


  render() {
    const {isLogin, onHandleLogin, userInfo, onSignOut} = this.props;
    return (
      <View className='user-info'>
        {/*用户头像*/}
        {
          isLogin ?
            <View>
              <View className='at-row at-row__justify--center'>
                <View className='user-pic' onClick={onSignOut}>
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
                  {
                    process.env.TARO_ENV === 'h5' ?
                      <View className='username' onClick={onHandleLogin}>点击登陆</View> :
                      <AtButton className={'username'} openType='getUserInfo'
                                onGetUserInfo={onHandleLogin}>点击登陆</AtButton>
                  }
                </View>
              </View>
            </View>
        }
      </View>
    )
  }
}
