import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View, RichText, Text, Button} from '@tarojs/components'
import AD from "@/components/Guide"
import {getArticleDetail} from "./service"

import "./index.scss"


interface IState {
  id: string,
  nodes: string,
  pv: number
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '文章详情'
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

  queryData = async () => {
    const {id} = this.state;
    const {temp_data} = await getArticleDetail(id);
    this.setState({
      nodes: temp_data.body,
      pv: temp_data.pv
    })
  };

  goTop = () => {
    Taro.pageScrollTo({
      scrollTop: 0
    });
  };

  render() {
    const {nodes, pv} = this.state;
    return (
      <View>
        <AD/>
        <View className={'rich-text'}>
          {/*<Empty title={title}/>*/}
          {/*<View dangerouslySetInnerHTML={{__html: nodes}} />*/}
          <RichText nodes={nodes} space='ensp'/>
          <Text className={'pv_text'} onClick={this.goTop}>
            浏览量：{pv}
          </Text>
        </View>
      </View>
    )
  }
}
