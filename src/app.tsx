import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux';
import store from './utils/dva';

import './app.scss'

import './assets/css/font_1381084_yx5rdqvdr7g/iconfont.css';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidMount(): void {
    //判断目前微信版本是否支持自动更新
    if (Taro.canIUse("getUpdateManager")) {
      const update = Taro.getUpdateManager();
      update.onCheckForUpdate((res) => {
        //检测是否有新版本
        if (res.hasUpdate) {
          update.onUpdateReady(() => {
            // update.applyUpdate();
            //如果有新版本，给用户提示确认更新即可
            Taro.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              // eslint-disable-next-line no-shadow
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启，如果想静默更新，直接在检测有新版本的时候调用此方法即可
                  update.applyUpdate();
                }
              }
            })
          });
          //如果自动更新失败，给用户提示手动更新（有些小程序涉及到多ID使用，不更新会出现莫名的缓存bug，大部分小程序不用执行这一步）
          update.onUpdateFailed(() => {
            Taro.showModal({
              title: '已经有新版本了',
              content: '新版本已经上线，请您删除当前小程序，重新打开。'
            })
          })
        }
      })
    } else {
      Taro.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }

  componentDidCatchError() {
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/mine/index',
      'pages/topics/index',
      'pages/about/index',
      'pages/detail/index',
      'pages/article-list/index',
      'pages/search-list/index',
      'pages/create-article/index',
    ],
    // subPackages: [
    //   {
    //     "root": "develop",
    //     "pages": [
    //       "index",
    //     ],
    //   },
    // ], // 分包
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '写实吧',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'black',
      // custom:true, //自定义 tabBar
      list: [
        {
          text: '首页',
          pagePath: 'pages/home/index',
          iconPath: 'assets/tab/home.png',
          selectedIconPath: 'assets/tab/home-active.png',
        },
        {
          text: '专题',
          pagePath: 'pages/topics/index',
          iconPath: 'assets/tab/cart.png',
          selectedIconPath: 'assets/tab/cart-active.png',
        },
        {
          text: '我的',
          pagePath: 'pages/mine/index',
          iconPath: 'assets/tab/user.png',
          selectedIconPath: 'assets/tab/user-active.png',
        }
      ]
    },
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
  };
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'));
