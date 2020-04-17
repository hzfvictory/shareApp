import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View} from '@tarojs/components'
import Article from "@/components/Article";
import Empty from "@/components/Empty";
import {getArticleList} from "./service"


interface IState {
  article: any[],
  c_id: string,
  isLoading: boolean
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '文章列表页',
    enablePullDownRefresh: true
  };
  state: IState = {
    article: [],
    c_id: '',
    isLoading: true
  };

  componentDidMount() {
    const {id, title} = this.$router.params;
    this.setTitle(title);
    this.setState({
      c_id: id
    }, () => {
      this.queryData()
    })
  }

  onPullDownRefresh = () => {
    Taro.vibrateShort();
    this.queryData()
  };
  stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh();
  };

  queryData = async () => {
    Taro.showNavigationBarLoading();
    this.setState({
      isLoading: true
    });
    const {c_id} = this.state;
    const result = this.handleResultData(await getArticleList(c_id));

    this.setState({
      article: result,
      isLoading: false
    }, () => {
      this.stopPullDownRefresh();
      Taro.hideNavigationBarLoading();
    });
  };

  onClickArticle = (item: any) => () => {
    this.jumpUrl(`/pages/detail/index?id=${item._id}&title=${item.title}`)
  };

  render() {
    const {article, isLoading} = this.state;

    return (
      <View style={{padding: 10}}>
        {
          !!article.length ?
            article.map((item) => {
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
