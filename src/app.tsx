import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux';
import store from './utils/dva';
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
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
    ],
    subPackages: [
      {
        "root": "dev",
        "pages": [
          "index",
        ],
      },
    ], // 分包
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'JSNotes',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
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
