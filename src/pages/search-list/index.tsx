import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {AtSearchBar} from 'taro-ui'
import {View} from '@tarojs/components'
import Article from "@/components/Article";
import Empty from "@/components/Empty";
import {queryArticleList} from "./service"
import {USERID} from "@/utils/constants"


interface IState {
  article: any,
  isLoading: boolean,
  value: string
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '文章搜索',
  };
  state = {
    article: [],
    isLoading: true,
    value: ''
  };

  onClickArticle = (item: any) => () => {
    this.jumpUrl(`/pages/detail/index?id=${item._id}&title=${item.title}`)
  };

  onChange(value) {
    this.setState({
      value: value
    });

    if (!value) {
      this.setState({
        article: [],
        isLoading: true,
      })
    }
  }

  async onActionClick() {
    this.showNavigationBarLoading();
    this.setState({
      isLoading: true
    });

    const {value} = this.state;
    const params = {
      title: value,
      watch_status: 'all',
      skip: 0,
      limit: 10
    };

    const result = this.handleResultData(await queryArticleList(USERID, params));
    this.setState({
      article: result,
      isLoading: false,
    }, () => {
      this.hideNavigationBarLoading();
    });
  }

  render() {
    const {article, isLoading, value} = this.state;

    return (
      <View style={{padding: 10}}>
        <AtSearchBar
          actionName='搜一下'
          fixed
          value={value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <View style={{marginTop: '45px'}}/>
        {
          !!article.length ?
            article.map((item: any) => {
              return (
                <Article
                  onHandleClick={this.onClickArticle(item)}
                  key={item._id}
                  articleId={item._id}
                  title={item.title}
                  thumb={item.cover_key}
                  author={item.nickname}
                  publishTime={item.create_date}
                />
              )
            }) :
            !isLoading && <Empty/>
        }
      </View>
    )
  }
}
