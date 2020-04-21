/**
 * Author: hzf;
 * Date: 2020-04-18 14:43;
 * Description:头部胶囊
 */
import Taro, {PureComponent} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import {AtIcon} from "taro-ui";
import {jumpUrl} from "@/utils/router"
import './index.scss'

interface IState {
  height: number
}

interface IProps {
  callback?: () => void,
  path?: string,
  home?: boolean,
  style?: any,
  title?: string
}


export default class Index extends PureComponent<IProps, IState> {
  state = {
    height: 66
  };
  static defaultProps = {
    home: false,
  };

  componentDidMount(): void {

    Taro.getSystemInfo({
      success: res => {
        //导航高度
        this.setState({
          height: res.statusBarHeight + 46
        })
      }
    })
  }

  render() {
    const {height} = this.state;
    const {home, title} = this.props;
    const {height: boundHeight, top, width} = Taro.getMenuButtonBoundingClientRect();

    // const sty = {
    //   height: (boundHeight - 2) + 'PX',
    //   top: (top - 10 + 1) + 'PX',
    //   width: (width - 2) + 'PX',
    //   left: (windowWidth - right + 1) + 'PX',
    //   lineHeight: (boundHeight - 2) + 'PX',
    // };

    const sty = {
      height: boundHeight + 'PX',
      top: (top - 10) + 'PX',
      width: (width - 20) + 'PX',
      left: 10 + 'PX',
      lineHeight: boundHeight + 'PX',
    };

    //兼容百度小程序
    if (process.env.TARO_ENV === 'swan') {
      sty.top = '17px';
      sty.lineHeight = 'px'
    }

    return (
      <View style={{height: `${height}px`}}>
        <View className={'navContent'} style={{height: `${height}px`}}>
          <View className={'navBox'} style={{height: `${height - 20}px`}}>
            <View
              className={'backGo'}
              style={sty}
            >
              <View className={'btnClick'} onClick={this.jumpUrl}>
                <AtIcon prefixClass={'icon'} value='left1' size='20' color='#272731'/>
              </View>
              {/*分割线*/}
              {/*<View className={'navLine'} style={{height: (boundHeight - 14) + 'PX'}}/>*/}
              <View className={'btnClick'} onClick={this.jumpHome}>
                <AtIcon prefixClass={'icon'} value='home4' size='20' color='#272731'/>
              </View>
            </View>
            <View>
              <Text className={'navTitle'} style={{lineHeight: sty.lineHeight}}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  jumpHome = () => {
    jumpUrl('/pages/home/index');
  };

  jumpUrl = () => {
    //优先跳转有path的
    const {path} = this.props;
    if (path) {
      jumpUrl(path);
      return false;
    }
    let pages = Taro.getCurrentPages();
    if (pages.length !== 1) {
      Taro.navigateBack({
        delta: 1
      });
    }
  };
}
