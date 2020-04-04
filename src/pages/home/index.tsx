import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View} from '@tarojs/components'
import MySwiper from "@/components/MySwiper"
import Article from "@/components/Article";
import {banners} from "./config"
import {getList} from "./service"

import './index.scss'

interface IState {
  data: any[],
  article: any[]
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  state: IState = {
    data: [],
    article: []
  };

  componentDidMount() {
    this.setState({
      data: banners,

    });
    this.queryData()
  }

  queryData = async () => {
    const result = this.handleResultData(await getList());
    this.setState({
      article: result,

    });
  };

  onClickArticle = () => {
    this.jumpUrl('/pages/detail/index?title=请在后台完善该篇文章')
  };

  render() {
    const {article} = this.state;

    return (
      <View>
        <MySwiper
          banner={this.state.data}
          home
        />
        <View className='content'>
          {
            !!article.length && article.map((item) => {
              return (
                <Article
                  onHandleClick={this.onClickArticle}
                  key={item._id}
                  articleId={item._id}
                  title={item.user_name}
                  thumb='https://ae01.alicdn.com/kf/H429e1354fc1d40f8a762d714b6718aeba.png'
                  author={item.user_name}
                  publishTime={item.create_date}
                />
              )
            })
          }
        </View>
      </View>
    )
  }
}
