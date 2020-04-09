import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View, RichText} from '@tarojs/components'
import AD from "@/components/Guide"
import {getArticleDetail} from "./service"

import "./index.scss"


interface IState {
  id: string,
  nodes: string
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '详情页面'
  };
  state: IState = {
    id: "",
    nodes: ''
  };

  componentDidMount(): void {
    const {id} = this.$router.params;
    this.setState({
      id
    }, () => {
      this.queryData()
    })
  }

  queryData = async () => {
    const {id} = this.state;
    const result = this.handleResultData(await getArticleDetail(id));

    this.setState({
      nodes: result[0].body
    })
  };


  render() {
    const {nodes} = this.state;
    return (
      <View>
        <AD/>
        <View className={'rich-text'}>
          {/*<Empty title={title}/>*/}
          {/*<View dangerouslySetInnerHTML={{__html: nodes}} />*/}
          <RichText nodes={nodes} space='ensp'/>
        </View>
      </View>

    )
  }
}
