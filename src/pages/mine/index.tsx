import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import UserInfoBar from "@/components/UserInfoBar";
import {AtList, AtMessage, AtListItem} from "taro-ui"
import {jumpUrl} from "@/utils/router";
import {userInfo} from "@/utils/storage";
import {weChatLogin} from "./service"
import './index.scss'

interface IState {
  isLogin: boolean,
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
      isLogin: JSON.stringify(userInfo()) !== '{}',
      userInfos: userInfo() || {}
    }
  }

  // 微信登录
  onClickLogin = (options) => {
    if (process.env.TARO_ENV === 'h5') {
      Taro.atMessage({
        'message': 'h5暂时没有适配微信登录',
        // 'message': 'h5暂时不支持 API login',
        'type': 'error',
      });
      return false
    }

    Taro.login({
      success: async (res) => {
        if (res.code) {
          //发起网络请求
          const params = {
            weChatInfo: options.target.userInfo
          };
          const {data, token, code, msg} = await weChatLogin(res.code, params);

          if (code === 200) {
            Taro.setStorage({key: "userInfo", data});
            token && Taro.setStorage({key: "token", data: token});
            this.setState({
              userInfos: data,
              isLogin: true
            }, () => {
              Taro.atMessage({
                'message': '登录成功',
                'type': 'success',
              });
            });
          } else {
            Taro.atMessage({
              'message': msg,
              'type': 'error',
            });
          }
        } else {
          Taro.atMessage({
            'message': res.errMsg,
            'type': 'error',
          });
        }
      }
    })
  };
  // 退出登录
  signOut = () => {
    Taro.showActionSheet({
      itemList: ["退出登录"]
    }).then(res => {
      if (res.tapIndex === 0) {
        Taro.clearStorage({
          success: () => {
            this.setState({
              userInfos: {},
              isLogin: false
            })
          }
        });
      }
    })
  };
  // 添加文章
  onCreateArticle = () => {
    jumpUrl(`/pages/create-article/index`)
  };
  // 跳转关于我
  onClickAboutPage = () => {
    jumpUrl(`/pages/about/index`)
  };


  render() {
    const {isLogin, userInfos} = this.state;
    return (
      <View className='mine-index'>
        <AtMessage/>
        <UserInfoBar
          isLogin={isLogin}
          // @ts-ignore
          onHandleLogin={this.onClickLogin}
          onSignOut={this.signOut}
          userInfo={userInfos.weChatInfo}
        />
        <View className='about-reader'>
          <AtList>
            {
              process.env.TARO_ENV === 'weapp' &&
              <AtListItem onClick={this.onCreateArticle} title='添加文章' arrow='right'
                          iconInfo={{size: 24, color: '#409EFF', value: 'add'}}
              />
            }

            {/*<AtListItem onClick={this.onClickAboutPage} title='浏览记录' arrow='right'*/}
            {/*            iconInfo={{size: 24, color: '#F5C534', value: 'clock'}}*/}
            {/*/>*/}
            {/*<AtListItem onClick={this.onClickAboutPage} title='我的收藏' arrow='right'*/}
            {/*            iconInfo={{size: 24, color: '#ff0b7f', value: 'star'}}*/}
            {/*/>*/}
            {/*<AtListItem onClick={this.onClickAboutPage} title='点赞好文' arrow='right'*/}
            {/*            iconInfo={{size: 25, color: '#FF4959', value: 'heart-2'}}*/}
            {/*/>*/}
            {/*<AtListItem title='我的xx' arrow='right' extraText='详细信息'*/}
            {/*            iconInfo={{size: 25, color: '#FF4949', value: 'bookmark'}}*/}
            {/*/>*/}
          </AtList>
        </View>

        <View className='faq'>
          <AtList>
            <AtListItem onClick={this.onClickAboutPage} title='关于' arrow='right'
                        iconInfo={{size: 24, color: '#909399', value: 'help'}}
            />
            {/*<AtListItem onClick={this.onClickAboutPage} title='版权说明' arrow='right'*/}
            {/*            iconInfo={{size: 24, color: '#909399', value: 'alert-circle'}}*/}
            {/*/>*/}
            {/*<AtListItem onClick={this.onClickAboutPage} title='意见与建议' arrow='right'*/}
            {/*            iconInfo={{size: 24, color: '#909399', value: 'message'}}*/}
            {/*/>*/}
          </AtList>
        </View>
      </View>
    )
  }
}
