import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import UserInfoBar from "@/components/UserInfoBar";
import {AtList, AtListItem} from "taro-ui"
import {jumpUrl} from "@/utils/router";
import './index.scss'

interface IState {
  state: boolean,
  userInfos: any
}

export default class Index extends Component<IState, any> {
  config: Config = {
    navigationBarTitleText: '我的',
    backgroundColor: '#CCC'
  };

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfos: {}
    }
  }

  onClickAboutPage = () => {
    jumpUrl(`/pages/about/index`)
  };

  onClickLogin = () => {

  };

  render() {
    const {isLogin, userInfos} = this.state;

    return (
      <View className='mine-index'>
        <UserInfoBar
          isLogin={isLogin}
          onClick={this.onClickLogin}
          userInfo={userInfos}
        />

        <View className='about-reader'>
          <AtList>
            <AtListItem onClick={this.onClickAboutPage} title='浏览记录' arrow='right'
                        iconInfo={{size: 24, color: '#F5C534', value: 'clock'}}
            />
            <AtListItem onClick={this.onClickAboutPage} title='我的收藏' arrow='right'
                        iconInfo={{size: 24, color: '#74CAFF', value: 'star'}}
            />
            <AtListItem onClick={this.onClickAboutPage} title='点赞好文' arrow='right'
                        iconInfo={{size: 25, color: '#FF4959', value: 'heart-2'}}
            />
            <AtListItem title='我的xx' arrow='right' extraText='详细信息'
                        iconInfo={{size: 25, color: '#FF4949', value: 'bookmark'}}
            />
          </AtList>
        </View>

        <View className='faq'>
          <AtList>
            <AtListItem onClick={this.onClickAboutPage} title='关于' arrow='right'
                        iconInfo={{size: 24, color: '#74CAFF', value: 'help'}}
            />
            <AtListItem onClick={this.onClickAboutPage} title='版权说明' arrow='right'
                        iconInfo={{size: 24, color: '#74CAFF', value: 'alert-circle'}}
            />
            <AtListItem onClick={this.onClickAboutPage} title='意见与建议' arrow='right'
                        iconInfo={{size: 24, color: '#74CAFF', value: 'message'}}
            />
          </AtList>
        </View>
      </View>
    )
  }
}
