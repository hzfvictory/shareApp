import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
// @ts-ignore
import WxParse from "./components/wxParse"
import "./index.scss"

interface IProps {
  article: string
}

export default class Index extends Component<IProps> {
  static defaultProps = {
    article: "暂无数据"
  };

  // componentDidUpdate(prevProps: any, prevState: any): void {
  //   const {article} = prevProps;
  //
  //   if (!prevState.article && article) {
  //     this.setState({
  //       article
  //     }, () => {
  //       WxParse.wxParse('article', 'html', article, this.$scope, 5)
  //
  //     })
  //   }
  // }

  componentDidMount() {
    // 微信第一次进来空白，没触发
    const {article} = this.props;
    if (article) {
      WxParse.wxParse('article', 'html', article, this.$scope, 5)
    }
  }

  render() {
    return (
      <View>
        <import src='./components/wxParse.wxml'/>
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}
