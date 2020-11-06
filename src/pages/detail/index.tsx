import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View, Text} from '@tarojs/components'
import {AtIcon} from 'taro-ui'
import AD from "@/components/Guide"
import NavBar from "@/components/NavBar"
import TaroParser from 'taro-parse'

import {getArticleDetail} from "./service"

import "./index.scss"

interface IState {
  id: string,
  nodes: string,
  data: any,
  show: boolean,
  title: string
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '文章详情',
    enablePullDownRefresh: false,
    navigationStyle: "custom",
  };

  state: IState = {
    id: "",
    title: '',
    nodes: '',
    data: {},
    show: false
  };

  componentDidMount(): void {
    const {id, title} = this.$router.params;
    this.setTitle(title);

    this.setState({id, title}, () => {
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

  onPageScroll(res) {
    this.handleTop(res)
  }

  handleTop = (res) => {
    if (res.scrollTop > Taro.getSystemInfoSync().windowWidth + 100 && !this.state.show) {
      this.setState({
        show: true
      })
    }
    if (res.scrollTop === 0 && this.state.show) {
      this.setState({
        show: false
      })
    }
  };

  onPullDownRefresh = () => {
    Taro.vibrateShort();
    this.queryData()
  };
  // 调取接口
  queryData = async () => {
    const {id} = this.state;
    const {data} = await getArticleDetail(id);
    this.setState({
      nodes: data.body,
      data
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
    const {nodes, data, show, title} = this.state;
    return (
      <View>
        <AD/>
        <NavBar title={title}/>
        <View className={'parse-content'}>
          <View className={'header-padding'}>
            <Text className={"header-title"}>
              {data.title}
            </Text>
            <View className={'author-info'}>
              <AtIcon value='sketch' size='14' color=''/>
              <Text className={'pv-text'}>{data.pv}</Text>
              <Text className={'date'}>  {data.create_date}</Text>
            </View>
          </View>

          <TaroParser
            // type='html'
            type={data.type}
            theme='light'
            content={nodes}
            onImgClick={this.imgClick}
            onLinkClick={this.linkClick}
          />
          <Text className={`go-top , ${show ? "go-top-block" : ""}`} onClick={this.goTop}>
            ↟
          </Text>
        </View>
      </View>
    )
  }
}



