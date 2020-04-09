import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View} from '@tarojs/components'
import {AtGrid} from "taro-ui"
import {jumpUrl} from "@/utils/router"
import {queryArticleList} from "./service"
import {USERID} from "@/utils/constants"

interface IState {
  dataList: any[]
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '专题'
  };

  state = {
    dataList: []
  };

  componentDidMount(): void {
    this.queryList()
  }

  queryList = async () => {
    const result = this.handleResultData(await queryArticleList(USERID));
    const draftData = [];
    result.map((item) => {
      let image = item.avatar && item.avatar[0]['url'];
      let obj = {
        image,
        value: item.name,
        ...item
      };
      // @ts-ignore
      draftData.push(obj)
    });

    console.log(draftData);

    this.setState({
      dataList: draftData
    })
  };

  handlerClick = (item) => {
    jumpUrl(`/pages/article-list/index?id=${item._id}&value=${item.name}`)
  };

  render() {
    return (
      <View className='topics-content'>
        <AtGrid onClick={this.handlerClick} data={this.state.dataList}/>
      </View>
    )
  }
}
