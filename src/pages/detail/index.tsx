import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View, Text} from '@tarojs/components'
import AD from "@/components/Guide"
import TaroParser from 'taro-parse'

import {getArticleDetail} from "./service"

import "./index.scss"

interface IState {
  id: string,
  nodes: string,
  pv: number
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '文章详情',
    enablePullDownRefresh: true
  };
  state: IState = {
    id: "",
    nodes: '',
    pv: 0
  };

  componentDidMount(): void {
    const {id, title} = this.$router.params;
    this.setTitle(title);

    this.setState({id}, () => {
      this.queryData()
    })
  }

  onShareAppMessage(res) {
    const {title, id} = this.$router.params;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res)
    }
    return {
      title: title,
      path: `${this.$router.path}?id=${id}&title=${title}`
    }
  }

  onPullDownRefresh = () => {
    Taro.vibrateShort();
    this.queryData()
  };
  stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh();
  };

  // 调取接口
  queryData = async () => {
    Taro.showNavigationBarLoading();
    const {id} = this.state;
    const {temp_data} = await getArticleDetail(id);
    this.setState({
      nodes: temp_data.body,
      pv: temp_data.pv
    }, () => {
      this.stopPullDownRefresh();
      Taro.hideNavigationBarLoading();
    })
  };

  goTop = () => {
    Taro.pageScrollTo({
      scrollTop: 0
    });
  };

  // imgClick = (src) => {
  //   Taro.previewImage({urls: [src]}).then(() => {
  //   })
  // };

  imgClick = (src, imgList) => {
    Taro.previewImage({urls: imgList, current: src}).then(() => {
    })
  };

  linkClick = (href) => {
    Taro.setClipboardData({data: href}).then(() => {
      Taro.showToast({title: '链接已复制'}).then(() => {
      })
    })

  };

  render() {
    const {nodes, pv} = this.state;
    return (
      <View>
        <AD/>
        <View className={'parse-content'}>
          <TaroParser
            type='html'
            theme='light'
            content={nodes}
            onImgClick={this.imgClick}
            onLinkClick={this.linkClick}
          />
          <Text className={'pv_text'} onClick={this.goTop}>
            ↟ 浏览量 ：{pv}
          </Text>
        </View>

      </View>
    )
  }
}



